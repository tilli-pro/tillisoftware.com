"use client";

import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { industries } from "./data";
import TextContentSection from "./TextContentSection";
import { useUnidirectionalEmbla } from "./useUnidirectionalEmbla";

export function SolutionsCarousel() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const options: Partial<EmblaOptionsType> = {
    align: "start",
    loop: true, // for some reason this is buggy, but we need this
    containScroll: "trimSnaps",
    skipSnaps: true,
  };

  const plugins = [Autoplay(), ClassNames({ snapped: "is-snapped" })];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  useUnidirectionalEmbla(emblaApi);

  // sync carousel changes with selected idx
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIdx(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // set initial idx

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const currentIndustry = industries[selectedIdx % industries.length];

  return (
    <div className="flex flex-col xl:gap-20 xl:flex-row xl:items-center xl:gap-12">
      <TextContentSection activeIndustry={currentIndustry} />

      {/* Carousel */}
      {/* <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {industries.map((industry, idx) => (
              <div
                className="embla__slide flex flex-col gap-4 items-center justify-center"
                key={`${industry.name}-${idx}`} // TODO: remove idx from key once we remove dups from data, related to loop bug on line 2
              >
                <Image
                  alt={industry.name}
                  className="embla__slide__img"
                  height={600}
                  src={industry.image}
                  width={600}
                />
                <p className="font-medium text-sm">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
