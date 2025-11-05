import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BusinessCarousel } from "./business-carousel";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-start">
      <div
        id="hero"
        className="text-center page-width flex flex-col justify-center items-center gap-12 pt-8"
      >
        <div className="-z-1 absolute overflow-visible top-0 left-0 right-0">
          <div className="w-full h-[120dvh] absolute bg-radial-[at_50%_0%] from-[#325EF6]/30 to-transparent to-80%"></div>
        </div>

        <Button size="sm" className="block">
          Check out whats new with tilliX
        </Button>
        <div className="w-full max-w-2xl mx-auto py-4 flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl">
            Transform{" "}
            <span className="text-shadow-blue-200 text-shadow-sm text-amber-950">
              Billing
            </span>{" "}
            and{" "}
            <span className="text-shadow-blue-200 text-shadow-sm text-amber-950">
              Payments
            </span>{" "}
            into Seamless Digital Engagement
          </h1>
          <p>
            Powerful tools for automation, invoicing, and financial workflows.
            <br />
            Built for modern teams.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
          <Button className="w-56">Try a Demo</Button>
          <Button className="w-56">View our Products</Button>
        </div>
      </div>
      <div id="hero-images" className="md:min-h-48"></div>
      <div className="py-4 w-full">
        <h2 className="text-xl mt-8 text-center">
          Supporting businesses across the globe
        </h2>
        <div className="w-full my-8 h-16 flex flex-col justify-center">
          <BusinessCarousel />
        </div>
      </div>
      <div className="page-width flex flex-col md:flex-row">
        <div className="w-1/2">
          <div className="text-muted-foreground font-header uppercase text-sm">
            Our Platform
          </div>
          <div className="font-header text-sm"></div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </main>
  );
}
