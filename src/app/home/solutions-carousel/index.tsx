"use client";

import Autoplay from "embla-carousel-autoplay";
// import { EmblaOptionsType } from "embla-carousel";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import type React from "react";

type PropType = {
  slides: number[];
  // options?: EmblaOptionsType;
};

export const SolutionsCarousel: React.FC<PropType> = (props) => {
  const { slides } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [ClassNames(), Autoplay()]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Image
                alt="Your alt text"
                className="embla__slide__img"
                height={350}
                src={`https://picsum.photos/600/350?v=${index}`}
                width={600}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
