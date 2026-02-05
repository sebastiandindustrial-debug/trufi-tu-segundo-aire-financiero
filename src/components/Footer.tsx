import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
import FooterContactForm from "./FooterContactForm";

const Footer = () => {
  return (
    <footer className="bg-trufi-purple-dark text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-trufi-cyan via-white to-trufi-cyan opacity-20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-trufi-cyan/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-trufi-purple/20 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="container py-12 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Brand & Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <img
                alt="TRUFI - Confianza Inmediata"
                className="h-20 lg:h-24 w-auto brightness-0 invert"
                src="/lovable-uploads/Logo-trufi-menu.png"
              />
              <p className="text-primary-foreground/80 max-w-md text-base leading-relaxed">
                Reincorporamos personas al sistema financiero con créditos de libranza
                seguros, transparentes y con tecnología de punta. Tu segundo aire financiero comienza aquí.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-white">Información de Contacto</h4>
              <div className="space-y-3 text-primary-foreground/80">
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <MapPin className="w-4 h-4 text-trufi-cyan" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Oficina Principal</p>
                    <p className="text-sm">Bogotá, Colombia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <Phone className="w-4 h-4 text-trufi-cyan" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Línea de Atención</p>
                    <p className="text-sm">+57 300 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/10 p-2 rounded-lg mt-1">
                    <Mail className="w-4 h-4 text-trufi-cyan" />
                  </div>
                  <div>
                    <p className="font-medium text-white">Correo Electrónico</p>
                    <p className="text-sm">contacto@trufi.co</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <div className="flex gap-4">
                <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-trufi-cyan hover:text-trufi-purple-dark transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-trufi-cyan hover:text-trufi-purple-dark transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-white/5 p-2.5 rounded-full hover:bg-trufi-cyan hover:text-trufi-purple-dark transition-all duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column: Links */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Enlaces</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="#como-funciona" className="hover:text-trufi-cyan transition-colors flex items-center gap-2">¿Cómo Funciona?</a></li>
                <li><a href="#beneficios" className="hover:text-trufi-cyan transition-colors flex items-center gap-2">Beneficios</a></li>
                <li><a href="#inversionistas" className="hover:text-trufi-cyan transition-colors flex items-center gap-2">Inversionistas</a></li>
                <li><a href="#" className="hover:text-trufi-cyan transition-colors flex items-center gap-2">Preguntas Frecuentes</a></li>
                <li><a href="#" className="hover:text-trufi-cyan transition-colors flex items-center gap-2">Blog Financiero</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-primary-foreground/70">
                <li><a href="#" className="hover:text-trufi-cyan transition-colors">Términos y Condiciones</a></li>
                <li><a href="#" className="hover:text-trufi-cyan transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-trufi-cyan transition-colors">Tratamiento de Datos</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-5">
            <FooterContactForm />
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 mb-6 leading-relaxed text-justify">
            <strong>Aviso Legal:</strong> TRUFI S.A.S. es una entidad de crédito de libranza que opera en
            cumplimiento de la Ley 1527 de 2012 y demás normatividad aplicable. Las tasas, montos y
            condiciones del crédito están sujetas a la capacidad de endeudamiento del solicitante y
            a la verificación de requisitos. TRUFI nunca solicita dinero por adelantado para el estudio
            o desembolso del crédito. Si recibes una solicitud de este tipo, por favor denúncialo inmediatamente
            a nuestros canales oficiales. Aplican términos y condiciones.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© 2024 TRUFI S.A.S. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <p>NIT: 900.XXX.XXX-X</p>
              <span className="hidden md:block">|</span>
              <p>Vigilado por la Superintendencia Financiera de Colombia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;