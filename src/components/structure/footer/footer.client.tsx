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
  ],
  Industries: [
    {
      text: "Utilities",
      href: "/industries/utilities",
    },
    {
      text: "Banking & Finance",
      href: "/industries/banking-finance",
    },
    {
      text: "Telecom",
      href: "/industries/telecommunications",
    },
    {
      text: "View All",
      href: "/industries",
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
      text: "Compare Products",
      href: "/resources/compare",
    },
    {
      text: "Contact",
      href: "/resources/contact",
    },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-22">
      <div className="page-width px-8 grid grid-rows-2 grid-cols-3">
        <div className="row-span-1 col-span-1 flex flex-col justify-start items-start gap-4">
          <div id="logo-footer" className="font-header text-3xl font-medium">
            tilli
          </div>
          <p className="text-sm">
            We{"\u2019"}re devoted to creating a global consumer environment
            that feels more personalized and connected than ever before. Through
            cloud-based, customer-centric tools, we{"\u2019"}re revolutionizing
            CPaaS and payment processing landscapes to create avenues that help
            businesses and people connect, collaborate, and make payments in
            real-time.
          </p>
          <Button className="text-primary" variant="outline">
            More about us
          </Button>
        </div>
        <div className="row-span-1 col-span-2 justify-self-end self-start">
          <div className="flex items-start justify-end gap-6">
            {Object.entries(footerSiteMapLinks).map(([section, links]) => (
              <div
                key={section}
                className="flex flex-col gap-4 items-start justify-start"
              >
                <h3 className="font-sans">{section}</h3>
                <div className="flex flex-col gap-2 max-w-32 min-w-24">
                  {links.map(({ text, href }) => (
                    <Link
                      noIcon
                      key={text}
                      href={href}
                      className="text-muted-foreground hover:text-muted-foreground"
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
          <div className="flex justify-between w-full items-end">
            <div className="flex flex-1 justify-start items-end gap-2">
              <div className="flex flex-col justify-end gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <SiYoutube className="size-4 text-black" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <SiYoutube className="size-4 text-black" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <SiX className="size-4 text-black" />
                </Button>
              </div>
              <div className="flex flex-col justify-end gap-2">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <SiFacebook className="size-4 text-black" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <SiInstagram className="size-4 text-black" />
                </Button>
              </div>
            </div>

            <div className="text-right text-muted-foreground text-xs">
              <p>
                © {new Date().getFullYear()} - Copyright tilli
                <br />
                All Rights reserved
              </p>
              <div className="flex items-center justify-end pt-2">
                <Link
                  noIcon
                  href="/terms"
                  className="text-muted-foreground hover:text-muted-foreground"
                >
                  Terms
                </Link>
                <Separator
                  orientation="vertical"
                  className="bg-muted-foreground mx-2 data-[orientation=vertical]:h-3"
                />
                <Link
                  noIcon
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-muted-foreground"
                >
                  Privacy
                </Link>
                <Separator
                  orientation="vertical"
                  className="bg-muted-foreground mx-2 data-[orientation=vertical]:h-3"
                />
                <Link
                  noIcon
                  href="/cookies"
                  className="text-muted-foreground hover:text-muted-foreground"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="self-end justify-self-center">
          <div className="flex flex-col gap-2">
            <Link className="font-header" href="/resources/demo" color="white">
              Request a Demo
            </Link>
            <Link className="font-header" href="/resources/trial" color="white">
              Start a Free Trial
            </Link>
            <Link
              className="font-header"
              href="/resources/contact"
              color="white"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="place-self-end">
          <div className="flex flex-col text-right">
            <div className="font-header mb-4">Headquarters</div>
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
