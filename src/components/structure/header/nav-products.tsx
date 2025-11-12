"use client";
import type { LucideIcon } from "lucide-react";
import { Send } from "lucide-react";
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
    <Link href={`/products/${product.toLowerCase()}`}>
      <div
        className={cn(
          className,
          "box-border flex h-full w-full items-center justify-start self-stretch rounded p-2 ring-1 ring-border/50 transition hover:bg-accent/40 hover:ring-2 hover:ring-accent/70",
        )}
      >
        <div className="flex size-12 items-center justify-center">
          <Icon />
        </div>
        <div className="font-header">{product}</div>
      </div>
    </Link>
  );
};

const products: ProductContentProps[] = [
  { product: "nudge", Icon: Send },
  { product: "tilliPay", Icon: Send },
  { product: "tilliX", Icon: Send },
  { product: "tilliArc", Icon: Send },
];

export const NavProducts: React.FC = () => {
  return (
    <div className="flex w-full items-stretch justify-center gap-2">
      <div className="grid h-full min-w-1/3 grid-cols-1 items-stretch justify-stretch gap-1 md:grid-cols-2">
        {products.map((product) => (
          <ProductContent key={product.product} {...product} />
        ))}
      </div>
      <div className="h-[200px] flex-1">asdf</div>
    </div>
  );
};
