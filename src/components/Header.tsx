import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Briefcase, User, CreditCard } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

  // Handle scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => {
      // Change to solid background after scrolling 50px
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-primary/95 backdrop-blur-md shadow-md py-2"
        : "bg-transparent py-4"
        }`}
    >
      <div className="container flex items-center justify-between h-auto">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            alt="TRUFI - Confianza Inmediata"
            className={`w-auto object-contain transition-transform hover:scale-105 ${location.pathname === '/quienes-somos' ? 'h-8 md:h-10' : 'h-10 md:h-14'}`}
            src="/lovable-uploads/Logo-trufi-menu.png"
          />
        </Link>

        {/* NAVEGACIÓN ESCRITORIO */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          <Link
            to="/"
            className="text-white/90 hover:text-emerald-400 transition-colors font-medium text-[14px] shadow-black/20 text-shadow-sm whitespace-nowrap"
          >
            Inicio
          </Link>

          <Link
            to="/quienes-somos"
            className="text-white/90 hover:text-emerald-400 transition-colors font-medium text-[14px] text-shadow-sm whitespace-nowrap"
          >
            Quiénes Somos
          </Link>

          {/* Productos Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-white/90 hover:text-emerald-400 transition-colors font-medium text-[14px] outline-none text-shadow-sm whitespace-nowrap">
              Productos
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-white border-border">
              <DropdownMenuItem asChild>
                <Link to="/pensionado" className="w-full cursor-pointer text-foreground hover:text-primary text-xs">
                  Libranza Pensionados
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/docente" className="w-full cursor-pointer text-foreground hover:text-primary text-xs">
                  Libranza Docentes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/fuerza-publica" className="w-full cursor-pointer text-foreground hover:text-primary text-xs">
                  Pensionados Fuerza Pública
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/beneficios"
            className="text-white/90 hover:text-emerald-400 transition-colors font-medium text-[14px] text-shadow-sm whitespace-nowrap"
          >
            Beneficios
          </Link>

          <Link
            to="/blog"
            className="text-white/90 hover:text-emerald-400 transition-colors font-medium text-[14px] text-shadow-sm whitespace-nowrap"
          >
            Academia TRUFI
          </Link>

          {/* Nuevo Item: Ponte al día */}
          <Link
            to="/zona-pagos"
            className="text-white/90 hover:text-emerald-400 transition-colors font-medium text-[14px] flex items-center gap-1 text-shadow-sm whitespace-nowrap"
          >
            Ponte Al Día
          </Link>

          <Link
            to="/pqr"
            className="text-white/90 hover:text-emerald-400 transition-colors font-medium text-[14px] flex items-center gap-1 text-shadow-sm whitespace-nowrap"
          >
            PQRs
          </Link>
        </nav>

        {/* LADO DERECHO: Botones */}
        <div className="hidden lg:flex items-center gap-3">


          {/* 1. Zona Clientes (Ahora primero) */}
          <Button
            className="bg-white text-primary hover:bg-white/90 font-bold text-[13px] px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            asChild
          >
            <a href="https://app.trufi.com.co/" target="_blank" rel="noopener noreferrer">
              <User className="w-4 h-4 mr-2" />
              Zona Cliente
            </a>
          </Button>

          {/* 2. Portal Comercial (Ahora segundo e interno) */}
          <Link to="/portal-comercial">
            <Button
              className="bg-[#78c0b3] text-white font-bold text-[13px] px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-[#78c0b3]/90 hover:-translate-y-0.5 transition-all"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Portal Comercial
            </Button>
          </Link>
        </div>

        {/* MENÚ MÓVIL */}
        <div className="lg:hidden flex items-center gap-3">

          <button
            className="p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* CONTENIDO MENÚ MÓVIL */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary/95 backdrop-blur-xl border-t border-white/10 animate-fade-in absolute top-full left-0 right-0 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="container py-6 flex flex-col gap-3">
            <Link
              to="/"
              className="text-white text-sm font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>

            <Link
              to="/quienes-somos"
              className="text-white text-sm font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Quiénes Somos
            </Link>

            {/* Productos Móvil Actualizados */}
            <div className="border-b border-white/10 pb-3">
              <p className="text-white/50 font-semibold py-2 text-xs uppercase tracking-wider">Productos</p>
              <div className="pl-3 flex flex-col gap-2">
                <Link
                  to="/pensionado"
                  className="text-white hover:text-white/80 py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  🧓 Libranza Pensionados
                </Link>
                <Link
                  to="/docente"
                  className="text-white hover:text-white/80 py-2 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📚 Libranza Docentes
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
              className="text-white text-sm font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Zona de Aprendizaje
            </Link>

            <Link
              to="/zona-pagos"
              className="text-white text-sm font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Ponte Al Día
            </Link>

            <Link
              to="/pqr"
              className="text-white text-sm font-medium py-3 border-b border-white/10"
              onClick={() => setIsMenuOpen(false)}
            >
              PQRs
            </Link>

            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/20">

              {/* Botones Móvil Reorganizados */}
              <Button
                className="w-full bg-white text-primary font-bold py-5 rounded-full shadow-md"
                onClick={() => setIsMenuOpen(false)}
                asChild
              >
                <a href="https://app.trufi.com.co/" target="_blank" rel="noopener noreferrer">
                  <User className="w-4 h-4 mr-2" />
                  Zona Clientes
                </a>
              </Button>

              <Link to="/portal-comercial" onClick={() => setIsMenuOpen(false)}>
                <Button
                  className="w-full bg-[#78c0b3] text-white font-bold py-5 rounded-full shadow-lg"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Portal Comercial
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
