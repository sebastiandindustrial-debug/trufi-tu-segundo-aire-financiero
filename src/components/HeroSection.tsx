import { Shield, Clock, CheckCircle2 } from "lucide-react";
import CreditSimulator from "@/components/CreditSimulator";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-trufi-purple-light via-background to-trufi-gold-light opacity-60" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm md:text-base font-medium text-accent-foreground">
                Seguridad Biométrica Certificada
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight text-foreground">
              Tu crédito de libranza{" "}
              <span className="text-gradient">con confianza inmediata</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Pensionados, Docentes y miembros de las Fuerzas Militares: 
              obtén el respaldo financiero que mereces con{" "}
              <strong className="text-foreground">desembolso rápido</strong> y{" "}
              <strong className="text-foreground">total transparencia</strong>.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">Descuento directo de nómina</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">Respuesta en 24 horas</span>
              </div>
            </div>
          </div>

          {/* Credit Simulator - Floating Card */}
          <div className="relative lg:pl-8">
            <div className="animate-float">
              <CreditSimulator />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-2 -left-2 lg:left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-card text-sm font-semibold animate-pulse-soft z-10">
              ✓ 100% Digital
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
