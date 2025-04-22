
import { useState } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { Gavel } from "lucide-react";
import { SearchBar } from "@/components/lawyer-finder/search-bar";
import { StateSelect } from "@/components/lawyer-finder/state-select";
import { FilterOptions } from "@/components/lawyer-finder/filter-options";
import { AdvancedFilters } from "@/components/lawyer-finder/advanced-filters";
import { LawyerResults } from "@/components/lawyer-finder/lawyer-results";
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
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />
            
            <StateSelect 
              selectedState={selectedState} 
              onStateChange={setSelectedState} 
            />
            
            <FilterOptions 
              proBono={proBono} 
              onProBonoChange={setProBono} 
            />
            
            <AdvancedFilters 
              selectedSpecialties={selectedSpecialties}
              selectedLanguages={selectedLanguages}
              onSpecialtyToggle={toggleSpecialty}
              onLanguageToggle={toggleLanguage}
              onReset={resetFilters}
            />
          </div>
        </div>
      </section>
      
      {/* Results */}
      <LawyerResults 
        isLoading={isLoading}
        error={error as Error}
        data={data}
        onReset={resetFilters}
      />
      
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
      
      <Footer />
    </div>
  );
}
