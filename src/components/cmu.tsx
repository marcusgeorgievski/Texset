import { cmu } from "@/lib/fonts";
import { cn } from "@/lib/utils";

type TexsetProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Cmu({ children, className }: TexsetProps) {
  return <span className={cn(cmu.className, className)}>{children}</span>;
}
