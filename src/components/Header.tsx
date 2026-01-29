import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import AccessibilityToggle from "@/components/AccessibilityToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            alt="TRUFI - Confianza Inmediata"
            className="h-10 md:h-12 w-auto object-contain"
            src="/lovable-uploads/e448eedb-a038-42da-a540-05176f5fded3.png"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#como-funciona"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm lg:text-base"
          >
            ¿Cómo Funciona?
          </a>
          <a
            href="#beneficios"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm lg:text-base"
          >
            Beneficios
          </a>
          <a
            href="#inversionistas"
            className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm lg:text-base"
          >
            Inversionistas
          </a>
        </nav>

        {/* Right side: Accessibility + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <AccessibilityToggle />
          <Button variant="hero" size="lg">
            Solicitar Crédito
          </Button>
        </div>

        {/* Mobile: Accessibility + Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <AccessibilityToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            <a
              href="#como-funciona"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              ¿Cómo Funciona?
            </a>
            <a
              href="#beneficios"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Beneficios
            </a>
            <a
              href="#inversionistas"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 text-base"
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
