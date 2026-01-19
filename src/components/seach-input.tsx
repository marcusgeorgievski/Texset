import { cn } from "@/lib/utils";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { Filter, Search } from "lucide-react";
import { Button } from "./ui/button";

type SearchInputProps = {
  className?: string;
  placeholder?: string;
};

// TODO: Filter

export default function SearchInput({
  className,
  placeholder = "Search LaTeX templates...",
}: SearchInputProps) {
  return (
    <InputGroup
      className={cn(
        "py-5 px-1 gap-1.5 rounded-full backdrop-blur-2xl bg-white shado",
        className,
      )}
    >
      <InputGroupInput placeholder={placeholder} />
      <InputGroupAddon>
        <Search className="text-foreground" />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        {/* TODO: Make this work */}
        <Button variant="outline" className="rounded-full h-7 w-7">
          <Filter />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
