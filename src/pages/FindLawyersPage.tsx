import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Gavel, Search, Map, Filter } from "lucide-react";
import LawyerCard from "@/components/lawyer-finder/lawyer-card";
import { US_STATES, SPECIALTIES, LANGUAGES } from "@/data/lawyer-data";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useLawyers } from "@/hooks/use-lawyers";

export default function FindLawyersPage() {
  const [selectedState, setSelectedState] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [proBono, setProBono] = useState<boolean>(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data, isLoading, error } = useLawyers({
    state: selectedState,
    languages: selectedLanguages,
    proBono,
    page: currentPage
  });

  // Toggle specialty selection
  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };
  
  // Toggle language selection
  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language)
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };
  
  // Reset all filters
  const resetFilters = () => {
    setSelectedState("");
    setSearchTerm("");
    setProBono(false);
    setSelectedSpecialties([]);
    setSelectedLanguages([]);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Header */}
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-10 md:py-14">
          <div className="freedom-container">
            <div className="flex items-center space-x-3 mb-4">
              <Gavel className="h-8 w-8 text-accent" />
              <h1 className="text-3xl md:text-4xl font-bold">Find Immigration Lawyers</h1>
            </div>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              Connect with vetted immigration attorneys across the United States. Many offer pro bono (free) services or consultations for qualifying individuals.
            </p>
          </div>
        </section>
        
        {/* Search and Filters */}
        <section className="border-b">
          <div className="freedom-container py-6">
            <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex-1">
                <Label htmlFor="search" className="mb-2 block">Search Lawyers</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Name, firm, or city..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="w-full md:w-48">
                <Label htmlFor="state" className="mb-2 block">State</Label>
                <Select value={selectedState} onValueChange={setSelectedState}>
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
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="probono" 
                    checked={proBono}
                    onCheckedChange={(checked) => setProBono(checked as boolean)}
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
                              onCheckedChange={() => toggleSpecialty(specialty)}
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
                              onCheckedChange={() => toggleLanguage(language)}
                            />
                            <Label htmlFor={`language-${language}`}>{language}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button variant="outline" onClick={resetFilters} className="w-full">
                        Reset All Filters
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
                
                <Button variant="outline" onClick={resetFilters}>
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results */}
        <section className="freedom-container py-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">
              {isLoading ? (
                "Loading lawyers..."
              ) : error ? (
                "Error loading lawyers"
              ) : (
                `${data?.totalCount || 0} ${data?.totalCount === 1 ? 'Lawyer' : 'Lawyers'} Found`
              )}
            </h2>
            <Button variant="outline" className="gap-2">
              <Map className="h-4 w-4" />
              View Map
            </Button>
          </div>
          
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading lawyers...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12 text-destructive">
              <p>Error loading lawyers. Please try again.</p>
            </div>
          ) : data?.lawyers.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No lawyers match your current filters.</p>
              <Button variant="outline" onClick={resetFilters} className="mt-4">
                Reset Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.lawyers.map((lawyer) => (
                <LawyerCard key={lawyer.id} lawyer={lawyer} />
              ))}
            </div>
          )}
        </section>
        
        {/* Disclaimer */}
        <section className="bg-muted/50 py-8">
          <div className="freedom-container">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-medium text-lg mb-3">Legal Disclaimer</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Inclusion in this directory does not imply endorsement nor guarantee representation. 
                The information provided is for reference only. Always verify credentials, fees, and availability directly with the attorney.
                This directory includes attorneys who have agreed to be listed for the benefit of the community.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Know a lawyer who should be listed?</strong> Contact us to recommend an attorney for inclusion in our directory.
                We particularly seek attorneys offering pro bono services.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
