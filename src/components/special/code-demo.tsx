"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import * as styles from "react-syntax-highlighter/dist/esm/styles/hljs";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const STYLES = styles;

interface CodeDemoProps {
  className?: string;
  sections: Record<
    string,
    {
      title?: string;
      fileName?: string;
      lang: string;
      code: string;
      footer?: string | React.ReactElement;
    }
  >;
  codeBaseStyle?: keyof typeof STYLES;
  codeExtraStyle?: React.CSSProperties;
}
export const CodeDemo: React.FC<CodeDemoProps> = ({
  className,
  sections,
  codeBaseStyle,
  codeExtraStyle = {},
}) => {
  const demoRef = useRef<HTMLDivElement>(null);
  const sectionEntries = useMemo(() => Object.entries(sections), [sections]);
  const sectionOriginalCode = useRef(
    Object.fromEntries(
      sectionEntries.map(([key, section]) => [key, section.code]),
    ),
  );
  const defaultTab = sectionEntries[0][0];
  const [sectionCodes, setSectionCodes] = useState(
    Object.fromEntries(sectionEntries.map(([key]) => [key, ""])),
  );
  const [currentTab, setCurrentTab] = useState(defaultTab);

  const codeStyle = STYLES[codeBaseStyle ?? "a11yDark"];

  useEffect(() => {
    sectionOriginalCode.current = Object.fromEntries(
      sectionEntries.map(([key, section]) => [key, section.code]),
    );

    let interval: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            interval = setInterval(() => {
              setSectionCodes((prev) => {
                const originalCode = sectionOriginalCode.current[currentTab];
                const currentCode = prev[currentTab];
                if (currentCode.length >= originalCode.length) {
                  clearInterval(interval);
                  return prev;
                }
                const nextLength = currentCode.length + 1;
                return {
                  ...prev,
                  [currentTab]: originalCode.slice(0, nextLength),
                };
              });
            }, 34);
          }
        });
      },
      { threshold: 0.7 },
    );

    if (demoRef.current) {
      observer.observe(demoRef.current);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
      observer.disconnect();
    };
  }, [sectionEntries, currentTab]);

  const onTabChange = (value: string) => {
    setSectionCodes((prev) => ({
      ...prev,
      [value]: "",
    }));
    setCurrentTab(value);
  };

  return (
    <Card className={cn("", className)} ref={demoRef}>
      <Tabs
        className="h-full"
        defaultValue={defaultTab}
        onValueChange={onTabChange}
      >
        <CardHeader>
          <TabsList>
            {sectionEntries.map(([sectionKey, section]) => (
              <TabsTrigger key={sectionKey} value={sectionKey}>
                {section.title ?? capitalize(section.lang)}
              </TabsTrigger>
            ))}
          </TabsList>
        </CardHeader>
        {sectionEntries.map(([sectionKey, section]) => (
          <TabsContent className="flex-1" key={sectionKey} value={sectionKey}>
            <div className="mb-4 flex items-center justify-between">
              {section.fileName && (
                <div className="text-muted-foreground text-sm">
                  {section.fileName}
                </div>
              )}
            </div>
            <CardContent className="h-full flex-1 pb-4">
              <SyntaxHighlighter
                customStyle={{
                  // backgroundColor: "rgb(42, 54, 86, 0.2)",
                  padding: "1rem",
                  borderRadius: "0.25rem",
                  fontSize: "0.75rem",
                  height: "100%",
                  filter: "saturate(1.5) brightness(1.2)",
                  ...codeExtraStyle,
                }}
                language={section.lang}
                style={codeStyle}
              >
                {sectionCodes[sectionKey] ?? section.code}
              </SyntaxHighlighter>
            </CardContent>
            {section.footer && <CardFooter>{section.footer}</CardFooter>}
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
};
