import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-trufi-purple-dark text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">T</span>
              </div>
              <span className="text-xl font-bold">TRUFI</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm text-sm leading-relaxed">
              Reincorporamos personas al sistema financiero con créditos de libranza 
              seguros, transparentes y con tecnología de punta.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Bogotá, Colombia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contacto@trufi.co</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#como-funciona" className="hover:text-primary-foreground transition-colors">¿Cómo Funciona?</a></li>
              <li><a href="#beneficios" className="hover:text-primary-foreground transition-colors">Beneficios</a></li>
              <li><a href="#inversionistas" className="hover:text-primary-foreground transition-colors">Inversionistas</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Tratamiento de Datos</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-xs text-primary-foreground/50 mb-4 leading-relaxed">
            <strong>Aviso Legal:</strong> TRUFI S.A.S. es una entidad de crédito de libranza que opera en 
            cumplimiento de la Ley 1527 de 2012 y demás normatividad aplicable. Las tasas, montos y 
            condiciones del crédito están sujetas a la capacidad de endeudamiento del solicitante y 
            a la verificación de requisitos. Aplican términos y condiciones.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© 2024 TRUFI S.A.S. Todos los derechos reservados.</p>
            <p>NIT: 900.XXX.XXX-X | Vigilado por la Superintendencia Financiera de Colombia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
