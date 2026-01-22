"use client";

import type {
  EmblaCarouselType,
  EmblaEventListType,
  EmblaEventModelType,
  EmblaOptionsType,
} from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { industries } from "./data";
import TextContentSection from "./TextContentSection";
import { useUnidirectionalEmbla } from "./useUnidirectionalEmbla";

const TWEEN_FACTOR_BASE = 0.4;

const clamp = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export function SolutionsCarousel() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const options: Partial<EmblaOptionsType> = {
    align: "start",
    loop: true, // for some reason this is buggy, but we need this
    containScroll: "trimSnaps",
    skipSnaps: true,
  };

  const plugins = [
    Autoplay(),
    ClassNames({ snapped: "is-snapped", active: true }),
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  useUnidirectionalEmbla(emblaApi);

  // // sync carousel changes with selected idx
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIdx(emblaApi.selectedSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect(); // set initial idx

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__img") as HTMLElement;
    });
    console.log(tweenNodes.current);
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.snapList().length;
  }, []);

  const tweenScale = useCallback(
    <EventType extends keyof EmblaEventListType>(
      emblaApi: EmblaCarouselType,
      event?: EmblaEventModelType<EventType>,
    ) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = event?.type === "scroll";

      emblaApi.snapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.scrollSnapList.slidesBySnap[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = clamp(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          if (!tweenNode) {
            console.log("missing tween node for slide index", slideIndex);
            return;
          }
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    [],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <not needed>
  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reinit", setTweenNodes)
      .on("reinit", setTweenFactor)
      .on("reinit", tweenScale)
      .on("scroll", tweenScale)
      .on("slidefocus", tweenScale);
  }, [emblaApi]);

  const currentIndustry = industries[selectedIdx % industries.length];

  return (
    <div className="flex flex-col xl:flex-row xl:items-center xl:gap-24">
      <TextContentSection activeIndustry={currentIndustry} />

      {/* Carousel */}
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {industries.map((industry, idx) => (
              <div
                className={
                  "embla__slide" + (idx === selectedIdx ? " is-snapped" : "")
                }
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
      </section>
    </div>
  );
}
