"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AudioLines, Inbox, LoaderCircle, Mic } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Kbd } from "@/components/ui/kbd";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "submitted";

const schema = z.object({
  message: z.string().min(1),
});

export function FeedbackPopover() {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      message: "",
    },
  });
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      console.log("speech recognition API supported");
    } else {
      console.log("speech recognition API not supported");
    }

    const SpeechRecognitionCtor =
      window.webkitSpeechRecognition || window.SpeechRecognition;

    // Browser not supported
    if (!SpeechRecognitionCtor) return;

    const recognition: SpeechRecognition = new SpeechRecognitionCtor();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join(" ");
      form.setValue(
        "message",
        `${form.getValues("message") ?? ""}${transcript} `,
      );
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, [form]);

  const toggleListening = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    if (isListening) {
      recognition.stop();
    } else {
      try {
        recognition.start();
        setIsListening(true);
      } catch {
        // recognition already started, ignore
      }
    }
  };

  const onSubmit = useCallback(async (_values: z.infer<typeof schema>) => {
    const promise = new Promise((resolve) => {
      setStatus("submitting");
      setTimeout(() => {
        resolve(true);
        setStatus("submitted");
      }, 1000);
    });
    toast.promise(promise, {
      loading: "Sending feedback...",
      success: "Feedback sent",
      error: "Failed to send feedback",
    });
    await promise;
  }, []);

  useEffect(() => {
    if (!open && status === "submitted") {
      // NOTE: the popover takes 300ms to close, so we need to wait for that
      setTimeout(() => setStatus("idle"), 300);
    }
  }, [open, status]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (open && (e.metaKey || e.ctrlKey) && e.key === "Enter") {
        form.handleSubmit(onSubmit)();
      }

      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if (isTyping) return;

      if (!open) {
        if (e.key === "f") {
          e.preventDefault();
          setOpen(true);
        }
        return;
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, form, onSubmit]);

  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <Button
          className="group gap-2 px-2 text-muted-foreground text-sm hover:bg-transparent hover:text-foreground data-[state=open]:text-foreground"
          size="sm"
          variant="ghost"
        >
          Feedback{" "}
          <Kbd className="font-mono group-hover:text-foreground group-data-[state=open]:text-foreground">
            F
          </Kbd>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="center" className="relative border-none p-0">
        {status === "submitted" ? (
          <div className="flex h-[120px] flex-col items-center justify-center gap-1 rounded-md border border-input p-3 text-base shadow-xs">
            <Inbox className="size-4 shrink-0 text-foreground" />
            <p className="text-center font-medium text-foreground">
              Thanks for sharing!
            </p>
            <p className="text-center text-muted-foreground text-sm">
              We&apos;ll get in touch if there&apos;s a follow-up.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-0">
                    <FormLabel className="sr-only">Feedback</FormLabel>
                    <FormControl>
                      <Textarea
                        className="field-sizing-fixed h-[120px] resize-none p-3"
                        placeholder="Ideas, bugs, or anything else..."
                        rows={4}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              {recognitionRef.current && (
                <Button
                  className="group absolute bottom-1.5 left-1.5 gap-0"
                  onClick={toggleListening}
                  size="sm"
                  type="button"
                  variant="ghost"
                >
                  {isListening ? (
                    <AudioLines className="size-4 animate-pulse" />
                  ) : (
                    <Mic className="size-4" />
                  )}
                </Button>
              )}
              <Button
                className="group absolute right-1.5 bottom-1.5 gap-2"
                disabled={status === "submitting"}
                size="sm"
                type="submit"
                variant="ghost"
              >
                {status === "submitting" ? (
                  <LoaderCircle className="size-4 animate-spin" />
                ) : (
                  <>
                    Send
                    <Kbd className="font-mono group-hover:text-foreground">
                      ⌘
                    </Kbd>
                    <Kbd className="font-mono group-hover:text-foreground">
                      ↵
                    </Kbd>
                  </>
                )}
              </Button>
            </form>
          </Form>
        )}
      </PopoverContent>
    </Popover>
  );
}
