"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { win } from "@/lib/utils";
import { MobileNav } from "./mobile-nav.client";
import { navItems } from "./nav-items";
import { NavProducts } from "./nav-products";
import { NavSolutions } from "./nav-solutions";

const HOVER_OPEN_DELAY = 200;
const HOVER_OPEN_SKIP_DELAY = 100;
const HOVER_CLOSE_DELAY = 300;

type NavKey = (typeof navItems)[number]["label"];

const navContentMap: Record<NavKey, React.ReactElement> = {
  Products: <NavProducts />,
  Solutions: <NavSolutions />,
  Company: <div>Company</div>,
  Developer: <div>Developer</div>,
};

const calculateInitialHaloPosition = (): Record<NavKey, string> => {
  const _win = win();
  if (!_win)
    return {
      Products: "41%",
      Solutions: "46%",
      Company: "52%",
      Developer: "64%",
    };

  const screenWidth = _win.innerWidth;
  const iDelta = 35;
  const moveX = screenWidth > 768 ? (screenWidth - 768) / 2 : 0;
  return {
    Products: `${screenWidth / 2 - iDelta * 2 - moveX}px`,
    Solutions: `${screenWidth / 2 - iDelta - moveX}px`,
    Company: `${screenWidth / 2 + iDelta - moveX}px`,
    Developer: `${screenWidth / 2 + iDelta * 2 - moveX}px`,
  };
};

export const Nav: React.FC = () => {
  const [openNavItem, setOpenNavItem] = useState<
    { current?: NavKey; previous?: NavKey } | undefined
  >(undefined);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const _openTimerRef = useRef(0);
  const _closeTimerRef = useRef(0);
  const submenuCoords = useRef<{ x: number; width: number }>(null);
  const submenuContentRef =
    useRef<Record<NavKey, { x: number; width: number }>>(null);
  const [navHaloBgPosition, setNavHaloBgPosition] = useState<
    Record<NavKey, string>
  >(calculateInitialHaloPosition());

  const isMobile = useIsMobile();

  const _isTransitioning = isEntering || isExiting;

  useEffect(() => {
    const _win = win();
    if (!_win) return;

    const _onEnterNavItem = (e: Event, _index: number) => {
      setIsExiting(false);
      setIsEntering(true);
      _win.clearTimeout(_closeTimerRef.current);
      _openTimerRef.current = _win.setTimeout(
        () => {
          setOpenNavItem((prev) => {
            const newKey = (e.target as HTMLElement)?.innerText as NavKey;

            if (!newKey || newKey === prev?.current) {
              return prev;
            }

            return {
              current: newKey,
              previous: prev?.current ?? newKey,
            };
          });
          setIsEntering(false);
        },
        openNavItem === undefined ? HOVER_OPEN_DELAY : HOVER_OPEN_SKIP_DELAY,
      );
    };

    const _onLeaveNavItem = () => {
      setIsExiting(true);
      setIsEntering(false);
      _win.clearTimeout(_openTimerRef.current);
      if (!isNavDropdownOpen) {
        _closeTimerRef.current = _win.setTimeout(() => {
          setOpenNavItem(undefined);
          setIsExiting(false);
        }, HOVER_CLOSE_DELAY);
      }
    };

    const navItemElements = Array.from(document.querySelectorAll("nav ul li"));

    const listenerCleanup: ((e: Event) => void)[] = [];
    const navMeasurements = navItemElements.map((el) => ({
      key: (el as HTMLElement).innerText as NavKey,
      measure: el.getBoundingClientRect(),
    }));
    submenuContentRef.current = navMeasurements.reduce(
      (acc, curr) => {
        acc[curr.key] = {
          x: curr.measure.x,
          width: curr.measure.width,
        };
        return acc;
      },
      {} as Record<NavKey, { x: number; width: number }>,
    );
    if (submenuContentRef.current && submenuCoords.current) {
      const { x: submenuX } = submenuCoords.current;
      const updatedPositions = Object.entries(submenuContentRef.current).reduce(
        (r, [key, coords]) => {
          const { x, width } = coords;
          const relativeX = x - submenuX;
          const centerX = relativeX + width / 2;
          r[key as NavKey] = `${centerX.toFixed(2)}px`;
          return r;
        },
        {} as Record<NavKey, string>,
      );
      setNavHaloBgPosition(updatedPositions);
    }

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
    setIsExiting(false);
    const _win = win();
    if (!_win) return;
    _win.clearTimeout(_closeTimerRef.current);
  };

  const onLeaveNavDropdown = () => {
    setIsNavDropdownOpen(false);
    setIsExiting(true);
    const _win = win();
    if (!_win) return;
    _closeTimerRef.current = _win.setTimeout(() => {
      setOpenNavItem(undefined);
      setIsExiting(false);
    }, HOVER_CLOSE_DELAY + 150);
  };

  return isMobile ? (
    <MobileNav />
  ) : (
    <nav className="group z-9999 w-full">
      <ul className="flex justify-center font-medium text-xs">
        {navItems.map((item, _index) => (
          <li className="relative" key={item.label}>
            <Link className="rounded p-2" href={item.href}>
              {item.label}
            </Link>
          </li>
        ))}
        <AnimatePresence>
          {openNavItem?.current !== undefined && (
            <motion.div
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                skewY: 0,
                skewX: 0,
                height: "auto",
              }}
              className="page-width absolute top-[calc(100%-0.75rem)] right-0 left-0 z-99999 origin-top-left"
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
              <motion.div
                animate={{
                  "--bg-origin": `at ${navHaloBgPosition[openNavItem.current]} -0.35rem`,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="nav-submenu size-full min-h-48 rounded-sm bg-linear-175 from-80% from-background/60 to-background/20 p-2 bg-blend-darken shadow-accent-foreground/5 shadow-lg backdrop-blur"
                initial={{
                  "--bg-origin": `at ${navHaloBgPosition[openNavItem.current]} -0.5rem`,
                }}
                ref={(ref) => {
                  submenuCoords.current = ref?.getBoundingClientRect() ?? null;
                }}
              >
                <motion.div
                  animate={{
                    opacity: 1,
                    translateX: 0,
                    translateY: 0,
                  }}
                  className="h-full w-full"
                  exit={{
                    opacity: 0.4,
                    translateY: 6,
                  }}
                  initial={{
                    translateY: -6,
                    opacity: 0.6,
                  }}
                  key={openNavItem?.current}
                >
                  {navContentMap[openNavItem.current]}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </nav>
  );
};
