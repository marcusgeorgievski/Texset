"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Book,
  Braces,
  ChartScatter,
  ChevronDown,
  CircuitBoard,
  ClockArrowDown,
  FileUser,
  Filter,
  Flame,
  Heart,
  Newspaper,
  Notebook,
  Search,
  Sigma,
} from "lucide-react";
import { useEffect, useState } from "react";

const categories = [
  { label: "Notes", icon: Notebook },
  { label: "Books", icon: Book },
  { label: "Reports/Articles", icon: Newspaper },
  { label: "Resumes", icon: FileUser },
  { label: "Cover Letters", icon: FileUser },
];

const disciplines = [
  { label: "Mathematics", icon: Sigma },
  { label: "Statistics", icon: ChartScatter },
  { label: "Engineering", icon: CircuitBoard },
  { label: "Computer Science", icon: Braces },
];

const sortOptions = [
  { label: "Relevant", icon: Search },
  { label: "Popular", icon: Flame },
  { label: "Recent", icon: ClockArrowDown },
  { label: "Most Liked", icon: Heart },
];

type FilterDropdownProps = {
  label: string;
  items: typeof categories;
  selectedItems: string[] | string | null;
  onToggle: (label: string) => void;
  multiSelect?: boolean;
};

function FilterDropdown({
  label,
  items,
  selectedItems,
  onToggle,
  multiSelect = true,
}: FilterDropdownProps) {
  const getButtonText = () => {
    if (multiSelect) {
      const selected = selectedItems as string[];
      if (selected.length === 0) return "All";
      if (selected.length === 1) return selected[0];
      return `${selected.length} selected`;
    } else {
      return (selectedItems as string | null) || "All";
    }
  };

  const isSelected = (itemLabel: string) => {
    if (multiSelect) {
      return (selectedItems as string[]).includes(itemLabel);
    }
    return selectedItems === itemLabel;
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-muted-foreground h-4">{label}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="shadow-none rounded-sm">
            <span
              className={
                (
                  multiSelect
                    ? (selectedItems as string[]).length === 0
                    : !selectedItems
                )
                  ? "text-muted-foreground"
                  : ""
              }
            >
              {getButtonText()}
            </span>
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="duration-40" align="start">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <DropdownMenuCheckboxItem
                checked={isSelected(item.label)}
                onCheckedChange={() => onToggle(item.label)}
                onSelect={(e) => multiSelect && e.preventDefault()}
                key={item.label}
              >
                <Icon className="w-4 h-4 mr-1" />
                {item.label}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default function FilterGroup() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([]);
  const [selectedSortBy, setSelectedSortBy] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [appliedCategories, setAppliedCategories] = useState<string[]>([]);
  const [appliedDisciplines, setAppliedDisciplines] = useState<string[]>([]);
  const [appliedSortBy, setAppliedSortBy] = useState<string | null>(null);

  const toggleCategory = (label: string) => {
    setSelectedCategories((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const toggleDiscipline = (label: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const getActiveFilterCount = () => {
    return (
      selectedCategories.length +
      selectedDisciplines.length +
      (selectedSortBy ? 1 : 0)
    );
  };

  const hasFilterChanges = () => {
    const categoriesChanged =
      JSON.stringify([...selectedCategories].sort()) !==
      JSON.stringify([...appliedCategories].sort());
    const disciplinesChanged =
      JSON.stringify([...selectedDisciplines].sort()) !==
      JSON.stringify([...appliedDisciplines].sort());
    const sortByChanged = selectedSortBy !== appliedSortBy;

    return categoriesChanged || disciplinesChanged || sortByChanged;
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        setMobileOpen(false);
      }
    };

    handleChange(mediaQuery);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleApplyFilters = () => {
    setAppliedCategories([...selectedCategories]);
    setAppliedDisciplines([...selectedDisciplines]);
    setAppliedSortBy(selectedSortBy);

    console.log("Applying filters:", {
      categories: selectedCategories,
      disciplines: selectedDisciplines,
      sortBy: selectedSortBy,
    });
  };

  return (
    <div className="flex items-end justify-between gap-5">
      <div className="flex items-end gap-5">
        {/* Desktop view */}
        <div className="hidden md:flex gap-5">
          <FilterDropdown
            label="Category"
            items={categories}
            selectedItems={selectedCategories}
            onToggle={toggleCategory}
          />
          <FilterDropdown
            label="Discipline"
            items={disciplines}
            selectedItems={selectedDisciplines}
            onToggle={toggleDiscipline}
          />
          <FilterDropdown
            label="Sort By"
            items={sortOptions}
            selectedItems={selectedSortBy}
            onToggle={(label) =>
              setSelectedSortBy(selectedSortBy === label ? null : label)
            }
            multiSelect={false}
          />
        </div>

        {/* Mobile view */}
        <div className="md:hidden">
          <DropdownMenu open={mobileOpen} onOpenChange={setMobileOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="shadow-none rounded-sm">
                <Filter className="w-4 h-4" />
                Filters
                {getActiveFilterCount() > 0 && (
                  <span className="ml-1 text-muted-foreground">
                    ({getActiveFilterCount()})
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 p-4" align="start">
              <div className="space-y-4">
                <FilterDropdown
                  label="Category"
                  items={categories}
                  selectedItems={selectedCategories}
                  onToggle={toggleCategory}
                />
                <FilterDropdown
                  label="Discipline"
                  items={disciplines}
                  selectedItems={selectedDisciplines}
                  onToggle={toggleDiscipline}
                />
                <FilterDropdown
                  label="Sort By"
                  items={sortOptions}
                  selectedItems={selectedSortBy}
                  onToggle={(label) =>
                    setSelectedSortBy(selectedSortBy === label ? null : label)
                  }
                  multiSelect={false}
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Apply button */}
        {hasFilterChanges() && (
          <Button
            onClick={handleApplyFilters}
            className="shadow-none rounded-sm cursor-pointer"
          >
            <Search />
            Apply Filters
          </Button>
        )}
      </div>
    </div>
  );
}
