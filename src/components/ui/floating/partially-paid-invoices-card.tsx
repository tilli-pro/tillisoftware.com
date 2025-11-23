"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface PartialInvoice {
  id: string;
  number: string;
  amountPaid: number;
  totalAmount: number;
  dueDate: string;
  checked?: boolean;
}

interface PartiallyPaidInvoicesCardProps {
  invoices: PartialInvoice[];
  onToggleInvoice?: (id: string, checked: boolean) => void;
  className?: string;
}

export function PartiallyPaidInvoicesCard({
  invoices,
  onToggleInvoice,
  className
}: PartiallyPaidInvoicesCardProps) {
  return (
    <Card className={cn("w-full max-w-md border-none bg-white/95 shadow-lg backdrop-blur-sm dark:bg-gray-950/95", className)}>
      <CardHeader className="pb-4">
        <CardTitle className="font-medium text-muted-foreground text-sm">
          Partially Paid Invoices
        </CardTitle>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="space-y-4">
          {invoices.map((invoice) => {
            const percentage = Math.round((invoice.amountPaid / invoice.totalAmount) * 100);
            const progressColor = percentage >= 70 ? "bg-green-500" : percentage >= 30 ? "bg-yellow-500" : "bg-red-500";

            return (
              <div key={invoice.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={invoice.checked}
                      onCheckedChange={(checked) =>
                        onToggleInvoice?.(invoice.id, checked as boolean)
                      }
                    />
                    <div>
                      <h3 className="font-semibold text-base">
                        Invoice {invoice.number}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        Due: {invoice.dueDate}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-sm">
                      ${invoice.amountPaid.toLocaleString()} out of ${invoice.totalAmount.toLocaleString()} paid
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {percentage}%
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Progress
                    value={percentage}
                    className="h-2"
                  />
                  <div
                    className={cn(
                      "absolute top-0 left-0 h-2 rounded-full transition-all",
                      progressColor
                    )}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
