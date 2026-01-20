"use client";

export default function TextContentSection({
  activeIndustry,
  selectedIndex,
  handleIndustryClick,
}: {
  activeIndustry: { name: string; description: string };
  selectedIndex: number;
  handleIndustryClick: (index: number) => void;
}) {
  return (
    <div className="flex flex-col gap-8 lg:w-1/2">
      <div className="flex flex-col gap-2">
        <p className="font-header text-5xl">Solutions for</p>
        <div className="relative flex h-16 items-center overflow-hidden">
          <button
            className="flex items-center gap-6 transition-all duration-300"
            onClick={() => handleIndustryClick(selectedIndex)}
            type="button"
          >
            <p className="whitespace-nowrap bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text font-header text-5xl text-transparent">
              {activeIndustry.name}
            </p>
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
          </button>
        </div>
      </div>
      <p className="max-w-md">{activeIndustry.description}</p>
    </div>
  );
}
