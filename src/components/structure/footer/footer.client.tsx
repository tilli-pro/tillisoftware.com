"use client";

import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/links/inline";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const footerSiteMapLinks: Record<string, { text: string; href: string }[]> = {
  Products: [
    {
      text: "Nudge",
      href: "/products/nudge",
    },
    {
      text: "tilliX",
      href: "/products/tillix",
    },
    {
      text: "tilliPay",
      href: "/products/tillipay",
    },
    {
      text: "tilliArc",
      href: "/products/tilliarc",
    },
    {
      text: "Compare",
      href: "/products/compare",
    },
  ],
  Resources: [
    {
      text: "Pricing",
      href: "/pricing",
    },
    {
      text: "Request a Demo",
      href: "/resources/demo",
    },
    {
      text: "Start a Free Trial",
      href: "/resources/trial",
    },
    {
      text: "Industries",
      href: "/industries",
    },
    {
      text: "Contact",
      href: "/resources/contact",
    },
  ],
  Developer: [
    {
      text: "Documentation",
      href: "/docs",
    },
    {
      text: "API Reference",
      href: "/docs/api",
    },
    {
      text: "SDKs & Tools",
      href: "/docs/sdk",
    },
    {
      text: "Help Center",
      href: "/help",
    },
    {
      text: "Status",
      href: "/status",
    },
  ],
  Company: [
    {
      text: "About Us",
      href: "/company/about",
    },
    {
      text: "Careers",
      href: "/company/careers",
    },
    {
      text: "Security",
      href: "/company/security",
    },
    {
      text: "Trust Center",
      href: "/company/trust",
    },
    {
      text: "Blog",
      href: "/blog/",
    },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-16 text-white">
      <div className="page-width">
        <div className="group/footer-links mb-4 grid w-full grid-flow-col-dense grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1">
          {Object.entries(footerSiteMapLinks).map(([section, links]) => (
            <div
              className="mb-4 flex flex-col items-start justify-start gap-4 text-left"
              key={section}
            >
              <h3 className="font-sans transition-colors group-has-[a:hover]/footer-links:text-muted-foreground">
                {section}
              </h3>
              <div className="flex flex-col items-start gap-1">
                {links.map(({ text, href }) => (
                  <Link
                    className={cn(
                      "text-muted-foreground transition-colors duration-150 hover:text-white",
                      {
                        "font-light": text === "Status",
                        "group/status": text === "Status",
                      },
                    )}
                    href={href}
                    key={text}
                  >
                    {text}
                    {/* TODO: make this not static */}
                    {text === "Status" && (
                      <div className="relative flex items-center rounded-full ring-1 ring-transparent transition-all group-hover/status:ring-green-500">
                        <div className="mx-1.5 size-1 origin-center animate-ping rounded-full bg-green-500 transition-all group-hover/status:size-2 group-hover/status:animate-pulse" />
                        <div className="absolute left-1 size-2 rounded-full bg-green-600 opacity-50 transition-all group-hover/status:opacity-0"></div>
                        <span className="w-0 overflow-hidden font-medium text-xs uppercase tracking-tightest opacity-0 transition-[width,opacity] duration-150 ease-in group-hover/status:w-23 group-hover/status:opacity-100">
                          Operational
                        </span>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col items-start justify-start gap-4 text-left">
            <h3 className="font-sans transition-colors group-has-[a:hover]/footer-links:text-muted-foreground">
              Get Started Today
            </h3>
            <div className="flex flex-col items-start gap-1">
              <Link
                className="transition-colors duration-700 hover:text-transparent! group-has-[a:hover]/footer-links:text-muted-foreground group-has-[a:hover]/footer-links:duration-150"
                href="/free-trial"
                type="gradient"
              >
                Start a Free Trial
              </Link>
              <Link
                className="transition-colors duration-700 hover:text-transparent! group-has-[a:hover]/footer-links:text-muted-foreground group-has-[a:hover]/footer-links:duration-150"
                href="/demo"
                type="gradient"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between md:flex-row">
          <div className="flex flex-col flex-wrap items-center gap-4 lg:max-w-[40%] lg:flex-nowrap lg:items-start">
            <div
              className="w-full font-header font-medium text-3xl"
              id="logo-footer"
            >
              tilli.
            </div>
            <p className="text-sm">
              We{"\u2019"}re devoted to creating a global consumer environment
              that feels more personalized and connected than ever before.
              Through cloud-based, customer-centric tools, we{"\u2019"}re
              revolutionizing customer engagement to create avenues that help
              businesses and people connect, collaborate, and make payments in
              real-time.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 lg:items-end">
            {/* asdfasdfasdf */}
          </div>
        </div>
      </div>
      <div className="page-width grid grid-cols-3 grid-rows-2">
        <div className="self-end justify-self-stretch">
          <div className="flex w-full items-end justify-between">
            <div className="flex flex-1 items-end justify-start gap-2">
              <div className="flex flex-col justify-end gap-2">
                <Button
                  className="rounded-full"
                  size="icon"
                  variant="secondary"
                >
                  <SiYoutube className="size-4 text-black" />
                </Button>
                <Button
                  className="rounded-full"
                  size="icon"
                  variant="secondary"
                >
                  <SiYoutube className="size-4 text-black" />
                </Button>
                <Button
                  className="rounded-full"
                  size="icon"
                  variant="secondary"
                >
                  <SiX className="size-4 text-black" />
                </Button>
              </div>
              <div className="flex flex-col justify-end gap-2">
                <Button
                  className="rounded-full"
                  size="icon"
                  variant="secondary"
                >
                  <SiFacebook className="size-4 text-black" />
                </Button>
                <Button
                  className="rounded-full"
                  size="icon"
                  variant="secondary"
                >
                  <SiInstagram className="size-4 text-black" />
                </Button>
              </div>
            </div>

            <div className="text-right text-muted-foreground text-xs">
              <p>
                © {new Date().getFullYear()}{" "}
                <span className="font-header text-white">tilli</span>
                <br />
                all rights reserved
              </p>
              <div className="flex items-center justify-end pt-2">
                <Link
                  className="text-muted-foreground hover:text-muted-foreground"
                  href="/terms"
                >
                  Terms
                </Link>
                <Separator
                  className="mx-2 bg-muted-foreground data-[orientation=vertical]:h-3"
                  orientation="vertical"
                />
                <Link
                  className="text-muted-foreground hover:text-muted-foreground"
                  href="/privacy-policy"
                >
                  Privacy
                </Link>
                <Separator
                  className="mx-2 bg-muted-foreground data-[orientation=vertical]:h-3"
                  orientation="vertical"
                />
                <Link
                  className="text-muted-foreground hover:text-muted-foreground"
                  href="/cookies"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end justify-self-center">
          <div className="flex flex-col gap-2">
            <Link className="font-header" href="/resources/demo">
              Request a Demo
            </Link>
            <Link className="font-header" href="/resources/trial">
              Start a Free Trial
            </Link>
            <Link className="font-header" href="/resources/contact">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="place-self-end">
          <div className="flex flex-col text-right">
            <div className="mb-4 font-header">Headquarters</div>
            <div className="text-muted-foreground text-xs">
              8260 Greensboro Dr,
              <br />
              Suite 270, McLean VA, 22102
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// TODO: find a linkedin icon
// TODO: get all relevant social links
// TODO: link socials to footer icons
