import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TemplateCardListProps = {
  children: ReactNode;
  className?: string;
};

export default function TemplateCardList({
  children,
  className,
}: TemplateCardListProps) {
  return (
    <div
      className={cn("grid gap-9", className)}
      style={{
        gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
      }}
    >
      {children}
    </div>
  );
}
