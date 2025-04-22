
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useSubmitStopReport, StopReport } from "@/hooks/use-stop-reports";

const REPORT_TYPES = [
  { value: 'checkpoint', label: 'Checkpoint' },
  { value: 'raid', label: 'ICE Raid' },
  { value: 'police_stop', label: 'Police Stop' },
] as const;

export function StopReportForm() {
  const [formData, setFormData] = useState<Partial<StopReport>>({});
  const { mutate: submitReport, isPending } = useSubmitStopReport();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.report_type || !formData.state || !formData.county || 
        !formData.lat || !formData.lon) {
      return;
    }
    submitReport(formData as StopReport);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="report_type">Type of Incident</Label>
        <Select
          value={formData.report_type}
          onValueChange={(value: StopReport['report_type']) => 
            setFormData(prev => ({ ...prev, report_type: value }))}
        >
          <SelectTrigger id="report_type">
            <SelectValue placeholder="Select incident type" />
          </SelectTrigger>
          <SelectContent>
            {REPORT_TYPES.map(type => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            value={formData.state || ''}
            onChange={e => setFormData(prev => ({ ...prev, state: e.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="county">County</Label>
          <Input
            id="county"
            value={formData.county || ''}
            onChange={e => setFormData(prev => ({ ...prev, county: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="latitude">Latitude</Label>
          <Input
            id="latitude"
            type="number"
            step="any"
            value={formData.lat || ''}
            onChange={e => setFormData(prev => ({ ...prev, lat: parseFloat(e.target.value) }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="longitude">Longitude</Label>
          <Input
            id="longitude"
            type="number"
            step="any"
            value={formData.lon || ''}
            onChange={e => setFormData(prev => ({ ...prev, lon: parseFloat(e.target.value) }))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description (optional)</Label>
        <Textarea
          id="description"
          value={formData.description || ''}
          onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
        />
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit Report"}
      </Button>
    </form>
  );
};
