"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricItem {
  label: string;
  value: string;
  currency?: string;
}

interface FinancialMetricsCardProps {
  metrics: MetricItem[];
  className?: string;
}

export function FinancialMetricsCard({
  metrics,
  className,
}: FinancialMetricsCardProps) {
  return (
    <Card
      className={cn(
        "border-none bg-white/90 shadow-lg backdrop-blur-sm dark:bg-gray-950/90",
        className,
      )}
    >
      <CardContent className="p-6 py-2">
        <div className="grid grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              className={cn(
                "flex flex-col gap-2",
                index < metrics.length - 1 && "border-border border-r pr-6",
              )}
              key={index.toString() + metric.label}
            >
              <span className="font-medium text-muted-foreground text-xs">
                {metric.label}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="font-semibold text-2xl">{metric.value}</span>
                {metric.currency && (
                  <span className="font-medium text-muted-foreground text-xs">
                    {metric.currency}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
