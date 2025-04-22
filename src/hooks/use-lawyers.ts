
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type LawyerFilters = {
  state?: string;
  languages?: string[];
  proBono?: boolean;
  page?: number;
  perPage?: number;
};

export const useLawyers = (filters: LawyerFilters) => {
  const {
    state,
    languages = [],
    proBono = false,
    page = 1,
    perPage = 24
  } = filters;

  return useQuery({
    queryKey: ['lawyers', { state, languages, proBono, page }],
    queryFn: async () => {
      let query = supabase
        .from('lawyers')
        .select('*', { count: 'exact' });

      if (state) {
        query = query.eq('state', state);
      }

      if (languages.length > 0) {
        query = query.contains('languages', languages);
      }

      if (proBono) {
        query = query.eq('pro_bono', true);
      }

      const from = (page - 1) * perPage;
      query = query.range(from, from + perPage - 1);

      const { data, error, count } = await query;

      if (error) {
        throw error;
      }

      return {
        lawyers: data || [],
        totalCount: count || 0,
      };
    },
  });
};
