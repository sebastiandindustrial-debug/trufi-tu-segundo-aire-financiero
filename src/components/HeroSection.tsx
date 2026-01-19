import { Button } from "@/components/ui/button";
import { Shield, Clock, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-trufi-purple-light via-background to-trufi-gold-light opacity-60" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Seguridad Biométrica Certificada
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Tu crédito de libranza{" "}
              <span className="text-gradient">con confianza inmediata</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Pensionados, Docentes y miembros de las Fuerzas Militares: 
              obtén el respaldo financiero que mereces con{" "}
              <strong className="text-foreground">desembolso rápido</strong> y{" "}
              <strong className="text-foreground">total transparencia</strong>.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Descuento directo de nómina</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Respuesta en 24 horas</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="cta" size="xl">
                Solicita tu Crédito Ahora
              </Button>
              <Button variant="outline" size="xl">
                Simula tu Cuota
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Card visual */}
              <div className="bg-card rounded-3xl shadow-elevated p-8 border border-border animate-float">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xl">T</span>
                    </div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                      Crédito Aprobado
                    </span>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Monto disponible</p>
                    <p className="text-4xl font-bold text-foreground">$15.000.000</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                    <div>
                      <p className="text-xs text-muted-foreground">Tasa mensual</p>
                      <p className="text-lg font-semibold text-foreground">1.2%</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Plazo</p>
                      <p className="text-lg font-semibold text-foreground">48 meses</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-accent">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-accent-foreground">Verificación exitosa</p>
                      <p className="text-xs text-muted-foreground">Identidad confirmada</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-card text-sm font-semibold animate-pulse-soft">
                ✓ 100% Seguro
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
