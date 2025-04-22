
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="flex-1">
      <Label htmlFor="search" className="mb-2 block">Search Lawyers</Label>
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          id="search"
          placeholder="Name, firm, or city..."
          className="pl-9"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}
