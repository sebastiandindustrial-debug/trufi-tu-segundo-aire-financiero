import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

interface Setting {
  id: string;
  key: string;
  value: string | null;
  created_at: string;
  updated_at: string;
}

// Fetch payment link setting
export const usePaymentLink = () => {
  return useQuery({
    queryKey: ['settings', 'payment_link'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('settings')
        .select('*')
        .eq('key', 'payment_link')
        .maybeSingle();

      if (error) throw error;
      return data?.value || 'https://www.pse.com.co';
    },
  });
};

// Fetch all settings (admin)
export const useAllSettings = () => {
  return useQuery({
    queryKey: ['settings', 'all'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('settings')
        .select('*')
        .order('key');

      if (error) throw error;
      return data as Setting[];
    },
  });
};

// Update setting mutation
export const useUpdateSetting = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ key, value }: { key: string; value: string }) => {
      const { data, error } = await supabase
        .from('settings')
        .update({ value })
        .eq('key', key)
        .select()
        .single();

      if (error) throw error;
      return data as Setting;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['settings'] });
    },
  });
};
