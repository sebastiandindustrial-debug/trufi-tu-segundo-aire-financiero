import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2, HandHeart, GraduationCap, Shield, LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useSegmentos } from "@/hooks/useSegmentos";

// Configuración de estilo por segmento
interface SegmentConfig {
  icon: LucideIcon;
  colorClass: string;
  gradientClass: string;
  shadowClass: string;
}

const segmentConfig: Record<string, SegmentConfig> = {
  pensionado: {
    icon: HandHeart,
    colorClass: "text-segment-pensionado",
    gradientClass: "from-segment-pensionado/80",
    shadowClass: "group-hover:shadow-[0_10px_40px_-10px_hsl(var(--segment-pensionado)/0.3)]",
  },
  docente: {
    icon: GraduationCap,
    colorClass: "text-segment-docente",
    gradientClass: "from-segment-docente/80",
    shadowClass: "group-hover:shadow-[0_10px_40px_-10px_hsl(var(--segment-docente)/0.3)]",
  },
  "fuerza-publica": {
    icon: Shield,
    colorClass: "text-segment-fuerza",
    gradientClass: "from-segment-fuerza/80",
    shadowClass: "group-hover:shadow-[0_10px_40px_-10px_hsl(var(--segment-fuerza)/0.3)]",
  },
  // Fallback
  default: {
    icon: HandHeart,
    colorClass: "text-primary",
    gradientClass: "from-primary/80",
    shadowClass: "group-hover:shadow-xl",
  }
};

// Imágenes de respaldo para cada perfil si no hay imagen en BD
const fallbackImages: Record<string, string> = {
  pensionado: "/pensionado.png",
  docente: "/docente.png",
  "fuerza-publica": "/fuerza_publica.png",
};

const AudienceSegmentation = () => {
  const { data: segmentos, isLoading } = useSegmentos();

  if (isLoading) {
    return (
      <section className="py-16 bg-muted/30" id="audiencias">
        <div className="container flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (!segmentos || segmentos.length === 0) {
    return null;
  }

  const getSegmentConfig = (enlace: string) => {
    const key = enlace.replace("/", "");
    return segmentConfig[key] || segmentConfig.default;
  };

  // Función mejorada para obtener imagen basada en el título
  const getFallbackImage = (titulo: string) => {
    const t = titulo.toLowerCase();
    if (t.includes("pensionado")) return "/lovable-uploads/pensionados_pie.jpg";
    if (t.includes("docente")) return "/lovable-uploads/docente.png";
    if (t.includes("fuerza")) return "/lovable-uploads/fuerza_publica.png";
    return "/lovable-uploads/pensionados_pie.jpg"; // Fallback por defecto
  };

  return (
    <section className="pt-20 pb-10 md:pt-32 md:pb-16 bg-background relative overflow-hidden" id="audiencias">
      {/* Decorative background blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-sm tracking-wide uppercase">
            Elige tu perfil
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
            ¿A qué grupo perteneces?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Hemos diseñado beneficios exclusivos pensando en las necesidades específicas de tu sector.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {segmentos.map((item) => {
            const config = getSegmentConfig(item.enlace);
            const Icon = config.icon;

            // Overrides according to client specs
            let title = item.titulo;
            let description = item.descripcion;
            let buttonText = "Ver beneficios exclusivos";

            if (item.enlace.includes('pensionado')) {
              title = "Soy Pensionado";
              description = "Para quienes disfrutan su retiro, pero buscan estabilidad extra, con descuento directo de tu mesada pensional para mayor tranquilidad.";
              buttonText = "Descubre Tus Opciones";
            } else if (item.enlace.includes('docente')) {
              description = "Diseñado para educadores del sector público que necesitan flexibilidad financiera, alineada con tu compromiso diario.";
              buttonText = "Descubre Tus Opciones";
            } else if (item.enlace.includes('fuerza')) {
              description = "Opciones accesibles para héroes, reconociendo tu servicio con procesos simples y confiables.";
              buttonText = "Descubre Tus Opciones";
            }

            return (
              <Link key={item.id} to={item.enlace} className="block group h-full">
                <Card className={`h-full border border-border/50 shadow-card hover:-translate-y-2 transition-all duration-500 bg-card overflow-hidden rounded-[2rem] flex flex-col ${config.shadowClass} transform-gpu isolation-isolate`}>
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={getFallbackImage(item.titulo)}
                      alt={title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Dynamic Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${config.gradientClass} via-transparent to-transparent opacity-90`} />

                    {/* Icon & Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                      <div className={`mb-3 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white`}>
                        <Icon className="w-6 h-6 stroke-[2.5]" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white leading-none">
                        {title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-8 leading-relaxed text-base flex-grow">
                      {description}
                    </p>

                    <Button
                      variant="ghost"
                      className={`w-full justify-between font-bold text-base py-6 rounded-xl transition-colors ${config.colorClass} bg-secondary/10 group-hover:bg-secondary/20`}
                    >
                      {buttonText}
                      <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudienceSegmentation;
