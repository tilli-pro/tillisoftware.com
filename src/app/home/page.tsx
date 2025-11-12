import { Building } from "lucide-react";
import { SectionHeader } from "@/components/structure/text-header/section-header";
import { Button } from "@/components/ui/button";
import { BusinessCarousel } from "./business-carousel";
import { SolutionsCarousel } from "./solutions-carousel";

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
          <SectionHeader
            containerClassName="w-full md:w-1/2"
            subTitleIcon={<Building size={18} />}
            subtitle={"Our Platform"}
            title={
              <>
                Build for
                <br />
                <span>seamless</span> service delivery
              </>
            }
          />
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
          <div className="relative w-full overflow-hidden rounded-t-4xl bg-linear-to-b from-[#325EF6]/5 to-90% to-background px-4 md:rounded-lg">
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

        <section className="page-width my-32">
          <div className="mb-6 flex items-center gap-2.5">
            <div className="flex h-6 w-6 items-center justify-center">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Solutions by Industry</title>
                <rect
                  height="7"
                  rx="1"
                  stroke="#A6A6A6"
                  strokeWidth="1.5"
                  width="7"
                  x="3"
                  y="3"
                />
                <rect
                  height="7"
                  rx="1"
                  stroke="#A6A6A6"
                  strokeWidth="1.5"
                  width="7"
                  x="14"
                  y="3"
                />
                <rect
                  height="7"
                  rx="1"
                  stroke="#A6A6A6"
                  strokeWidth="1.5"
                  width="7"
                  x="3"
                  y="14"
                />
                <rect
                  height="7"
                  rx="1"
                  stroke="#A6A6A6"
                  strokeWidth="1.5"
                  width="7"
                  x="14"
                  y="14"
                />
              </svg>
            </div>
            <p className="font-header text-muted-foreground text-xl">
              SOLUTIONS BY INDUSTRY
            </p>
          </div>

          <SolutionsCarousel />
        </section>

        <section className="page-width my-32">
          <div className="mb-16 flex flex-col items-center gap-6 text-center">
            <div className="flex items-center justify-center gap-2.5">
              <div className="flex h-6 w-6 items-center justify-center">
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Gradient</title>
                  <rect
                    height="7"
                    rx="1"
                    stroke="#A6A6A6"
                    strokeWidth="1.5"
                    width="7"
                    x="3"
                    y="3"
                  />
                  <rect
                    height="7"
                    rx="1"
                    stroke="#A6A6A6"
                    strokeWidth="1.5"
                    width="7"
                    x="14"
                    y="3"
                  />
                  <rect
                    height="7"
                    rx="1"
                    stroke="#A6A6A6"
                    strokeWidth="1.5"
                    width="7"
                    x="3"
                    y="14"
                  />
                  <rect
                    height="7"
                    rx="1"
                    stroke="#A6A6A6"
                    strokeWidth="1.5"
                    width="7"
                    x="14"
                    y="14"
                  />
                </svg>
              </div>
              <p className="font-header text-muted-foreground text-xl">
                OUR BENEFITS
              </p>
            </div>
            <div className="mx-auto flex max-w-3xl flex-col gap-5">
              <h2 className="font-header text-5xl">
                How is tilli{" "}
                <span className="bg-linear-to-r from-[#448de6] to-[#98b2e9] bg-clip-text text-transparent">
                  different
                </span>
                ?
              </h2>
              <p className="text-xl leading-[27px]">
                tilli goes beyond just processing payments. Our platform is
                built to simplify financial management, automate workflows, and
                give businesses full control over their revenue.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-[20px] border border-[#33c1ff] bg-linear-to-r from-white/50 to-white/50 p-8">
                <div className="mb-4">
                  <h3 className="mb-1.5 font-header text-xl">
                    Seamless payment processing
                  </h3>
                  <p className="text-muted-foreground">
                    tilli helps you manage transactions smoothly, no matter the
                    platform.
                  </p>
                </div>
                <div className="mt-8">
                  <img
                    alt="Payment processing interface"
                    className="h-auto w-full object-cover"
                    src="https://www.figma.com/api/mcp/asset/3bda5ce8-1875-4dc9-ae5b-fc285ac98087"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[20px] border border-[#33c1ff] bg-gradient-to-r from-white/50 to-white/50 p-8">
                <div className="mb-4">
                  <h3 className="mb-1.5 font-header text-xl">
                    Automate invoicing & reduce admin work
                  </h3>
                  <p className="text-muted-foreground">
                    Generate invoices, send reminders, and get paid
                    faster—automatically.
                  </p>
                </div>
                <div className="mt-8">
                  <img
                    alt="Invoice automation interface"
                    className="h-auto w-full object-cover"
                    src="https://www.figma.com/api/mcp/asset/606bf178-725a-42e9-87a5-52645ded2c45"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-[20px] border border-[#33c1ff] bg-gradient-to-r from-white/50 to-white/50 p-8">
                <div className="mb-4">
                  <h3 className="mb-1.5 font-header text-xl">
                    Automate billing and invoicing
                  </h3>
                  <p className="text-muted-foreground">
                    Reduce manual work with automated invoice generation and
                    tracking.
                  </p>
                </div>
                <div className="mt-8">
                  <img
                    alt="Billing automation interface"
                    className="h-auto w-full object-cover"
                    src="https://www.figma.com/api/mcp/asset/5beb7664-bcba-406d-b4d1-f3ba2855561f"
                  />
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[20px] border border-[#33c1ff] bg-linear-to-r from-white/50 to-white/50 p-8">
                <div className="mb-4">
                  <h3 className="mb-1.5 font-header text-xl">
                    Get a complete view of your finances
                  </h3>
                  <p className="text-muted-foreground">
                    Reconcile payments, billing, and revenue data in one
                    dashboard.
                  </p>
                </div>
                <div className="mt-8">
                  <img
                    alt="Financial dashboard interface"
                    className="h-auto w-full object-cover"
                    src="https://www.figma.com/api/mcp/asset/03a32476-bc17-4029-a8cd-ac05576b27ef"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="my-32 w-full">
          <div className="w-full bg-linear-to-r from-[#448de6] to-[#98b2e9] py-14">
            <div className="mb-16 px-4 md:px-8 lg:px-16">
              <div className="mb-2.5 flex items-start gap-2.5">
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Gradient</title>
                    <rect
                      height="7"
                      rx="1"
                      stroke="white"
                      strokeWidth="1.5"
                      width="7"
                      x="3"
                      y="3"
                    />
                    <rect
                      height="7"
                      rx="1"
                      stroke="white"
                      strokeWidth="1.5"
                      width="7"
                      x="14"
                      y="3"
                    />
                    <rect
                      height="7"
                      rx="1"
                      stroke="white"
                      strokeWidth="1.5"
                      width="7"
                      x="3"
                      y="14"
                    />
                    <rect
                      height="7"
                      rx="1"
                      stroke="white"
                      strokeWidth="1.5"
                      width="7"
                      x="14"
                      y="14"
                    />
                  </svg>
                </div>
                <p className="font-header text-white text-xl">RESULTS</p>
              </div>
              <div className="flex max-w-4xl flex-col gap-5 text-white">
                <h2 className="font-header text-5xl leading-tight">
                  Powering seamless payments and billing for businesses
                </h2>
                <p className="font-header text-xl">
                  Join thousands of businesses leveraging tilli secure,
                  efficient, and intelligent billing solutions
                </p>
              </div>
            </div>

            <div className="flex w-full gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] md:px-8 lg:px-16 [&::-webkit-scrollbar]:hidden">
              <div className="shrink-0 rounded-[30px] border-[#33c1ff] border-[3px] bg-white/50 px-11 py-6 opacity-50 backdrop-blur-[35px]">
                <div className="flex w-[235px] flex-col gap-1">
                  <p className="font-medium text-[64px] text-white leading-tight">
                    215+
                  </p>
                  <p className="font-header text-[29px] text-black/80 leading-tight">
                    Industries served
                  </p>
                  <p className="font-medium text-black/80 text-lg leading-tight">
                    From utilities to fintech, tilli scales with your needs
                  </p>
                </div>
              </div>

              <div className="shrink-0 rounded-[30px] border-[#33c1ff] border-[3px] bg-white/50 px-6 py-3 opacity-50 backdrop-blur-[35px]">
                <div className="flex w-[235px] flex-col gap-1">
                  <p className="font-medium text-[40px] text-white leading-tight">
                    215+
                  </p>
                  <p className="font-header text-black/80 text-xl leading-tight">
                    Industries served
                  </p>
                  <p className="text-black/80 leading-snug">
                    From utilities to fintech, tilli scales with your needs
                  </p>
                </div>
              </div>

              <div className="shrink-0 rounded-[30px] border-[#33c1ff] border-[3px] bg-white/50 px-6 py-3 opacity-80 backdrop-blur-[35px]">
                <div className="flex w-[280px] flex-col gap-1">
                  <p className="font-medium text-[40px] text-white leading-tight">
                    40%
                  </p>
                  <p className="font-header text-black/80 text-xl leading-tight">
                    faster onboarding
                  </p>
                  <p className="text-black/80 leading-snug">
                    Reduce drop-off with frictionless, digital-first enrollment.
                  </p>
                </div>
              </div>

              <div className="shrink-0 rounded-[30px] border-[#33c1ff] border-[3px] bg-white/50 px-6 py-3 backdrop-blur-[35px]">
                <div className="flex w-[255px] flex-col gap-1">
                  <p className="font-medium text-[40px] text-white leading-tight">
                    2M+
                  </p>
                  <p className="font-header text-black/80 text-xl leading-tight">
                    monthly messages sent
                  </p>
                  <p className="text-black/80 leading-snug">
                    Across SMS, WhatsApp, email, and push—at scale.
                  </p>
                </div>
              </div>

              <div className="shrink-0 rounded-[30px] border-[#33c1ff] border-[3px] bg-white/50 px-6 py-3 opacity-60 backdrop-blur-[35px]">
                <div className="flex w-[235px] flex-col gap-1">
                  <p className="font-medium text-[40px] text-white leading-tight">
                    100%
                  </p>
                  <p className="font-header text-black/80 text-xl leading-tight">
                    Industries served
                  </p>
                  <p className="text-black/80 leading-snug">
                    From utilities to fintech, tilli scales with your needs
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 rounded-[30px] border-[#33c1ff] border-[3px] bg-white/50 px-11 py-6 opacity-50 backdrop-blur-[35px]">
                <div className="flex w-[235px] flex-col gap-1">
                  <p className="font-medium text-[40px] text-white leading-tight">
                    215+
                  </p>
                  <p className="font-header text-[29px] text-black/80 leading-tight">
                    Industries served
                  </p>
                  <p className="font-medium text-black/80 text-lg leading-tight">
                    From utilities to fintech, tilli scales with your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-width my-16 flex items-center justify-center py-20">
          <div className="w-full max-w-[998px] rounded-[50px] bg-linear-to-r from-[rgba(68,141,230,0.4)] to-[rgba(152,178,233,0.4)] px-8 py-14 md:px-[90px]">
            <div className="mb-14 flex flex-col items-center gap-2.5 text-center">
              <h2 className="font-header text-[29px] leading-tight">
                Lets make payments simpler, faster and smarter
              </h2>
              <p className="leading-snug">
                See how tilli can streamline your operations and boost
                savings—starting with a quick conversation or product deep dive.
              </p>
            </div>

            <div className="relative mx-auto h-[47.5px] w-full max-w-[400px]">
              <input
                className="absolute top-0 right-[26.25%] bottom-[1.05%] left-0 rounded-l-[50px] border border-[#d9d9d9] bg-white/85 px-5 text-[#060606] placeholder:text-[#d9d9d9] focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email address..."
                type="email"
              />
              <button
                className="absolute top-0 right-0 bottom-[1.05%] left-[72%] rounded-r-[50px] bg-linear-to-r from-[#448de6] to-[#98b2e9] px-6 py-3.5 text-white transition-opacity hover:opacity-90"
                type="button"
              >
                Sign up
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
