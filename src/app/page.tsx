import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div
        id="hero"
        className="text-center page-width flex flex-col justify-center items-center gap-12 pt-8"
      >
        <div className="-z-1 absolute overflow-visible top-0 left-0 right-0">
          <div className="w-full h-[120dvh] absolute bg-radial-[at_50%_0%] from-[#325EF6]/30 to-transparent to-80% overflow-visible"></div>
        </div>

        <Button size="sm" className="block">
          Check out whats new with tilliX
        </Button>
        <div className="w-full max-w-2xl mx-auto py-4 flex flex-col items-center justify-center gap-8">
          <h1 className="text-5xl">
            Transform{" "}
            <span className="text-shadow-blue-200 text-shadow-sm text-blue-950">
              Billing
            </span>{" "}
            and{" "}
            <span className="text-shadow-blue-200 text-shadow-sm text-blue-950">
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
      <div className="mt-8"></div>
    </main>
  );
}
