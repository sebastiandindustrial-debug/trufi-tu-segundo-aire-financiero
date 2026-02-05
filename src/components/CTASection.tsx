import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
            <span className="text-sm font-semibold text-white tracking-wide">
              ⚡ Respuesta en menos de 24 horas
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
            Es momento de tu <br className="hidden md:block" />
            <span className="text-secondary drop-shadow-md">segundo aire financiero</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 font-light leading-relaxed">
            Somos el camino a tu reincorporación financiera.
            ¿Reportado? En TRUFI creemos en ti y te damos una nueva oportunidad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
            <Button
              size="xl"
              className="bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg px-12 py-7 h-auto rounded-full shadow-[0_10px_40px_-10px_rgba(45,212,191,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(45,212,191,0.7)] hover:-translate-y-1 transition-all duration-300 group"
            >
              Solicitar mi Crédito Ahora
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Contact options */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-white/10 max-w-xl mx-auto">
            <p className="text-sm font-medium text-white/80">¿Prefieres que te contactemos?</p>
            <div className="flex gap-6">
              <a
                href="tel:+573001234567"
                className="inline-flex items-center gap-2 text-sm font-bold transition-colors text-white hover:text-secondary group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                Llámanos
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-bold transition-colors text-white hover:text-secondary group"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
