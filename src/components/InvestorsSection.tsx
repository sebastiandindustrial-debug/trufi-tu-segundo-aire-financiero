import { Building2, Lock, BarChart3, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Lock,
    title: "Patrimonio Autónomo",
    description: "Estructura jurídica que aísla los activos de la cartera, brindando máxima protección a los inversionistas.",
  },
  {
    icon: Building2,
    title: "Custodia Deceval",
    description: "Títulos valores custodiados por Deceval, garantizando trazabilidad y seguridad en cada operación.",
  },
  {
    icon: Cpu,
    title: "Tecnología Mili + Truora",
    description: "Originación automatizada con validación biométrica, scoring crediticio y gestión documental integrada.",
  },
  {
    icon: BarChart3,
    title: "Modelo Originate-to-Distribute",
    description: "Cartera originada con estándares institucionales, lista para distribución a fondos de inversión.",
  },
];

const InvestorsSection = () => {
  return (
    <section id="inversionistas" className="py-20 md:py-28 bg-trufi-purple-dark text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground/80 text-sm font-medium">
              Para Inversionistas Institucionales
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Cartera de libranza con{" "}
              <span className="text-secondary">infraestructura de grado institucional</span>
            </h2>
            
            <p className="text-primary-foreground/70 text-lg leading-relaxed">
              TRUFI combina la solidez del crédito de libranza —con descuento 
              directo de nómina— con tecnología de punta para originación, 
              validación y gestión de cartera. Modelo diseñado para fondos 
              de inversión y entidades financieras.
            </p>

            <Button 
              variant="gold" 
              size="lg"
              className="mt-4"
            >
              Contactar Área Comercial
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-base font-semibold text-primary-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
