import { Button } from "@/components/ui/button";
import { BusinessCarousel } from "./business-carousel";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-start">
      <div
        className="page-width flex flex-col items-center justify-center gap-12 pt-8 text-center"
        id="hero"
      >
        <div className="-z-1 absolute top-0 right-0 left-0 overflow-visible">
          <div className="absolute h-[120dvh] w-full bg-radial-[at_50%_0%] from-[#325EF6]/30 to-80% to-transparent"></div>
        </div>

        <Button className="block" size="sm">
          Check out whats new with tilliX
        </Button>
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-8 py-4">
          <h1 className="text-5xl">
            Transform{" "}
            <span className="text-amber-950 text-shadow-blue-200 text-shadow-sm">
              Billing
            </span>{" "}
            and{" "}
            <span className="text-amber-950 text-shadow-blue-200 text-shadow-sm">
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
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          <Button className="w-56">Try a Demo</Button>
          <Button className="w-56">View our Products</Button>
        </div>
      </div>
      <div className="md:min-h-48" id="hero-images"></div>
      <div className="w-full py-4">
        <h2 className="mt-8 text-center text-xl">
          Supporting businesses across the globe
        </h2>
        <div className="my-8 flex h-16 w-full flex-col justify-center">
          <BusinessCarousel />
        </div>
      </div>
      <div className="page-width flex flex-col md:flex-row">
        <div className="w-1/2">
          <div className="font-header text-muted-foreground text-sm uppercase">
            Our Platform
          </div>
          <div className="font-header text-sm"></div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </main>
  );
}
