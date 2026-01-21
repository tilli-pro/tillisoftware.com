"use client";

import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel, { type EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import { industries } from "./data";
import TextContentSection from "./TextContentSection";
import { useUnidirectionalEmbla } from "./useUnidirectionalEmbla";

export function SolutionsCarousel() {
  const options: Partial<EmblaOptionsType> = {
    align: "start",
    loop: true, // for some reason this is buggy, but we need this
    containScroll: "trimSnaps",
    skipSnaps: true,
  };

  const plugins = [Autoplay(), ClassNames({ snapped: "is-snapped" })];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  useUnidirectionalEmbla(emblaApi);

  return (
    <div>
      <TextContentSection
        activeIndustry={industries[0]}
        handleIndustryClick={() => {}}
      />

      {/* Carousel */}
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {industries.map((industry) => (
              <div
                className="embla__slide flex flex-col gap-4 items-center justify-center"
                key={industry.name}
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
      </section>
    </div>
  );
}
