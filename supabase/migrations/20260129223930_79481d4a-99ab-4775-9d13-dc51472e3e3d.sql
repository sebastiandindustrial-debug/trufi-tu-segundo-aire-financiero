-- Create table for audience segments
CREATE TABLE public.segmentos_audiencia (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    titulo TEXT NOT NULL,
    descripcion TEXT NOT NULL,
    imagen_url TEXT,
    enlace TEXT NOT NULL,
    orden INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.segmentos_audiencia ENABLE ROW LEVEL SECURITY;

-- Anyone can read segments (public content)
CREATE POLICY "Anyone can view segments"
ON public.segmentos_audiencia
FOR SELECT
USING (true);

-- Only admins can modify
CREATE POLICY "Admins can insert segments"
ON public.segmentos_audiencia
FOR INSERT
WITH CHECK (is_admin());

CREATE POLICY "Admins can update segments"
ON public.segmentos_audiencia
FOR UPDATE
USING (is_admin());

CREATE POLICY "Admins can delete segments"
ON public.segmentos_audiencia
FOR DELETE
USING (is_admin());

-- Trigger for updated_at
CREATE TRIGGER update_segmentos_audiencia_updated_at
BEFORE UPDATE ON public.segmentos_audiencia
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default data
INSERT INTO public.segmentos_audiencia (titulo, descripcion, imagen_url, enlace, orden) VALUES
('Soy Pensionado', 'Créditos diseñados para tu tranquilidad y bienestar.', '/lovable-uploads/foto-pensionado.jpg', '/pensionado', 1),
('Soy Docente', 'Beneficios exclusivos para educadores del sector público.', '/lovable-uploads/foto-docente.jpg', '/docente', 2),
('Soy Fuerza Pública', 'Condiciones especiales para nuestros héroes.', '/lovable-uploads/foto-fuerza-publica.jpg', '/fuerza-publica', 3);