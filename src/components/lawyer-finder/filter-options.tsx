
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface FilterOptionsProps {
  proBono: boolean;
  onProBonoChange: (checked: boolean) => void;
}

export function FilterOptions({ proBono, onProBonoChange }: FilterOptionsProps) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="probono" 
          checked={proBono}
          onCheckedChange={(checked) => onProBonoChange(checked as boolean)}
        />
        <Label htmlFor="probono">Pro Bono Only</Label>
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="verified" 
          checked={false}
          onCheckedChange={(checked) => console.log(checked)}
        />
        <Label htmlFor="verified">Verified Only</Label>
      </div>
    </div>
  );
}
