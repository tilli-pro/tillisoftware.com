"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TextContentSection({
  activeIndustry,
  handleIndustryClick,
}: {
  activeIndustry: { name: string; description: string };
  handleIndustryClick: (index: number) => void;
}) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-2">
        <p className="font-header text-5xl">Solutions for</p>

        <Button
          className="flex items-center gap-6 p-0! overflow-visible h-full transition-all duration-300 bg-transparent hover:bg-transparent font-normal"
          onClick={() => handleIndustryClick(activeIndustry)}
        >
          <p className="whitespace-nowrap bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text font-header text-5xl text-transparent leading-tight">
            {activeIndustry.name}
          </p>
          <ChevronRight className="text-blue-600 size-6" />
        </Button>
      </div>

      <p className="max-w-md">{activeIndustry.description}</p>
    </div>
  );
}
