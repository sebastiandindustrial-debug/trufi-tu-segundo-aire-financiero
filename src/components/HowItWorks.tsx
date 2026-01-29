import { UserPlus, Building2, Wallet, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Tú solicitas",
    description: "Completa tu solicitud 100% en línea en menos de 5 minutos. Sin filas, sin papeleos.",
    label: "Tu solicitud",
  },
  {
    number: "02",
    icon: Building2,
    title: "Fiduciaria administra recursos",
    description: "Tu dinero está protegido en un Patrimonio Autónomo administrado por una fiduciaria vigilada.",
    label: "Seguridad garantizada",
  },
  {
    number: "03",
    icon: Wallet,
    title: "Desembolso seguro",
    description: "Una vez aprobado, el dinero llega directamente a tu cuenta. Rápido y transparente.",
    label: "Dinero en tu cuenta",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm md:text-base font-medium mb-4">
            Modelo Seguro
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tu dinero protegido por{" "}
            <span className="text-gradient">Patrimonio Autónomo</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Máxima seguridad jurídica para tu tranquilidad. 
            Así funciona nuestro proceso blindado.
          </p>
        </div>

        {/* Visual Flow - Horizontal on desktop, vertical on mobile */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connection Line */}
            <div className="absolute top-16 left-[15%] right-[15%] h-1 bg-gradient-to-r from-primary via-primary/60 to-primary rounded-full" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center text-center w-1/3 px-4">
                {/* Icon Circle */}
                <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-hero flex items-center justify-center shadow-elevated mb-6 group hover:scale-105 transition-transform duration-300">
                  <step.icon className="w-14 h-14 text-primary-foreground" />
                  
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm shadow-trufi">
                    {step.number}
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute top-16 left-[calc(100%-1rem)] z-20">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {step.label}
                  </span>
                  <h3 className="text-lg lg:text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4 bg-card rounded-2xl p-6 border border-border shadow-trufi">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-trufi">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-1">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Paso {step.number}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector arrow */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center rotate-90">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-full border border-border shadow-trufi">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-sm md:text-base font-medium text-foreground">
              Administrado por Fiduciaria Vigilada por la Superintendencia Financiera
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
