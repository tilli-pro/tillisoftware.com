"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { win } from "@/lib/utils";

interface BusinessImageProps {
  src: string;
  alt: string;
  width: number;
  height?: number;
}
const BusinessImage: React.FC<BusinessImageProps> = ({
  src,
  alt,
  height,
  width,
}) => {
  return (
    <Image
      alt={alt}
      className="object-fit drop-shadow-gray-500/20 drop-shadow-lg grayscale transition-[filter] duration-500 hover:drop-shadow-gray-500/0 hover:grayscale-0"
      height={height ?? 96}
      src={src}
      width={width}
    />
  );
};

const prefix = (src: string) => `/assets/clients/logos/logo_${src}.svg`;
const images = [
  { src: prefix("aaa"), alt: "AAA Logo", width: 152, height: 92 },
  { src: prefix("anglian"), alt: "Anglian Water Logo", width: 200 },
  { src: prefix("caresource"), alt: "Caresource Logo", width: 361 },
  { src: prefix("coned"), alt: "Con Edison Logo", width: 474 },
  { src: prefix("fiserv"), alt: "Fiserv Logo", width: 60 },
  { src: prefix("freeman"), alt: "Freeman Logo", width: 459 },
  { src: prefix("frontier"), alt: "Frontier Logo", width: 328 },
  { src: prefix("hc"), alt: "Howard County Logo", width: 277 },
  { src: prefix("oc"), alt: "Orange County Logo", width: 96 },
  { src: prefix("rl"), alt: "ResolutionLife Logo", width: 515 },
  { src: prefix("wgl"), alt: "WGL Logo", width: 148 },
];

const totalWidth = images.reduce((acc, image) => acc + (image.width ?? 96), 0);

export const BusinessCarousel: React.FC = () => {
  const [totalSets, setTotalSets] = useState(
    Math.ceil((win()?.innerWidth ?? totalWidth) / totalWidth) + 2,
  );

  useEffect(() => {
    const _win = win();
    if (!_win) return;

    const _onResize = () => {
      setTotalSets(
        Math.ceil((_win?.innerWidth ?? totalWidth) / totalWidth) + 2,
      );
    };

    _win.addEventListener("resize", _onResize);

    return () => {
      _win.removeEventListener("resize", _onResize);
    };
  }, []);

  return (
    <div className="banner relative min-h-24 w-full overflow-hidden">
      <div className="inner absolute flex items-center">
        {Array.from({ length: totalSets ?? 1 }).map((_, index) => (
          <div
            className="set"
            key={index.toString()}
            // style={{ width: totalWidth + images.length * 6 }}
          >
            {images.map((image) => (
              <BusinessImage key={image.src} {...image} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
