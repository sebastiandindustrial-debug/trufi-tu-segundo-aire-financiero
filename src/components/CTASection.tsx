import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#2A1F45] text-center shadow-2xl">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          {/* Main Content Row */}
          <div className="relative z-10 px-8 pt-16 pb-12 md:px-12 md:pb-8 lg:px-16 lg:pt-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

              {/* Left: Badge */}
              <div className="lg:w-1/4 flex justify-start lg:justify-start w-full">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm whitespace-nowrap">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  <span className="text-xs md:text-sm font-medium text-white/90 tracking-wide">
                    Respuesta en menos de 24 horas
                  </span>
                </div>
              </div>

              {/* Center: Title */}
              <div className="lg:w-2/4 text-center shrink-0">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                  Es momento de tu <br />
                  <span className="text-secondary">segundo aire financiero</span>
                </h2>
              </div>

              {/* Right: Button */}
              <div className="lg:w-1/4 flex justify-end lg:justify-end w-full">
                <Button
                  size="xl"
                  className="w-full lg:w-auto bg-secondary hover:bg-secondary/90 text-primary-foreground font-bold text-base px-8 py-6 h-auto rounded-full shadow-lg hover:shadow-secondary/20 hover:-translate-y-1 transition-all duration-300 group whitespace-nowrap"
                >
                  Solicitar mi Crédito Ahora
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Row (Subtitle & Contact) */}
          <div className="relative z-10 bg-black/20 px-8 py-6 md:px-12 lg:px-16 border-t border-white/5">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">

              {/* Subtitle */}
              <p className="text-sm md:text-base text-white/80 font-light max-w-xl">
                Somos el camino a tu reincorporación y también nueva oportunidad.
              </p>

              {/* Contact options */}
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                <span className="hidden md:inline text-sm font-medium text-white/60">¿Prefieres que te contactemos?</span>
                <div className="flex gap-4">
                  <a
                    href="tel:+573001234567"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors text-white hover:text-secondary group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    Llámanos
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-colors text-white hover:text-secondary group"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <MessageCircle className="w-3.5 h-3.5" />
                    </div>
                    WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
