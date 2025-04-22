
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { US_STATES } from "@/data/lawyer-data";

interface StateSelectProps {
  selectedState: string;
  onStateChange: (value: string) => void;
}

export function StateSelect({ selectedState, onStateChange }: StateSelectProps) {
  return (
    <div className="w-full md:w-48">
      <Label htmlFor="state" className="mb-2 block">State</Label>
      <Select value={selectedState} onValueChange={onStateChange}>
        <SelectTrigger id="state" className="w-full">
          <SelectValue placeholder="All States" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All States</SelectItem>
          {US_STATES.map((state) => (
            <SelectItem key={state.code} value={state.code}>
              {state.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
