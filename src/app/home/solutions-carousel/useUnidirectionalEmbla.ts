import type { EmblaCarouselType } from "embla-carousel-react";
import { useEffect, useRef } from "react";

export function useUnidirectionalEmbla(
  emblaApi: EmblaCarouselType | undefined,
) {
  const startXRef = useRef<number | null>(null);
  const startIndexRef = useRef(0);
  const isBlockingRef = useRef(false);

  useEffect(() => {
    if (!emblaApi) return;

    const viewport = emblaApi.rootNode();

    const onPointerDown = (e: PointerEvent) => {
      startXRef.current = e.clientX;
      startIndexRef.current = emblaApi.selectedScrollSnap();
      isBlockingRef.current = false;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (startXRef.current === null) return;

      const deltaX = e.clientX - startXRef.current;

      // block backward scrolling
      if (deltaX > 0) {
        isBlockingRef.current = true;

        e.preventDefault();
        e.stopImmediatePropagation();

        // scroll to the start index
        emblaApi.scrollTo(startIndexRef.current, false);
      }
    };

    const onPointerUp = () => {
      startXRef.current = null;
      isBlockingRef.current = false;
    };

    viewport.addEventListener("pointerdown", onPointerDown, { passive: false });
    viewport.addEventListener("pointermove", onPointerMove, { passive: false });
    viewport.addEventListener("pointerup", onPointerUp);
    viewport.addEventListener("pointercancel", onPointerUp);
    return () => {
      viewport.removeEventListener("pointerdown", onPointerDown);
      viewport.removeEventListener("pointermove", onPointerMove);
      viewport.removeEventListener("pointerup", onPointerUp);
      viewport.removeEventListener("pointercancel", onPointerUp);
    };
  }, [emblaApi]);
}
