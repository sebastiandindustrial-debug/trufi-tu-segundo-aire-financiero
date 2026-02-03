import { Shield, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-family-financial.jpg";

const HeroSection = () => {
  const scrollToSimulator = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("simulador");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-28 overflow-hidden">
      {/* Background image with overlay - Nueva imagen profesional de familia */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Familia colombiana disfrutando tranquilidad financiera"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay más intenso para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-primary/30" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 mb-6">
            <Shield className="w-4 h-4 text-secondary" />
            <span className="text-sm md:text-base font-semibold text-white">
              Tu camino a la reincorporación financiera
            </span>
          </div>

          {/* Main Headline - Mayor contraste */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mb-6 drop-shadow-lg">
            Tu segundo aire{" "}
            <span className="text-secondary drop-shadow-md">financiero</span>{" "}
            comienza aquí
          </h1>

          {/* Subtitle - Mayor contraste */}
          <p className="text-lg md:text-xl lg:text-2xl text-white max-w-2xl leading-relaxed mb-8 drop-shadow-md">
            ¿Reportado en centrales de riesgo? En TRUFI creemos en las segundas oportunidades.
            Créditos de libranza con respaldo y acompañamiento humano.
          </p>

          {/* Trust indicators - Mayor contraste */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-2 text-white">
              <Heart className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-base font-semibold drop-shadow-sm">Proceso 100% digital</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Shield className="w-5 h-5 text-secondary flex-shrink-0" />
              <span className="text-base font-semibold drop-shadow-sm">Descuento directo de nómina</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToSimulator}
              variant="cta"
              size="xl"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-2xl px-12 py-8 rounded-full shadow-xl hover:shadow-2xl group"
            >
              Simula tu crédito
              <ArrowRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link to="/quienes-somos">
              <Button
                variant="outline"
                size="xl"
                className="border-2 border-white/40 text-white hover:bg-white/15 font-semibold text-lg px-8 py-7 rounded-full backdrop-blur-sm"
              >
                Conoce más sobre nosotros
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
