import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Shield, Clock, Percent, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "trufi-plus",
    name: "Crédito Trufi Plus",
    tagline: "La solución premium para grandes proyectos",
    icon: Star,
    color: "from-secondary to-amber-500",
    href: "/servicios/trufi-plus",
    features: [
      "Montos desde $10.000.000 hasta $100.000.000",
      "Plazos de hasta 84 meses",
      "Tasa preferencial desde 0.99% M.V.",
      "Aprobación en 48 horas",
      "Sin codeudor para pensionados",
      "Asesor personal dedicado",
    ],
    ideal: "Ideal para: Compra de vivienda, vehículo, inversiones grandes",
  },
  {
    id: "trufi-flex",
    name: "Crédito Trufi Flex",
    tagline: "Flexibilidad para tus necesidades inmediatas",
    icon: Zap,
    color: "from-primary to-primary/80",
    href: "/servicios/trufi-flex",
    features: [
      "Montos desde $1.000.000 hasta $15.000.000",
      "Plazos de 12 a 48 meses",
      "Aprobación en 24 horas",
      "100% digital, sin papeleos",
      "Cuotas fijas durante todo el plazo",
      "Pago anticipado sin penalidad",
    ],
    ideal: "Ideal para: Emergencias, compras menores, consolidación de deudas",
  },
];

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-background">
          <div className="container text-center max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nuestros <span className="text-primary">Servicios</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Soluciones de crédito diseñadas para cada necesidad. 
              Elige el producto que mejor se adapte a tus metas financieras.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-card border-2 border-border hover:border-primary rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-elevated group"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-6 md:p-8`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white">
                          {service.name}
                        </h2>
                        <p className="text-white/80 text-sm">{service.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="p-6 md:p-8">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 mb-6">
                      {service.ideal}
                    </p>

                    <Link to={service.href}>
                      <Button variant="hero" className="w-full group">
                        Conocer más
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Comparativa de Productos
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto bg-card border border-border rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-muted">
                    <th className="p-4 text-left font-bold text-foreground">Característica</th>
                    <th className="p-4 text-center font-bold text-foreground">Trufi Plus</th>
                    <th className="p-4 text-center font-bold text-foreground">Trufi Flex</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Monto máximo", plus: "$100.000.000", flex: "$15.000.000" },
                    { feature: "Plazo máximo", plus: "84 meses", flex: "48 meses" },
                    { feature: "Tiempo de aprobación", plus: "48 horas", flex: "24 horas" },
                    { feature: "Tasa desde", plus: "0.99% M.V.", flex: "1.2% M.V." },
                    { feature: "Asesor dedicado", plus: "✓", flex: "—" },
                    { feature: "100% digital", plus: "✓", flex: "✓" },
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="p-4 text-foreground font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.plus}</td>
                      <td className="p-4 text-center text-muted-foreground">{row.flex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              ¿No sabes cuál elegir?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Nuestros asesores te ayudarán a encontrar el producto perfecto para tus necesidades.
            </p>
            <Button variant="secondary" size="xl">
              Hablar con un Asesor
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Servicios;
