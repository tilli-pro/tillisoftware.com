"use client";

import { common, createStarryNight } from "@wooorm/starry-night";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const normalizeLang = (lang: string) => {
  if (lang.startsWith("source.") || lang.startsWith("text.")) {
    return lang;
  } else if (lang.startsWith(".")) {
    return `source${lang}`;
  }

  return `source.${lang}`;
};

// Get total text length of a node and its children
const getTextLength = (node: any): number => {
  if (!node) return 0;
  if (node.type === "text") return (node.value || "").length;
  if (node.children) {
    return node.children.reduce(
      (sum: number, child: any) => sum + getTextLength(child),
      0,
    );
  }
  return 0;
};

// Recursively slice a hast tree at character position
const sliceTreeAtCharacter = (
  node: any,
  targetChars: number,
): { node: any; consumed: number } => {
  if (!node) return { node: null, consumed: 0 };

  // Text node - slice at character level
  if (node.type === "text") {
    const text = node.value || "";
    if (targetChars >= text.length) {
      return { node, consumed: text.length };
    }
    return {
      node: { ...node, value: text.slice(0, targetChars) },
      consumed: targetChars,
    };
  }

  // Element node - process children
  if (node.type === "element" && node.children) {
    let remaining = targetChars;
    const newChildren: any[] = [];

    for (const child of node.children) {
      if (remaining <= 0) break;

      const { node: slicedChild, consumed } = sliceTreeAtCharacter(
        child,
        remaining,
      );
      if (slicedChild) {
        newChildren.push(slicedChild);
      }
      remaining -= consumed;

      // If we didn't consume all chars from this child, we're done
      if (consumed < getTextLength(child)) {
        break;
      }
    }

    return {
      node: { ...node, children: newChildren },
      consumed: targetChars - remaining,
    };
  }

  // Root or other node type
  if (node.children) {
    let remaining = targetChars;
    const newChildren: any[] = [];

    for (const child of node.children) {
      if (remaining <= 0) break;

      const { node: slicedChild, consumed } = sliceTreeAtCharacter(
        child,
        remaining,
      );
      if (slicedChild) {
        newChildren.push(slicedChild);
      }
      remaining -= consumed;

      if (consumed < getTextLength(child)) {
        break;
      }
    }

    return {
      node: { ...node, children: newChildren },
      consumed: targetChars - remaining,
    };
  }

  return { node, consumed: 0 };
};

interface CodeBlock {
  tabTitle: string;
  fileName?: string;
  lang: string;
  code: string;
  footer?: string | React.ReactElement;
  speed?: number;
}

