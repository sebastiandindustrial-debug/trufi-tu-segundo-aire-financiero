import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Shield, Clock, Users } from "lucide-react";

const benefits = [
  {
    icon: Crown,
    title: "Montos Premium",
    description: "Desde $10 millones hasta $100 millones para tus grandes proyectos",
  },
  {
    icon: Clock,
    title: "Plazos Extensos",
    description: "Hasta 84 meses para que tu cuota sea cómoda",
  },
  {
    icon: Star,
    title: "Tasa Preferencial",
    description: "Desde 0.99% M.V., las mejores condiciones del mercado",
  },
  {
    icon: Users,
    title: "Asesor Dedicado",
    description: "Un ejecutivo personal para acompañarte en todo el proceso",
  },
];

const requirements = [
  "Pertenecer a uno de nuestros segmentos: Pensionados, Docentes o Fuerza Pública",
  "Ingresos mínimos de $2.500.000 mensuales",
  "Historial crediticio favorable (consulta Datacrédito)",
  "Documentación completa según tu perfil",
  "Capacidad de endeudamiento disponible",
];

const TrufiPlus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-secondary/10 to-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full">
                  <Star className="w-4 h-4 text-secondary-foreground" />
                  <span className="text-secondary-foreground font-semibold text-sm">
                    Producto Premium
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Crédito <span className="text-primary">Trufi Plus</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  La solución de financiamiento premium para tus proyectos más ambiciosos. 
                  Montos altos, tasas bajas y un servicio personalizado de primera clase.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gold" size="xl">
                    Solicitar Trufi Plus
                  </Button>
                  <Button variant="outline" size="xl">
                    Hablar con Asesor VIP
                  </Button>
                </div>
              </div>
              <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Beneficios Exclusivos Trufi Plus
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-elevated transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              ¿Para qué puedes usar Trufi Plus?
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Diseñado para financiar los proyectos que transforman tu vida
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { emoji: "🏠", title: "Compra de Vivienda", desc: "Tu casa propia o de inversión" },
                { emoji: "🚗", title: "Vehículo", desc: "Nuevo o usado, el que necesites" },
                { emoji: "🎓", title: "Educación", desc: "Posgrados y especializaciones" },
                { emoji: "💼", title: "Negocio", desc: "Capital para emprender" },
                { emoji: "🏥", title: "Salud", desc: "Procedimientos médicos" },
                { emoji: "✨", title: "Libre Inversión", desc: "Lo que tú decidas" },
              ].map((useCase, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-5 text-center">
                  <span className="text-3xl mb-3 block">{useCase.emoji}</span>
                  <h3 className="font-bold text-foreground mb-1">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Requisitos para Trufi Plus
              </h2>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-secondary to-amber-500">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tus grandes sueños merecen un gran crédito
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Solicita hoy y recibe atención VIP de nuestros asesores especializados.
            </p>
            <Button variant="secondary" size="xl" className="bg-white text-secondary-foreground hover:bg-white/90">
              Comenzar Solicitud
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TrufiPlus;
