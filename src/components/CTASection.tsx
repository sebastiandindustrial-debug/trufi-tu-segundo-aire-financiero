import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-trufi-purple-light via-background to-trufi-gold-light opacity-40" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-elevated border border-border text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 mb-6">
              <span className="text-sm font-medium text-secondary-foreground">
                ⚡ Respuesta en menos de 24 horas
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Es momento de tu{" "}
              <span className="text-gradient">segundo aire financiero</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Pensionados, Docentes del sector público y miembros de las Fuerzas Militares: 
              accede a crédito de libranza con las mejores condiciones del mercado.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="cta" size="xl" className="group">
                Solicitar mi Crédito Ahora
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">¿Prefieres que te contactemos?</p>
              <div className="flex gap-4">
                <a 
                  href="tel:+573001234567" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Llámanos
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
