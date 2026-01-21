"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type ActiveIndustry = {
  name: string;
  description: string;
  // route: string;
};

export default function TextContentSection({
  activeIndustry,
}: {
  activeIndustry: ActiveIndustry;
}) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayIndustry, setDisplayIndustry] = useState(activeIndustry);

  useEffect(() => {
    if (activeIndustry.name !== displayIndustry.name) {
      setIsAnimating(true);
      // wait for fade out, then update content and fade in
      const timer = setTimeout(() => {
        setDisplayIndustry(activeIndustry);
        setIsAnimating(false);
      }, 150); // half of transition duration

      return () => clearTimeout(timer);
    }
  }, [activeIndustry, displayIndustry.name]);

  return (
    <div className="flex flex-col gap-8 min-w-[500px] max-w-[500px]!">
      <div className="flex flex-col items-start gap-2">
        <p className="font-header text-5xl lg:text-4xl whitespace-nowrap">
          Solutions for
        </p>

        <Button className="flex items-center gap-6 p-0! overflow-visible h-full transition-all duration-300 bg-transparent hover:bg-transparent font-normal">
          <p
            className={`whitespace-nowrap bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text font-header text-5xl lg:text-4xl text-transparent leading-[1.2] transition-all duration-300 ${
              isAnimating
                ? "opacity-0 translate-x-4"
                : "opacity-100 translate-x-0"
            }`}
          >
            {displayIndustry.name}
          </p>
          <ChevronRight className="text-blue-600 size-6" />
        </Button>
      </div>

      <p
        className={`max-w-md transition-all duration-300 ${
          isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
        }`}
      >
        {displayIndustry.description}
      </p>
    </div>
  );
}
