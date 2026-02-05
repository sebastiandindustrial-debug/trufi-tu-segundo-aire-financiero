import { Shield, CheckCircle2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CreditSimulator from "@/components/CreditSimulator";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-hero">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/40 rounded-full blur-3xl" />
      </div>

      {/* Video Background (Interactive Avatar) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-40 mix-blend-overlay"
        >
          <source src="/lovable-uploads/avatar1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay for Text Readability - Stronger on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-primary/40" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT COLUMN: Text Content */}
          <div className="max-w-xl space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-semibold text-white/90">
                Tu camino a la tranquilidad financiera
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
              Tu segundo aire <br />
              <span className="text-emerald-400">financiero</span> comienza aquí
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-white/80 leading-relaxed">
              ¿Reportado en centrales de riesgo? En TRUFI creemos en las segundas oportunidades. Créditos de libranza rápidos, seguros y 100% digitales.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Sin codeudor",
                "Descuento de nómina",
                "Estudio de crédito gratis",
                "Desembolso rápido"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Secondary CTA */}
            <div className="pt-4">
              <Link to="/quienes-somos">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 border-none font-bold rounded-full px-8 shadow-lg hover:shadow-xl transition-all"
                >
                  Conoce más sobre nosotros
                  <Play className="w-4 h-4 ml-2 fill-primary" />
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Simulator (Floating over background) */}
          <div className="relative space-y-6 flex flex-col items-center lg:items-end">

            {/* Embedded Simulator */}
            <div className="relative z-20 w-full max-w-md">
              <CreditSimulator />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
