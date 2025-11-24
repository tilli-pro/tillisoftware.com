"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { navItems } from "./nav-items";

export const MobileNav: React.FC = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="px-0 md:hidden" variant="ghost">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="p-2 pt-4">
            <DrawerTitle className="font-header font-medium text-xl">
              <DrawerTrigger asChild>
                <Link href="/">tilli.</Link>
              </DrawerTrigger>
            </DrawerTitle>
            {/* <DrawerDescription></DrawerDescription> */}
          </DrawerHeader>
          <div className="flex flex-col gap-4 py-4 font-sans">
            {/* Mobile navigation items go here */}
            <Accordion className="w-full" collapsible type="single">
              {navItems.map((item) => (
                <AccordionItem
                  className="w-full px-2"
                  key={item.href}
                  value={item.label}
                >
                  <AccordionTrigger className="font-sans">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 py-2"></div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <DrawerFooter>{/* Optional footer content */}</DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
