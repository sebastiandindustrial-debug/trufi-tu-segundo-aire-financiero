import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Segmento {
  id: string;
  titulo: string;
  descripcion: string;
  imagen_url: string | null;
  enlace: string;
  orden: number;
  created_at: string;
  updated_at: string;
}

export const useSegmentos = () => {
  return useQuery({
    queryKey: ['segmentos'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('segmentos_audiencia')
        .select('*')
        .order('orden', { ascending: true });

      if (error) throw error;
      return data as Segmento[];
    },
  });
};

export const useUpdateSegmento = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<Segmento> & { id: string }) => {
      const { data, error } = await supabase
        .from('segmentos_audiencia')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['segmentos'] });
    },
  });
};
