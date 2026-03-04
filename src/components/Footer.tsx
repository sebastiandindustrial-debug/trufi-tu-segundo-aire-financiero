import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import FooterContactForm from "./FooterContactForm";

const Footer = () => {
  return (
    <footer className="bg-trufi-purple-dark text-primary-foreground relative overflow-hidden text-sm">
      {/* Decorative elements - Subtle */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-trufi-cyan via-white to-trufi-cyan opacity-20" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-trufi-cyan/5 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="container py-8 md:py-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column: Brand & Description (Compact) */}
          <div className="lg:col-span-4 space-y-5">
            <img
              alt="TRUFI - Confianza Inmediata"
              className="h-16 w-auto brightness-0 invert"
              src="/lovable-uploads/Logo-trufi-menu.png"
            />
            <p className="text-primary-foreground/70 leading-relaxed text-xs md:text-sm max-w-sm">
              Reincorporamos personas al sistema financiero con créditos de libranza seguros y transparentes.
              Tu segundo aire financiero comienza aquí.
            </p>

            {/* Contact Info - Compact Vertical List */}
            <div className="space-y-2 py-2">
              <div className="flex items-center gap-2.5 text-xs text-primary-foreground/80">
                <MapPin className="w-3.5 h-3.5 text-trufi-cyan flex-shrink-0" />
                <span>Cra 100 # 16 - 321, Oficina 608 Edificio Jardin Central, Cali - Colombia</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-primary-foreground/80">
                <Phone className="w-3.5 h-3.5 text-trufi-cyan flex-shrink-0" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-primary-foreground/80">
                <Mail className="w-3.5 h-3.5 text-trufi-cyan flex-shrink-0" />
                <span>Notificaciones@trufi.com.co</span>
              </div>
            </div>

            {/* Social Icons - Horizontal */}
            <div className="flex gap-3">
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-trufi-cyan hover:text-trufi-purple-dark transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-trufi-cyan hover:text-trufi-purple-dark transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded-full hover:bg-trufi-cyan hover:text-trufi-purple-dark transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Middle Column: Unified Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-white mb-3">Enlaces</h4>
              <ul className="space-y-2 text-primary-foreground/60 text-xs md:text-sm">
                <li><a href="#como-funciona" className="hover:text-trufi-cyan transition-colors">¿Cómo Funciona?</a></li>
                <li><a href="#beneficios" className="hover:text-trufi-cyan transition-colors">Beneficios</a></li>
                <li><a href="#inversionistas" className="hover:text-trufi-cyan transition-colors">Inversionistas</a></li>
                <li><a href="#" className="hover:text-trufi-cyan transition-colors">Preguntas Frecuentes</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-primary-foreground/60 text-xs md:text-sm">
                <li><a href="#" className="hover:text-trufi-cyan transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-trufi-cyan transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-trufi-cyan transition-colors">Tratamiento de Datos</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form (Compact Wrapper) */}
          <div className="lg:col-span-4">
            <div className="transform scale-95 origin-top-right">
              <FooterContactForm />
            </div>
          </div>

        </div>

        {/* Separator - Removed Content */}
        <div className="mt-8"></div>

        {/* Copyright & Disclaimer - Mini */}
        <div className="border-t border-white/5 pt-6 text-[10px] md:text-xs text-primary-foreground/40 text-justify md:text-center leading-relaxed">
          <p className="mb-2">
            TRUFI S.A.S. cumple con la Ley 1527 de 2012. Tasas y condiciones sujetas a estudio.
            Nunca solicitamos dinero por adelantado.
          </p>
          <p>© 2026 Trufi S.A.S. | Vigilado por La Super sociedades</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;