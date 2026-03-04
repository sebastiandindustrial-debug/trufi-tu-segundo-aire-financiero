import { Heart, Shield, Home, Wrench, Zap, Droplets, Snowflake, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const amparos = [
  {
    icon: Heart,
    title: "Seguro de Vida",
    description: "Tranquilidad total para tu familia. Cubrimos el saldo de la deuda en caso de fallecimiento.",
    highlight: "Cobertura 100%"
  },
  {
    icon: Shield,
    title: "Incapacidad Total",
    description: "Si no puedes trabajar, nosotros te respaldamos. Cobertura ante eventos que afecten tu capacidad laboral.",
    highlight: "Respaldo Total"
  },
  {
    icon: Heart,
    title: "Auxilio Exequial",
    description: "Apoyo financiero inmediato para gastos funerarios del titular. Estamos contigo en los momentos difíciles.",
    highlight: "Apoyo Inmediato"
  },
];

const asistenciasHogar = [
  { icon: Wrench, title: "Cerrajería", desc: "Apertura y cambios" },
  { icon: Zap, title: "Electricidad", desc: "Reparaciones urgentes" },
  { icon: Droplets, title: "Plomería", desc: "Fugas y desatascos" },
  { icon: Snowflake, title: "Línea Blanca", desc: "Electrodomésticos" },
];

const BeneficiosTrufi = () => {
  return (
    <section className="pt-10 pb-20 md:pt-16 md:pb-32 bg-secondary/5 relative overflow-hidden" id="beneficios-trufi">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none translate-x-1/2 -translate-y-1/2" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/20 text-primary bg-primary/5 text-sm font-semibold uppercase tracking-wider">
            Beneficios Exclusivos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Más que un crédito, <br />
            <span className="text-primary">una protección completa</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Al adquirir un crédito con TRUFI, accedes automáticamente a un paquete de protección premium
            <span className="font-semibold text-foreground"> sin costo adicional</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Columna Izquierda: Amparos (Seguros) */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {amparos.map((item, index) => (
              <Card key={index} className="group border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-white rounded-[2rem] p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-50">
                  <item.icon className="w-24 h-24 text-secondary/5 -rotate-12" />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>

                  <Badge className="mb-4 bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 border-0 font-medium">
                    {item.highlight}
                  </Badge>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}

            {/* Tarjeta Resumen Asistencias */}
            <Card className="group border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 bg-white rounded-[2rem] p-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-50">
                <Home className="w-24 h-24 text-secondary/5 -rotate-12" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Home className="w-7 h-7 text-primary" />
                </div>

                <Badge className="mb-4 bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 border-0 font-medium">
                  Cobertura 24/7
                </Badge>

                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Asistencias Hogar
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cerrajería, Electricidad, Plomería y Línea Blanca.
                </p>
              </div>
            </Card>
          </div>

          {/* Columna Derecha: Asistencias Hogar (Featured) */}
          <div className="lg:col-span-1 h-full">
            <Card className="h-full bg-primary text-primary-foreground rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden group border-0">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
              <Home className="absolute -bottom-6 -right-6 w-48 h-48 text-white/10 rotate-12" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
                  <Home className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-3xl font-bold mb-4">Asistencias Hogar</h3>
                <p className="text-primary-foreground/90 text-lg mb-10 leading-relaxed">
                  Esto incluirá tu paquete de asistencia al hogar.
                </p>

                <div className="space-y-4 mt-auto">
                  {asistenciasHogar.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-colors">
                      <div className="bg-white/20 p-2 rounded-lg">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{item.title}</p>
                        <p className="text-xs text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-sm text-white/80 font-medium text-center">
                    Disponible 24/7 para emergencias
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosTrufi;
