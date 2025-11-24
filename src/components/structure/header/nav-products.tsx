"use client";
import type { LucideIcon } from "lucide-react";
import { Archive, Coins, MonitorCloud, Send } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductContentProps {
  product: string;
  Icon: LucideIcon;
  className?: string;
}
const ProductContent: React.FC<ProductContentProps> = ({
  product,
  Icon,
  className,
}) => {
  return (
    <Link
      className="h-full min-w-[120px] flex-1 transition-all duration-500 hover:flex-1! group-has-[a:hover]/products:flex-0"
      href={`/products/${product.toLowerCase()}`}
    >
      <div
        className={cn(
          className,
          "relative box-border flex h-full w-full items-center justify-center rounded p-2 ring-1 ring-border/50 transition-all hover:bg-accent/40 hover:ring-2 hover:ring-accent/70",
        )}
      >
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-20">
          <Icon size={80} />
        </div>
        <div className="font-header">{product}</div>
      </div>
    </Link>
  );
};

const products: ProductContentProps[] = [
  { product: "nudge", Icon: Send },
  { product: "tilliPay", Icon: Coins },
  { product: "tilliX", Icon: MonitorCloud },
  { product: "tilliArc", Icon: Archive },
];

export const NavProducts: React.FC = () => {
  return (
    <div className="group/products flex h-50 w-full items-stretch gap-2">
      {products.map((product) => (
        <ProductContent key={product.product} {...product} />
      ))}
    </div>
  );
};
