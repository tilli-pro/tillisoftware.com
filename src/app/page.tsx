import { Button } from "@/components/ui/button";
import { BusinessCarousel } from "./business-carousel";

export default function Home() {
  return (
    <>
      {/* Radial gradient for the hero */}
      <div className="-z-1 absolute top-0 right-0 left-0 overflow-visible">
        <div className="absolute h-[120dvh] w-full bg-radial-[at_50%_0%] from-[#325EF6]/30 to-70% to-transparent"></div>
      </div>

      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-start">
        <section
          className="page-width flex flex-col items-center justify-center gap-12 pt-8 text-center"
          id="hero"
        >
          <Button className="block" size="sm">
            Check out whats new with{" "}
            <span className="font-header">
              tilli<sup>X</sup>
            </span>
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
        </section>

        <div className="md:min-h-48" id="hero-images"></div>

        <section className="my-16 w-full">
          <div className="page-width">
            <h2 className="text-center text-xl">
              Supporting businesses across the globe
            </h2>
          </div>
          <div className="my-8 flex h-16 w-full flex-col justify-center">
            <BusinessCarousel />
          </div>
        </section>

        <section className="page-width my-32 flex flex-col items-start md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="font-header text-muted-foreground text-sm uppercase">
              Our Platform
            </div>
            <h2 className="text-3xl">
              Build for
              <br />
              <span>seamless</span> service delivery
            </h2>
          </div>
          <div className="flex w-full items-center justify-center md:w-1/2">
            <div>
              <p className="text-sm">
                tilli is the unified platform designed to help organizations
                streamline payments, communication, and client services. With
                enterprise-grade security, automation, and an intuitive
                interface, tilli empowers teams to manage every touchpoint —
                from invoicing and reminders to insights and support — all in
                one place.
              </p>
              <Button>Explore our Products</Button>
            </div>
          </div>
        </section>

        <section className="over-page-width mt-32">
          <div className="relative w-full overflow-hidden rounded-t-lg bg-linear-to-b from-[#325EF6]/5 to-90% to-background px-4">
            <div className="-z-1 absolute top-0 left-0 h-full w-full overflow-hidden">
              <div className="-top-1/2 absolute left-0 h-full w-2/3 rounded-full bg-conic from-[#CAE1FF80] via-[#004DFF80] to-[#A8CFEA80] blur-3xl" />
              <div className="absolute top-0 right-0 h-2/3 w-2/3 rounded-full bg-conic/shorter from-[#CAE1FF80] via-[#004DFFFF] to-[#A8CFEA80] blur-3xl" />
              <div className="-top-full absolute h-[200%] w-full rounded-full bg-conic-300/shorter from-[#2370CA80] to-[#7DB6FF80] blur-3xl" />
            </div>
            <div className="page-width pt-16">
              <div className="mb-24 flex w-full flex-col items-start gap-4 md:flex-row">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl text-white">
                    Modern tools for how money flows today.
                  </h2>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex w-full flex-col gap-6">
                    <p className="text-white">
                      From invoicing to instant payments, our ecosystem makes
                      managing transactions smoother, faster, and smarter.
                    </p>
                    <div className="flex items-center justify-start gap-4">
                      <Button>
                        Learn more about
                        <span className="font-header">
                          tilli<sup>x</sup>
                        </span>
                      </Button>
                      <Button>Get a Demo</Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[600px] w-full rounded-t-2xl bg-black/50" />
            </div>
          </div>
        </section>

        <section className="page-width my-32">
          <div className="my-16 flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl">Built for seamless billing</h2>
            <p className="mx-auto max-w-lg">
              Crafted for speed, scale, and simplicity.
              <br />
              <span className="font-header">
                tilli<sup>X</sup>{" "}
              </span>
              gives utility teams the tools to streamline collections and
              elevate customer experience.
            </p>
          </div>
          <div className="flex gap-8">
            <div className="w-full md:w-1/3">
              <div className="mb-6 h-[300px] w-full rounded bg-linear-to-br from-gray-300 to-gray-500" />
              <div className="mb-2 font-medium text-lg">
                Automated out of the box
              </div>
              <p>
                Let tilliX handle invoicing, reminders, and reconciliation—no
                manual work required.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="mb-6 h-[300px] w-full rounded bg-linear-to-br from-gray-300 to-gray-500" />
              <div className="mb-2 font-medium text-lg">
                Built for utility teams
              </div>
              <p>
                Centralized dashboards, multi-user roles, and audit trails that
                make operations smoother.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="mb-6 h-[300px] w-full rounded bg-linear-to-br from-gray-300 to-gray-500" />
              <div className="mb-2 font-medium text-lg">
                Designed for real-time
              </div>
              <p>
                Track payments, balances, and billing history the moment they
                happen—across web and mobile.
              </p>
            </div>
          </div>
        </section>

        <section className="over-page-width">
          <div className="relative w-full overflow-hidden rounded-b-lg bg-linear-to-t from-[#325EF6]/5 to-90% to-background px-4">
            <div className="-z-1 absolute top-0 left-0 h-full w-full overflow-hidden">
              <div className="-bottom-full absolute h-[200%] w-full rounded-full bg-conic-300/shorter from-[#2370CA] to-[#7DB6FF] blur-2xl" />
            </div>
            <div className="page-width pb-16">
              <div className="mb-24 flex w-full flex-col items-start gap-4 md:flex-row">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl">
                    Modern tools for how money flows today.
                  </h2>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex w-full flex-col gap-6">
                    <p className="">
                      From invoicing to instant payments, our ecosystem makes
                      managing transactions smoother, faster, and smarter.
                    </p>
                    <div className="flex items-center justify-start gap-4">
                      <Button>
                        Learn more about
                        <span className="font-header">
                          tilli<sup>x</sup>
                        </span>
                      </Button>
                      <Button>Get a Demo</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex h-[600px] w-full items-center justify-center gap-4">
                <div className="h-80 w-[300px] rounded bg-gray-500/40"></div>
                <div className="h-80 w-[300px] rounded bg-gray-500/40"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="over-page-width my-8">
          <div className="flex flex-wrap items-start gap-4 text-sm">
            <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
              <div className="mb-2 font-medium">🧾 Multiple Payment Modes</div>
              <p>
                Pay using UPI, credit/debit cards, net banking, or
                wallets—whatever works best for you.
              </p>
            </div>
            <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
              <div className="mb-2 font-medium">📱 Mobile-first</div>
              <p>Designed for speed and simplicity across any device.</p>
            </div>
            <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
              <div className="mb-2 font-medium">
                🔁 Scheduled & Recurring Payments
              </div>
              <p>Set it and forget it—automate regular payments with ease.</p>
            </div>
            <div className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)]">
              <div className="mb-2 font-medium">📊 Real-time Tracking</div>
              <p>Get instant updates on every transaction. No surprises.</p>
            </div>
          </div>
        </section>
        <section className="page-width my-16"></section>
      </main>
    </>
  );
}
