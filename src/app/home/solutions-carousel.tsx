"use client";

import { useEffect, useState } from "react";

const industries = [
  {
    name: "Banking and Finance",
    description:
      "Transform your company's financial solutions. Improve AML and KYC compliance and reduce operating costs while increasing customer satisfaction.",
    image:
      "https://www.figma.com/api/mcp/asset/d48da3a6-7db6-4d57-8d1c-8bd157cf220c",
  },
  {
    name: "Education and Universities",
    description:
      "Streamline tuition payments, campus services, and student billing with automated workflows designed for educational institutions.",
    image:
      "https://www.figma.com/api/mcp/asset/f6cc94b0-8742-4fc3-8476-965bdae60183",
  },
  {
    name: "Insurance",
    description:
      "Simplify premium collections, claims processing, and policy management with intelligent automation built for insurance providers.",
    image:
      "https://www.figma.com/api/mcp/asset/3204408a-bf6c-48d3-a62d-64e82699389f",
  },
  {
    name: "Utilities",
    description:
      "Modernize utility billing, meter-to-cash workflows, and customer payments with real-time tracking and automated reminders.",
    image:
      "https://www.figma.com/api/mcp/asset/ae6da2ac-178b-49bb-881f-a6098a7710d9",
  },
];

export function SolutionsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % industries.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleIndustryClick = (index: number) => {
    setActiveIndex(index);
  };

  // Create an extended array for continuous scrolling effect
  const getVisibleItems = () => {
    const items = [];
    // Show current and next 3 items (or more depending on viewport)
    for (let i = 0; i < industries.length + 2; i++) {
      const index = (activeIndex + i) % industries.length;
      items.push({ ...industries[index], displayIndex: i });
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <>
      <div className="mb-8 flex flex-col gap-2">
        <p className="font-header text-5xl">Solutions for</p>
        <div className="relative flex h-16 items-center overflow-hidden">
          {visibleItems.map((item, idx) => {
            const isActive = item.displayIndex === 0;
            const offset = item.displayIndex;

            // Calculate translateX based on size differences
            let translateX = 0;
            if (offset === 0) {
              translateX = 0;
            } else if (offset === 1) {
              // Position after the active text + arrow + some gap
              translateX = 550; // Adjust based on active text width
            } else if (offset === 2) {
              translateX = 900;
            } else if (offset === 3) {
              translateX = 1200;
            }

            const opacity = offset === 0 ? 1 : offset <= 3 ? 1 : 0;

            return (
              <button
                className="absolute left-0 flex items-center gap-6 transition-all duration-700"
                key={`text-${item.name}-${idx}`}
                onClick={() =>
                  handleIndustryClick(
                    (activeIndex + offset) % industries.length,
                  )
                }
                style={{
                  transform: `translateX(${translateX}px)`,
                  opacity,
                  pointerEvents: isActive ? "auto" : "none",
                }}
                type="button"
              >
                <p
                  className={`whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text font-header text-5xl text-transparent"
                      : "text-foreground text-xl"
                  }`}
                >
                  {item.name}
                </p>
                {isActive && (
                  <svg
                    className="shrink-0"
                    fill="none"
                    height="30"
                    viewBox="0 0 30 30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Gradient</title>
                    <path
                      d="M12 8L20 15L12 22"
                      stroke="url(#gradient)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="gradient"
                        x1="12"
                        x2="20"
                        y1="8"
                        y2="22"
                      >
                        <stop stopColor="#60A5FA" />
                        <stop offset="1" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mb-16 max-w-md">{industries[activeIndex].description}</p>

      <div className="relative h-[520px] w-full overflow-hidden">
        {visibleItems.map((item, idx) => {
          const isActive = item.displayIndex === 0;
          const offset = item.displayIndex;

          // Position items: active at 0, others spaced to the right
          const translateX = offset * 650;
          const scale = isActive ? 1 : 0.6;
          // Show active (1.0), next 2 items (0.3), third item fading (0.15)
          const opacity =
            offset === 0
              ? 1
              : offset === 1
                ? 0.3
                : offset === 2
                  ? 0.3
                  : offset === 3
                    ? 0.15
                    : 0;
          const zIndex = isActive
            ? 10
            : offset === 1
              ? 5
              : offset === 2
                ? 4
                : 1;

          return (
            <div
              className="absolute top-0 left-0 flex flex-col items-center gap-8 transition-all duration-700 ease-in-out"
              key={`${item.name}-${idx}`}
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                transformOrigin: "left center",
                opacity,
                zIndex,
              }}
            >
              <div
                className={`overflow-hidden rounded-4xl border border-white/50 transition-all duration-700 ${
                  isActive ? "h-[394px] w-[588px]" : "h-[330px] w-[330px]"
                }`}
              >
                <img
                  alt={item.name}
                  className="h-full w-full rounded-4xl object-cover"
                  src={item.image}
                />
              </div>
              {isActive && (
                <button
                  className="flex items-center justify-between gap-4 font-medium text-lg transition-opacity hover:opacity-70"
                  type="button"
                >
                  <span>{item.name}</span>
                  <svg
                    fill="none"
                    height="30"
                    viewBox="0 0 30 30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Gradient</title>
                    <path
                      d="M12 8L20 15L12 22"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
