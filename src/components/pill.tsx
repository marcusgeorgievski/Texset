import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type PillProps = {
  text: string;
  icon?: ReactNode;
  className?: string;
};

export default function Pill({ text, icon, className }: PillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center px-4 py-1.5 rounded-full text-sm border border-neutral-200/80 bg-neutral-100 hover:bg-neutral-200/80 cursor-pointer",
        className,
      )}
    >
      {icon && <span className="mr-1.5 *:w-4 *:h-4">{icon}</span>}
      {text}
    </div>
  );
}
