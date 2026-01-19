import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import trufiLogo from "@/assets/trufi_logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={trufiLogo} alt="TRUFI - Confianza Inmediata" className="h-10 md:h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            ¿Cómo Funciona?
          </a>
          <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Beneficios
          </a>
          <a href="#inversionistas" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Inversionistas
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="lg">
            Solicitar Crédito
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            <a 
              href="#como-funciona" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Cómo Funciona?
            </a>
            <a 
              href="#beneficios" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a 
              href="#inversionistas" 
              className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inversionistas
            </a>
            <Button variant="hero" className="w-full mt-2">
              Solicitar Crédito
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
