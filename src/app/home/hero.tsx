"use client";

import {
  easeInOut,
  easeOut,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import Image from "next/image";

export const HeroImage: React.FC = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [0.7, 1], {
    clamp: true,
    ease: easeOut,
  });
  const translateY = useTransform(scrollY, [0, 800], [0, -800], {
    clamp: false,
    ease: easeInOut,
  });
  const opacity = useTransform(scrollY, [0, 400, 800], [1, 0.7, 0.4], {
    clamp: true,
    ease: easeOut,
  });

  return (
    <motion.div
      className="-top-20 -mb-40 pointer-events-none relative z-1000 flex h-100 w-full origin-[50%_100%] items-start justify-center"
      id="hero-images"
      style={{ scale, translateY, opacity }}
    >
      <Image
        alt="hero"
        className="over-page-width"
        height={785}
        src="/assets/pages/home/hero.png"
        width={1339}
      />
    </motion.div>
  );
};
