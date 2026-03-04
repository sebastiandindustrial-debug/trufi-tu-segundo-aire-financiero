import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CreditSimulator from "@/components/CreditSimulator";
import { Button } from "@/components/ui/button";
import { Check, Zap, Clock, Smartphone, CreditCard, RefreshCw } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Aprobación Express",
    description: "Respuesta en solo 24 horas, sin demoras",
  },
  {
    icon: Smartphone,
    title: "100% Digital",
    description: "Todo el proceso desde tu celular o computador",
  },
  {
    icon: CreditCard,
    title: "Cuotas Fijas",
    description: "Sin sorpresas, siempre sabrás cuánto pagas",
  },
  {
    icon: RefreshCw,
    title: "Pago Anticipado",
    description: "Cancela antes sin penalidades ni recargos",
  },
];

const requirements = [
  "Pertenecer a uno de nuestros segmentos: Pensionados, Docentes o Fuerza Pública",
  "Ingresos mínimos de $1.000.000 mensuales",
  "Cédula de ciudadanía vigente",
  "Desprendible de pago reciente",
  "Teléfono celular con WhatsApp",
];

const steps = [
  {
    number: "1",
    title: "Simula tu crédito",
    description: "Elige el monto y plazo que necesitas",
  },
  {
    number: "2",
    title: "Completa tus datos",
    description: "Formulario simple de 5 minutos",
  },
  {
    number: "3",
    title: "Recibe aprobación",
    description: "Te contactamos en menos de 24 horas",
  },
  {
    number: "4",
    title: "¡Dinero en tu cuenta!",
    description: "Desembolso directo a tu cuenta bancaria",
  },
];

const TrufiFlex = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-primary/10 to-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-primary font-semibold text-sm">
                    Rápido y Flexible
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Crédito <span className="text-primary">Trufi Flex</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  La solución ágil para tus necesidades inmediatas. 
                  Aprobación en 24 horas, proceso 100% digital y cuotas que se adaptan a ti.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl">
                    Solicitar Trufi Flex
                  </Button>
                  <Button variant="outline" size="xl">
                    ¿Cómo funciona?
                  </Button>
                </div>
              </div>
              <div className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
                <CreditSimulator />
              </div>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Así de fácil es obtener tu crédito
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Un proceso simple diseñado para tu comodidad
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-card border border-border rounded-2xl p-6 text-center h-full">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Ventajas de Trufi Flex
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-elevated transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
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
              Ideal para...
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
              {[
                { emoji: "🏥", title: "Emergencias médicas" },
                { emoji: "🔧", title: "Reparaciones del hogar" },
                { emoji: "📚", title: "Útiles escolares" },
                { emoji: "🎁", title: "Fechas especiales" },
                { emoji: "💳", title: "Consolidar deudas" },
                { emoji: "✈️", title: "Viajes familiares" },
                { emoji: "🛒", title: "Electrodomésticos" },
                { emoji: "💡", title: "Lo que necesites" },
              ].map((useCase, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-4 text-center">
                  <span className="text-2xl mb-2 block">{useCase.emoji}</span>
                  <p className="text-sm font-medium text-foreground">{useCase.title}</p>
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
                Requisitos Mínimos
              </h2>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                <ul className="space-y-4">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
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
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary to-primary/80">
          <div className="container text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Tu solución financiera a un clic
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Comienza ahora y recibe respuesta en menos de 24 horas.
            </p>
            <Button variant="secondary" size="xl">
              Solicitar Trufi Flex
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TrufiFlex;
