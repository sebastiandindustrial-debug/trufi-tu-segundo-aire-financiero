import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AccessibilityToggle from "@/components/AccessibilityToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function for internal links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-md py-2" : "bg-primary py-3"
      }`}
    >
      <div className="container flex items-center justify-between h-auto">
        {/* LOGO: Significativamente más grande */}
        <Link to="/" className="flex items-center">
          <img
            alt="TRUFI - Confianza Inmediata"
            className="h-16 md:h-20 w-auto object-contain transition-transform hover:scale-105"
            src="/lovable-uploads/4f4d1595-1fcf-4b4e-b604-ec7d158cb34a.png"
          />
        </Link>

        {/* NAVEGACIÓN ESCRITORIO - Simplificada */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
          <Link 
            to="/" 
            className="text-white/90 hover:text-white transition-colors font-medium text-sm"
          >
            Inicio
          </Link>

          {/* Quiénes Somos */}
          <Link 
            to="/quienes-somos" 
            className="text-white/90 hover:text-white transition-colors font-medium text-sm"
          >
            Quiénes Somos
          </Link>

          {/* Productos Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-white/90 hover:text-white transition-colors font-medium text-sm outline-none">
              Productos
              <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-white border-border">
              <DropdownMenuItem asChild>
                <Link to="/pensionado" className="w-full cursor-pointer text-foreground hover:text-primary">
                  Pensionados
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/docente" className="w-full cursor-pointer text-foreground hover:text-primary">
                  Docentes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/fuerza-publica" className="w-full cursor-pointer text-foreground hover:text-primary">
                  Fuerza Pública
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Zona de Aprendizaje - Oculto si no hay contenido */}
          <Link 
            to="/blog" 
            className="text-white/90 hover:text-white transition-colors font-medium text-sm"
          >
            Blog
          </Link>
        </nav>

        {/* LADO DERECHO: Accesibilidad + Botones - Simplificado */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="text-white">
            <AccessibilityToggle />
          </div>

          {/* Portal Comercial - Ahora como enlace de texto secundario */}
          <Link 
            to="#" 
            className="text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            Portal Comercial
          </Link>

          {/* Zona Clientes - CTA Principal destacado */}
          <Button className="bg-secondary text-primary font-bold text-sm px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:bg-secondary/90 hover:-translate-y-0.5 transition-all">
            Zona Clientes
          </Button>
        </div>

        {/* MENÚ MÓVIL */}
        <div className="lg:hidden flex items-center gap-3">
          <div className="text-white">
            <AccessibilityToggle />
          </div>
          <button
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* CONTENIDO MENÚ MÓVIL - Simplificado */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10 animate-fade-in absolute top-full left-0 right-0 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="container py-6 flex flex-col gap-3">
            <Link
              to="/"
              className="text-white text-base font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>

            <Link
              to="/quienes-somos"
              className="text-white text-base font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Quiénes Somos
            </Link>

            {/* Productos Móvil */}
            <div className="border-b border-white/10 pb-3">
              <p className="text-white/50 font-semibold py-2 text-xs uppercase tracking-wider">Productos</p>
              <div className="pl-3 flex flex-col gap-2">
                <Link
                  to="/pensionado"
                  className="text-white hover:text-white/80 py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🧓 Pensionados
                </Link>
                <Link
                  to="/docente"
                  className="text-white hover:text-white/80 py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📚 Docentes
                </Link>
                <Link
                  to="/fuerza-publica"
                  className="text-white hover:text-white/80 py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🛡️ Fuerza Pública
                </Link>
              </div>
            </div>

            <Link
              to="/blog"
              className="text-white text-base font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>

            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/20">
              {/* Portal Comercial - Texto secundario en móvil */}
              <Link 
                to="#"
                className="text-center text-white/70 text-sm font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portal Comercial
              </Link>
              
              {/* Zona Clientes - CTA Principal */}
              <Button 
                className="w-full bg-secondary text-primary font-bold py-5 rounded-full shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Zona Clientes
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
