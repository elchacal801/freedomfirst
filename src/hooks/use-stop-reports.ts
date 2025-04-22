
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/sonner";

export type StopReport = {
  report_type: 'checkpoint' | 'raid' | 'police_stop';
  state: string;
  county: string;
  lat: number;
  lon: number;
  description?: string;
  proof_url?: string;
};

export const useSubmitStopReport = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (report: StopReport) => {
      const { error } = await supabase
        .from('stop_reports')
        .insert([report]);

      if (error) throw error;
    },
    onSuccess: () => {
      toast.success(
        "Report submitted successfully",
        {
          description: "It will appear on the map once reviewed by our moderators."
        }
      );
      queryClient.invalidateQueries({ queryKey: ['stopReports'] });
    },
    onError: (error) => {
      toast.error(
        "Failed to submit report",
        {
          description: error.message
        }
      );
    },
  });
};
