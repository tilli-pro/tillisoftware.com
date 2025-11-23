"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface Account {
  id: string;
  name: string;
  email: string;
  unpaidBalance: number;
  overdue: number;
  address?: string;
  lastAccessed?: string;
}

interface AddAccountModalProps {
  accounts: Account[];
  onConfirm?: (selectedIds: string[]) => void;
  className?: string;
}

export function AddAccountModal({
  accounts,
  onConfirm,
  className,
}: AddAccountModalProps) {
  const [selectedAccounts, setSelectedAccounts] = useState<Set<string>>(
    new Set(),
  );

  const toggleAccount = (id: string) => {
    const newSelected = new Set(selectedAccounts);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedAccounts(newSelected);
  };

  const handleConfirm = () => {
    onConfirm?.(Array.from(selectedAccounts));
  };

  return (
    <Card
      className={cn(
        "w-full max-w-md border-none bg-white/95 shadow-lg backdrop-blur-sm dark:bg-gray-950/95",
        className,
      )}
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-lg">Add Account</CardTitle>
        <p className="mt-1 text-muted-foreground text-sm">
          You have more accounts linked to your email—select them to pay all
          your invoices at once.
        </p>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="mb-6 space-y-4">
          {accounts.map((account) => (
            <label
              className={cn(
                "group flex cursor-pointer items-start gap-3",
                selectedAccounts.has(account.id) && "opacity-100",
              )}
              key={account.id}
            >
              <input className="hidden" type="hidden" />
              <Checkbox
                checked={selectedAccounts.has(account.id)}
                className="mt-0.5"
                onCheckedChange={() => toggleAccount(account.id)}
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">
                        {account.name}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {account.email}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-4">
                      <div className="flex flex-col">
                        <span className="text-muted-foreground text-xs">
                          Unpaid Balance
                        </span>
                        <span className="font-semibold">
                          ${account.unpaidBalance.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-muted-foreground text-xs">
                          Overdue
                        </span>
                        <span className="font-semibold">
                          ${account.overdue.toLocaleString()}
                        </span>
                      </div>
                    </div>
                    {account.address && (
                      <p className="mt-2 text-muted-foreground text-xs">
                        Address: {account.address}
                      </p>
                    )}
                    {account.lastAccessed && (
                      <p className="text-muted-foreground text-xs">
                        Last accessed: {account.lastAccessed}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </label>
          ))}
        </div>
        <Button
          className="w-full"
          disabled={selectedAccounts.size === 0}
          onClick={handleConfirm}
        >
          Confirm and Add
        </Button>
      </CardContent>
    </Card>
  );
}
