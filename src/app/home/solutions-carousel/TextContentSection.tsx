"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type ActiveIndustry = {
  name: string;
  description: string;
};

export default function TextContentSection({
  activeIndustry,
}: {
  activeIndustry: ActiveIndustry;
}) {
  return (
    <div className="flex flex-col gap-8 min-w-[500px] max-w-[500px]!">
      <div className="flex flex-col items-start gap-2">
        <p className="font-header text-5xl lg:text-4xl whitespace-nowrap">
          Solutions for
        </p>

        <Button className="flex items-center gap-6 p-0! overflow-visible h-full bg-transparent hover:bg-transparent font-normal">
          <p
            className="whitespace-nowrap bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text font-header text-5xl lg:text-4xl text-transparent leading-[1.2] animate-fade-slide"
            key={activeIndustry.name}
          >
            {activeIndustry.name}
          </p>
          <ChevronRight className="text-blue-600 size-6" />
        </Button>
      </div>

      <p
        className="max-w-md animate-fade-slide"
        key={activeIndustry.description}
      >
        {activeIndustry.description}
      </p>
    </div>
  );
}
