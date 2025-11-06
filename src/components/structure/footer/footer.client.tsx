"use client";

import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import { Link } from "@/components/ui/link";
import { Separator } from "@/components/ui/separator";

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
      text: "Compare",
      href: "/products/compare",
    },
  ],
  // Industries: [
  //   {
  //     text: "Utilities",
  //     href: "/industries/utilities",
  //   },
  //   {
  //     text: "Banking & Finance",
  //     href: "/industries/banking-finance",
  //   },
  //   {
  //     text: "Telecom",
  //     href: "/industries/telecommunications",
  //   },
  //   {
  //     text: "View All",
  //     href: "/industries",
  //   },
  // ],
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
      text: "Services",
      href: "/company/services",
    },
  ],
  Resources: [
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
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black py-22 text-white">
      <div className="page-width grid grid-cols-3 grid-rows-2">
        <div className="col-span-1 row-span-1 flex flex-col items-start justify-start gap-4">
          <div className="font-header font-medium text-3xl" id="logo-footer">
            tilli.
          </div>
          <p className="text-sm">
            We{"\u2019"}re devoted to creating a global consumer environment
            that feels more personalized and connected than ever before. Through
            cloud-based, customer-centric tools, we{"\u2019"}re revolutionizing
            CPaaS and payment processing landscapes to create avenues that help
            businesses and people connect, collaborate, and make payments in
            real-time.
          </p>
        </div>
        <div className="col-span-2 row-span-1 self-start justify-self-end">
          <div className="flex items-start justify-end gap-6">
            {Object.entries(footerSiteMapLinks).map(([section, links]) => (
              <div
                className="flex flex-col items-end justify-start gap-4 text-right"
                key={section}
              >
                <h3 className="font-sans">{section}</h3>
                <div className="flex min-w-24 max-w-32 flex-col items-end gap-2">
                  {links.map(({ text, href }) => (
                    <Link
                      className="text-muted-foreground hover:text-muted-foreground"
                      href={href}
                      key={text}
                      noIcon
                    >
                      {text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
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
                  noIcon
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
                  noIcon
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
                  noIcon
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end justify-self-center">
          <div className="flex flex-col gap-2">
            <Link className="font-header" color="white" href="/resources/demo">
              Request a Demo
            </Link>
            <Link className="font-header" color="white" href="/resources/trial">
              Start a Free Trial
            </Link>
            <Link
              className="font-header"
              color="white"
              href="/resources/contact"
            >
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
