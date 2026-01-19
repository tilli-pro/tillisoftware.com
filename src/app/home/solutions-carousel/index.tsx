"use client";

import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { industries } from "./data";

export function SolutionsCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      containScroll: "trimSnaps",
      align: "start",
      loop: true,
    },
    [Autoplay(), ClassNames({ snapped: "is-snapped" })],
  );

  return (
    <section className="embla overflow-hidden">
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
              <p className="font-medium text-sm"> {industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
