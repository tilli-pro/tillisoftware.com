"use client";
import Autoscroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export const BusinessCarousel: React.FC = () => {
  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
        align: "center",
        active: true,
        dragFree: true,
        skipSnaps: true,
      }}
      plugins={[
        Autoscroll({
          active: true,
          speed: 0.5,
          direction: "backward",
          playOnInit: true,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem className="basis-1/9">1</CarouselItem>
        <CarouselItem className="basis-1/9">2</CarouselItem>
        <CarouselItem className="basis-1/9">3</CarouselItem>
        <CarouselItem className="basis-1/6">4</CarouselItem>
        <CarouselItem className="basis-1/6">5</CarouselItem>
        <CarouselItem className="basis-1/6">6</CarouselItem>
        <CarouselItem className="basis-1/6">7</CarouselItem>
        <CarouselItem className="basis-1/6">8</CarouselItem>
        <CarouselItem className="basis-1/6">9</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};