interface CodeDemoProps {
  className?: string;
  blocks: CodeBlock[];
  speed?: number;
  intersectionOpts?: IntersectionObserverInit;
}
export const CodeDemo: React.FC<CodeDemoProps> = ({
  className,
  blocks,
  speed = 34,
  intersectionOpts,
}) => {
  const [codeHighlighter, setCodeHighlighter] =
    useState<Awaited<ReturnType<typeof createStarryNight>>>();
  const demoRef = useRef<HTMLDivElement>(null);
  const blockEntries = useMemo(
    () => Object.fromEntries(blocks.map((block) => [block.tabTitle, block])),
    [blocks],
  );
  const defaultTab = blocks[0].tabTitle;

  // Memoize intersectionOpts to prevent effect re-runs
  const memoizedIntersectionOpts = useMemo(
    () => intersectionOpts ?? { threshold: 0.7 },
    [intersectionOpts],
  );
  const [textProgress, setTextProgress] = useState(0);
  const [currentTab, setCurrentTab] = useState(defaultTab);
  const [sectionHeights, setSectionHeights] = useState<Record<string, number>>(
    {},
  );
  const [currentHeight, setCurrentHeight] = useState<number>(100);
  const measurementRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const hasMeasured = useRef<Record<string, boolean>>({});

  useEffect(() => {
    createStarryNight(common).then(setCodeHighlighter);
  }, []);

  // Memoize tree generation - only rebuild when blocks or highlighter changes
  const trees = useMemo(() => {
    if (!codeHighlighter) return {};
    return Object.fromEntries(
      blocks.map((block) => [
        block.tabTitle,
        codeHighlighter.highlight(block.code, normalizeLang(block.lang)),
      ]),
    );
  }, [blocks, codeHighlighter]);

  // Memoize JSX node generation for current tab only - regenerate only when currentTab's textProgress changes
  const currentTabNode = useMemo(() => {
    const tree = trees[currentTab];
    if (!tree) return null;

    // Slice tree at character level for smooth animation
    const { node: slicedTree } = sliceTreeAtCharacter(tree, textProgress);

    return toJsxRuntime(slicedTree, {
      Fragment,
      jsx,
      jsxs,
      passNode: true,
    });
  }, [trees, currentTab, textProgress]);

  // Memoize full (non-sliced) JSX nodes for height measurement
  const fullNodes = useMemo(() => {
    return Object.fromEntries(
      blocks.map((block) => {
        const tree = trees[block.tabTitle];
        if (!tree) return [block.tabTitle, null];

        const node = toJsxRuntime(tree, {
          Fragment,
          jsx,
          jsxs,
          passNode: true,
        });

        return [block.tabTitle, node];
      }),
    );
  }, [trees, blocks]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const currentBlock = blockEntries[currentTab];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          interval = setInterval(() => {
            setTextProgress((prev) => {
              const totalLength = currentBlock.code.length;
              if (prev >= totalLength) {
                clearInterval(interval);
                return prev;
              }
              return prev + 1;
            });
          }, currentBlock?.speed ?? speed);
        }
      });
    }, memoizedIntersectionOpts);

    if (demoRef.current) {
      observer.observe(demoRef.current);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
      observer.disconnect();
    };
  }, [blockEntries, currentTab, speed, memoizedIntersectionOpts]);

  // Reset measurements when sections or styles change
  // biome-ignore lint/correctness/useExhaustiveDependencies: <we need to rerun these on these specific prop changes>
  useEffect(() => {
    hasMeasured.current = {};
    setSectionHeights({});
  }, [blockEntries]);

  // Callback ref that measures immediately when element is attached
  const measurementRef = useCallback(
    (sectionKey: string) => (el: HTMLDivElement | null) => {
      if (el && !hasMeasured.current[sectionKey]) {
        measurementRefs.current[sectionKey] = el;
        // Measure immediately in the same render cycle
        const rect = el.getBoundingClientRect();
        if (rect.height > 0) {
          hasMeasured.current[sectionKey] = true;
          setSectionHeights((prev) => ({
            ...prev,
            [sectionKey]: rect.height,
          }));
        }
      }
    },
    [],
  );

  // Update currentHeight when measured heights or currentTab changes
  useEffect(() => {
    const targetHeight = sectionHeights[currentTab];
    if (targetHeight) {
      setCurrentHeight(targetHeight);
    }
  }, [currentTab, sectionHeights]);

  const onTabChange = useCallback((value: string) => {
    setTextProgress(0);
    setCurrentTab(value);
  }, []);

  return (
    <Card className={cn("py-4", className)} ref={demoRef}>
      <Tabs
        className="h-full"
        defaultValue={defaultTab}
        onValueChange={onTabChange}
      >
        <CardHeader className="px-4 pb-0">
          <TabsList>
            {blocks.map(({ tabTitle, lang }) => (
              <TabsTrigger key={tabTitle} value={tabTitle}>
                {tabTitle ?? capitalize(lang)}
              </TabsTrigger>
            ))}
          </TabsList>
        </CardHeader>
        {blocks.map(({ tabTitle, fileName, footer }) => {
          // Use animated currentTabNode for active tab, fullNode for inactive tabs
          const isCurrentTab = tabTitle === currentTab;
          const node = isCurrentTab ? currentTabNode : fullNodes[tabTitle];
          if (!node) return null;

          return (
            <TabsContent
              className="w-full flex-1"
              key={tabTitle}
              value={tabTitle}
            >
              {!!fileName && (
                <div className="flex px-4">
                  <span className="-z-1 relative top-1 rounded-t rounded-br bg-white px-2 pt-1 pb-2 font-medium text-muted-foreground text-xs">
                    {fileName}
                  </span>
                </div>
              )}

              <CardContent className="h-full w-full flex-1 px-4 pt-0">
                <pre
                  className="block w-full overflow-x-scroll rounded bg-linear-to-br from-black/95 to-80% to-black/50 p-4 font-medium font-mono text-primary-foreground text-xs"
                  style={{
                    transition: "height 0.3s ease-out",
                    height: currentHeight,
                  }}
                >
                  {node}
                </pre>
              </CardContent>
              {!!footer && <CardFooter>{footer}</CardFooter>}
            </TabsContent>
          );
        })}
      </Tabs>
      {/* Hidden measurement container - always rendered for instant measurement */}
      <div
        style={{
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none",
          top: 0,
          left: 0,
        }}
      >
        {blocks.map((block) => {
          const fullNode = fullNodes[block.tabTitle];
          if (!fullNode) return null;

          return (
            <div
              key={`measure-${block.tabTitle}`}
              ref={measurementRef(block.tabTitle)}
            >
              <pre className="block overflow-x-scroll rounded bg-black/60 p-4 font-medium font-mono text-white text-xs">
                {fullNode}
              </pre>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
