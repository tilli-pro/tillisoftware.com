"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { win } from "@/lib/utils";
import { navItems } from "./nav-items";
import { NavProducts } from "./nav-products";

const HOVER_OPEN_DELAY = 200;
const HOVER_OPEN_SKIP_DELAY = 100;
const HOVER_CLOSE_DELAY = 300;

type NavKey = (typeof navItems)[number]["label"];

const navContentMap: Record<NavKey, React.ReactElement> = {
  Products: <NavProducts />,
  Industries: <div>Industries</div>,
  Company: <div>Company</div>,
  Resources: <div>Resources</div>,
  Pricing: <div>Pricing</div>,
};

export const Nav: React.FC = () => {
  const [openNavItem, setOpenNavItem] = useState<NavKey | undefined>(undefined);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const isMobile = useIsMobile();
  // const [isEntering, setIsEntering] = useState(false);
  // const [isExiting, setIsExiting] = useState(false);
  const _openTimerRef = useRef(0);
  const _closeTimerRef = useRef(0);

  useEffect(() => {
    const _win = win();
    if (!_win) return;

    const _onEnterNavItem = (e: Event, _index: number) => {
      // setIsExiting(false);
      // setIsEntering(true);
      _win.clearTimeout(_closeTimerRef.current);
      _openTimerRef.current = _win.setTimeout(
        () => {
          setOpenNavItem(
            e.target instanceof HTMLElement
              ? (e.target.innerText as NavKey)
              : undefined,
          );
          // setIsEntering(false);
        },
        openNavItem === undefined ? HOVER_OPEN_DELAY : HOVER_OPEN_SKIP_DELAY,
      );
    };

    const _onLeaveNavItem = () => {
      // setIsExiting(true);
      // setIsEntering(false);
      _win.clearTimeout(_openTimerRef.current);
      if (!isNavDropdownOpen) {
        _closeTimerRef.current = _win.setTimeout(() => {
          setOpenNavItem(undefined);
          // setIsExiting(false);
        }, HOVER_CLOSE_DELAY);
      }
    };

    const navItemElements = Array.from(document.querySelectorAll("nav ul li"));

    const listenerCleanup: ((e: Event) => void)[] = [];
    navItemElements.forEach((el, index) => {
      const enterListener = (e: Event) => _onEnterNavItem(e, index);
      listenerCleanup.push(enterListener);
      el.addEventListener("mouseenter", enterListener);
      el.addEventListener("mouseleave", _onLeaveNavItem);
    });

    return () => {
      navItemElements.forEach((el, index) => {
        el.removeEventListener("mouseenter", listenerCleanup[index]);
        el.removeEventListener("mouseleave", _onLeaveNavItem);
      });
    };
  }, [openNavItem, isNavDropdownOpen]);

  const onEnterNavDropdown = () => {
    setIsNavDropdownOpen(true);
    // setIsExiting(false);
    const _win = win();
    if (!_win) return;
    _win.clearTimeout(_closeTimerRef.current);
  };

  const onLeaveNavDropdown = () => {
    setIsNavDropdownOpen(false);
    // setIsExiting(true);
    const _win = win();
    if (!_win) return;
    _closeTimerRef.current = _win.setTimeout(() => {
      setOpenNavItem(undefined);
      // setIsExiting(false);
    }, HOVER_CLOSE_DELAY + 150);
  };

  // const isTransitioning = isEntering || isExiting;

  return isMobile ? null : (
    <nav className="group z-9999 w-full">
      <ul className="flex justify-center font-medium text-xs">
        {navItems.map((item, _index) => (
          <li key={item.label}>
            <Link className="rounded p-2" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
        <AnimatePresence>
          {openNavItem !== undefined && (
            <motion.div
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                skewY: 0,
                skewX: 0,
                height: "auto",
              }}
              className="page-width absolute top-5/6 right-0 left-0 z-9999 origin-top-left"
              exit={{
                scale: 0.99,
                y: -4,
                opacity: 0,
                skewY: 0.1,
                skewX: 1,
                transition: { duration: 0.2 },
              }}
              initial={{
                scale: 0.99,
                y: -4,
                opacity: 0.7,
                skewY: 0.1,
                skewX: 1,
              }}
              onMouseEnter={onEnterNavDropdown}
              onMouseLeave={onLeaveNavDropdown}
            >
              <div className="size-full rounded-sm bg-linear-175 from-80% from-background/60 to-background/20 p-2 bg-blend-exclusion shadow-accent-foreground/5 shadow-lg ring-2 ring-border/50 backdrop-blur">
                <motion.div
                  animate={{
                    opacity: 1,
                    translateX: 0,
                    translateY: 0,
                  }}
                  exit={{
                    opacity: 0.4,
                  }}
                  initial={{
                    translateX: 6,
                    opacity: 0.6,
                  }}
                  key={openNavItem}
                >
                  {navContentMap[openNavItem]}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </nav>
  );
};
