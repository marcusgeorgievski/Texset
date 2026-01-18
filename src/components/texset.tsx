import { cmu, geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type TexsetProps = {
  className?: string;
};

export default function Texset({ className }: TexsetProps) {
  return (
    <span className={cn(cmu.className, "tracking-tight", className)}>
      Texset
    </span>
  );
}
