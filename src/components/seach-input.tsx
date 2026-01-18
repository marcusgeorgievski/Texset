import { cn } from "@/lib/utils";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Search } from "lucide-react";

type SearchInputProps = {
  className?: string;
  placeholder?: string;
};

export default function SearchInput({
  className,
  placeholder = "Search LaTeX templates...",
}: SearchInputProps) {
  return (
    <InputGroup className={cn("py-5 px-1 gap-1.5 rounded-full", className)}>
      <InputGroupInput placeholder={placeholder} />
      <InputGroupAddon>
        <Search className="text-foreground" />
      </InputGroupAddon>
    </InputGroup>
  );
}
