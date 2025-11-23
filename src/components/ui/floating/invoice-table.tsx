"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface Invoice {
  id: string;
  number: string;
  vendor: string;
  totalAmount: number;
  amountBalance: number;
  invoiceDate: string;
  dueDate: string;
  invoiceAmount: number;
}

interface InvoiceTableProps {
  invoices: Invoice[];
  onSelectAll?: (selected: boolean) => void;
  onSelectInvoice?: (id: string, selected: boolean) => void;
  className?: string;
}

export function InvoiceTable({
  invoices,
  onSelectAll,
  onSelectInvoice,
  className
}: InvoiceTableProps) {
  const [selectedInvoices, setSelectedInvoices] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<"open" | "unpaid" | "all" | "past">("open");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleInvoice = (id: string) => {
    const newSelected = new Set(selectedInvoices);
    if (newSelected.has(id)) {
      newSelected.delete(id);
      onSelectInvoice?.(id, false);
    } else {
      newSelected.add(id);
      onSelectInvoice?.(id, true);
    }
    setSelectedInvoices(newSelected);
  };

  const toggleAll = () => {
    if (selectedInvoices.size === invoices.length) {
      setSelectedInvoices(new Set());
      onSelectAll?.(false);
    } else {
      setSelectedInvoices(new Set(invoices.map(inv => inv.id)));
      onSelectAll?.(true);
    }
  };

  const allSelected = selectedInvoices.size === invoices.length && invoices.length > 0;
  const someSelected = selectedInvoices.size > 0 && selectedInvoices.size < invoices.length;

  return (
    <Card className={cn("w-full border-none bg-white/95 shadow-lg backdrop-blur-sm dark:bg-gray-950/95", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Invoices</CardTitle>
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Last 30 Days | Feb 2025</span>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex gap-1 text-sm">
            {[
              { key: "open", label: "Open Invoices", count: 16 },
              { key: "unpaid", label: "Unpaid Invoices", count: 3 },
              { key: "all", label: "All Invoices", count: 19 },
              { key: "past", label: "Past Invoices", count: 0 }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as typeof activeTab)}
                className={cn(
                  "rounded-md px-3 py-1.5 transition-colors",
                  activeTab === tab.key
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {tab.label} {tab.count}
              </button>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-6 pb-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="-translate-y-1/2 absolute top-1/2 left-3 size-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button variant="link" className="text-primary text-sm">
            Select All
          </Button>
          <Button variant="link" className="text-muted-foreground text-sm">
            Column Options
          </Button>
        </div>

        <div className="overflow-hidden rounded-lg border">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="w-12 p-3">
                    <Checkbox
                      checked={allSelected}
                      onCheckedChange={toggleAll}
                      className={cn(someSelected && "data-[state=checked]:bg-primary/50")}
                    />
                  </th>
                  <th className="p-3 text-left font-medium text-muted-foreground">Invoice Number</th>
                  <th className="p-3 text-left font-medium text-muted-foreground">Total Amount</th>
                  <th className="p-3 text-left font-medium text-muted-foreground">Amount Balance</th>
                  <th className="p-3 text-left font-medium text-muted-foreground">Invoice Date</th>
                  <th className="p-3 text-left font-medium text-muted-foreground">Due Date</th>
                  <th className="p-3 text-right font-medium text-muted-foreground">Invoice Amount</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr
                    key={invoice.id}
                    className={cn(
                      "border-b transition-colors last:border-b-0 hover:bg-muted/30",
                      index === 0 && "bg-muted/20"
                    )}
                  >
                    <td className="p-3">
                      <Checkbox
                        checked={selectedInvoices.has(invoice.id)}
                        onCheckedChange={() => toggleInvoice(invoice.id)}
                      />
                    </td>
                    <td className="p-3 font-medium">{invoice.number}</td>
                    <td className="p-3">${invoice.totalAmount.toLocaleString()}</td>
                    <td className="p-3">${invoice.amountBalance.toLocaleString()}</td>
                    <td className="p-3">{invoice.invoiceDate}</td>
                    <td className="p-3">{invoice.dueDate}</td>
                    <td className="p-3 text-right">${invoice.invoiceAmount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {invoices.length === 0 && (
          <div className="py-8 text-center text-muted-foreground">
            No invoices found
          </div>
        )}
      </CardContent>
    </Card>
  );
}
