
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SPECIALTIES, LANGUAGES } from "@/data/lawyer-data";

interface AdvancedFiltersProps {
  selectedSpecialties: string[];
  selectedLanguages: string[];
  onSpecialtyToggle: (specialty: string) => void;
  onLanguageToggle: (language: string) => void;
  onReset: () => void;
}

export function AdvancedFilters({
  selectedSpecialties,
  selectedLanguages,
  onSpecialtyToggle,
  onLanguageToggle,
  onReset,
}: AdvancedFiltersProps) {
  return (
    <div className="flex space-x-2">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>Advanced Filters</SheetTitle>
            <SheetDescription>
              Filter lawyers by specialization and languages spoken.
            </SheetDescription>
          </SheetHeader>
          
          <div className="py-4">
            <h3 className="font-medium mb-2">Specialties</h3>
            <div className="space-y-2">
              {SPECIALTIES.map((specialty) => (
                <div key={specialty} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`specialty-${specialty}`} 
                    checked={selectedSpecialties.includes(specialty)}
                    onCheckedChange={() => onSpecialtyToggle(specialty)}
                  />
                  <Label htmlFor={`specialty-${specialty}`}>{specialty}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div className="py-4">
            <h3 className="font-medium mb-2">Languages</h3>
            <div className="space-y-2">
              {LANGUAGES.map((language) => (
                <div key={language} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`language-${language}`} 
                    checked={selectedLanguages.includes(language)}
                    onCheckedChange={() => onLanguageToggle(language)}
                  />
                  <Label htmlFor={`language-${language}`}>{language}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <Button variant="outline" onClick={onReset} className="w-full">
              Reset All Filters
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      
      <Button variant="outline" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}
