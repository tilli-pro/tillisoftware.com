"use client";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const MobileNav: React.FC = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="px-0 md:hidden" variant="ghost">
          <Menu />
        </Button>
      </DrawerTrigger>
    </Drawer>
  );
};
