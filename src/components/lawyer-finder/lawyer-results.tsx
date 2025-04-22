
import { Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import LawyerCard, { Lawyer } from "./lawyer-card";

interface LawyerResultsProps {
  isLoading: boolean;
  error: Error | null;
  data: { lawyers: Lawyer[]; totalCount: number } | undefined;
  onReset: () => void;
}

export function LawyerResults({ isLoading, error, data, onReset }: LawyerResultsProps) {
  return (
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
          <Button variant="outline" onClick={onReset} className="mt-4">
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
  );
}
