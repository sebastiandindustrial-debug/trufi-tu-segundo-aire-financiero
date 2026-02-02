import { Heart, Shield, Home, Wrench, Zap, Droplets, Snowflake } from "lucide-react";

const amparos = [
  {
    icon: Heart,
    title: "Muerte",
    description: "Protección para tu familia en caso de fallecimiento",
  },
  {
    icon: Shield,
    title: "Incapacidad Total y Permanente (ITP)",
    description: "Cobertura ante eventos que afecten tu capacidad laboral",
  },
  {
    icon: Heart,
    title: "Auxilio Exequial",
    description: "Apoyo para gastos funerarios del titular",
  },
  {
    icon: Home,
    title: "Asistencias Hogar",
    description: "Servicios de emergencia para tu hogar",
  },
];

const asistenciasHogar = [
  { icon: Wrench, title: "Cerrajería", description: "Apertura de puertas y cambio de chapas" },
  { icon: Zap, title: "Electricidad", description: "Reparaciones eléctricas de emergencia" },
  { icon: Droplets, title: "Plomería", description: "Reparación de fugas y desatascos" },
  { icon: Snowflake, title: "Línea Blanca", description: "Reparación de electrodomésticos básicos" },
];

const BeneficiosTrufi = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30" id="beneficios-trufi">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-primary text-sm font-semibold mb-4">
            Protección Integral
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Beneficios incluidos en tu crédito TRUFI
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Más que un crédito, te ofrecemos tranquilidad y respaldo. 
            Todos nuestros productos incluyen cobertura de seguros sin costo adicional.
          </p>
        </div>

        {/* Amparos Grid - Mayor padding interno */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {amparos.map((amparo, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-7 md:p-8 text-center hover:shadow-elevated hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <amparo.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">{amparo.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{amparo.description}</p>
            </div>
          ))}
        </div>

        {/* Asistencias Hogar Section - Mayor padding */}
        <div className="bg-primary rounded-3xl p-8 md:p-14 text-primary-foreground">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-5">
                Asistencias Hogar incluidas
              </h3>
              <p className="text-primary-foreground/85 mb-8 text-lg leading-relaxed">
                Para que tu hogar siempre esté protegido. Servicios de emergencia 
                disponibles cuando más los necesites.
              </p>
              <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
                <p className="text-sm leading-relaxed">
                  <strong>Límite:</strong> 2 eventos por año, hasta $400.000 COP cada uno
                </p>
                <p className="text-sm mt-2 leading-relaxed">
                  <strong>Edad máxima de ingreso:</strong> 85 años
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {asistenciasHogar.map((asistencia, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <asistencia.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-sm mb-2">{asistencia.title}</h4>
                  <p className="text-xs text-primary-foreground/75 leading-relaxed">{asistencia.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosTrufi;
