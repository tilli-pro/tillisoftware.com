"use client";

import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Link } from "@/components/ui/links/inline";
import { cn } from "@/lib/utils";
import { LinkedIn } from "./linkedin-icon";

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
      text: "Industries",
      href: "/industries",
    },
    {
      text: "Use Cases",
      href: "/use",
    },
    {
      text: "Contact",
      href: "/contact",
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
        <div className="group/footer-links mb-4 grid w-full grid-cols-2 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-2 lg:grid-cols-5 lg:grid-rows-1">
          {Object.entries(footerSiteMapLinks).map(([section, links]) => (
            <div
              className="group/footer-link-list relative mb-4 flex flex-col items-start justify-start gap-4 text-left"
              key={section}
            >
              <div className="-top-16 -left-16 absolute hidden h-0 w-full opacity-0 transition-all duration-300 group-has-[a:hover]/footer-link-list:h-[3px] group-has-[a:hover]/footer-link-list:opacity-100 group-has-[a:hover]/footer-link-list:duration-300 lg:block">
                <div className="size-full bg-[linear-gradient(to_right,#00000000,#5C9BF4_33.5%,#2E67F8_78.8%,#6CD3EF_90%,#00000000_100%)] bg-position-[200%_0] bg-size-[100%_100%] transition-all duration-300 hover:bg-position-[200%_0] group-has-[a:hover]/footer-link-list:bg-position-[100%_0]" />
              </div>
              <h3 className="font-sans transition-colors group-has-[a:hover]/footer-links:text-muted-foreground group-has-[div.abner:hover]/footer-links:text-muted-foreground">
                {section}
              </h3>
              <div className="abner flex flex-col items-start gap-1">
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
                href="/trial"
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
        <div className="flex flex-col items-end justify-between lg:flex-row">
          <div className="flex max-w-full flex-col items-start gap-4 lg:max-w-[40%] lg:items-start">
            <div className="w-full text-center md:text-left" id="logo-footer">
              <Link
                className="font-header font-medium text-3xl text-shadow-black text-shadow-lg text-white transition-all hover:text-shadow-white/10 hover:text-white"
                href="/"
                type="default"
              >
                tilli.
              </Link>
            </div>
            <p className="text-center text-sm md:text-left">
              We{"\u2019"}re devoted to creating a global consumer environment
              that feels more personalized and connected than ever before.
              Through cloud-based, customer-centric tools, we{"\u2019"}re
              revolutionizing customer engagement to create avenues that help
              businesses and people connect, collaborate, and make payments in
              real-time.
            </p>
            <div className="w-full text-center text-muted-foreground text-xs md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-header font-medium text-white">tilli</span>.
              all rights reserved.
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col items-center gap-4 md:items-start lg:items-end">
            <div className="flex items-center justify-center gap-4 lg:justify-end">
              <Link
                className="text-muted-foreground transition-colors hover:text-white"
                href="https://x.com/tillisoftware"
                type="default"
              >
                <SiX className="size-4" />
              </Link>
              <Link
                className="text-muted-foreground transition-colors hover:text-white"
                href="https://instagram.com/tillisoftware"
                type="default"
              >
                <SiInstagram className="size-4" />
              </Link>
              <Link
                className="text-muted-foreground transition-colors hover:text-white"
                href="https://facebook.com/tillisoftware"
                type="default"
              >
                <SiFacebook className="size-4" />
              </Link>
              <Link
                className="text-muted-foreground transition-colors hover:text-white"
                href="https://youtube.com/@tillisoftware"
                type="default"
              >
                <SiYoutube className="size-4" />
              </Link>
              <Link
                className="text-muted-foreground transition-colors hover:text-white"
                href="https://linkedin.com/company/tilli-llc/"
                type="default"
              >
                <LinkedIn className="size-4 fill-muted-foreground transition-colors hover:fill-white" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4 text-sm lg:justify-end">
              <Link
                className="text-muted-foreground transition-colors hover:text-white"
                href="/terms"
              >
                Terms
              </Link>
              <Link
                className="text-muted-foreground transition-colors hover:text-white"
                href="/privacy-policy"
              >
                Privacy
              </Link>
              <Link
                className="text-muted-foreground transition-colors hover:text-white"
                href="/anti-slavery-policy"
              >
                Anti-Slavery Policy
              </Link>
              <Link
                className="text-muted-foreground transition-colors hover:text-white"
                href="/cookie-policy"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
