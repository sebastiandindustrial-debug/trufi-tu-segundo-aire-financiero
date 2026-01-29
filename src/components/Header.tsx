import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AccessibilityToggle from "@/components/AccessibilityToggle";
import trufiLogo from "@/assets/trufi_logo.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20 bg-primary text-primary-foreground">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img alt="TRUFI - Confianza Inmediata" className="h-10 md:h-12 w-auto object-cover shadow-2xl rounded border-0 border-none" src="/lovable-uploads/4f4d1595-1fcf-4b4e-b604-ec7d158cb34a.png" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
          <Link to="/" className="transition-colors font-medium text-sm text-primary-foreground">
            Inicio
          </Link>

          {/* Quiénes Somos Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              Quiénes Somos
              <ChevronDown className="w-4 h-4 text-primary-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/quienes-somos" className="w-full cursor-pointer">
                  Sobre TRUFI
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/quienes-somos?tab=mision" className="w-full cursor-pointer">
                  Misión y Visión
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/quienes-somos?tab=estructura" className="w-full cursor-pointer">
                  Estructura Organizacional
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/quienes-somos?tab=politicas" className="w-full cursor-pointer">
                  Políticas
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Servicios Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-medium text-sm">
              Servicios
              <ChevronDown className="w-4 h-4 text-primary-foreground" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              <DropdownMenuItem asChild>
                <Link to="/servicios" className="w-full cursor-pointer">
                  Todos los Servicios
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/servicios/trufi-plus" className="w-full cursor-pointer">
                  Crédito Trufi Plus
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/servicios/trufi-flex" className="w-full cursor-pointer">
                  Crédito Trufi Flex
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/blog" className="transition-colors font-medium text-sm text-primary-foreground">
            Blog Financiero
          </Link>

          <Link to="/zona-pagos" className="transition-colors font-medium text-sm text-primary-foreground">
            Zona de Pagos
          </Link>
        </nav>

        {/* Right side: Accessibility + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <AccessibilityToggle />
          <Link to="/servicios">
            <Button variant="hero" size="lg">
              Solicitar Crédito
            </Button>
          </Link>
        </div>

        {/* Mobile: Accessibility + Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <AccessibilityToggle />
          <button className="p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <div className="lg:hidden bg-card border-b border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container py-4 flex flex-col gap-2">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-3 text-base border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>

            {/* Quiénes Somos Section */}
            <div className="border-b border-border pb-2">
              <p className="text-foreground font-semibold py-2 text-sm">Quiénes Somos</p>
              <div className="pl-4 flex flex-col gap-1">
                <Link to="/quienes-somos" className="text-muted-foreground hover:text-foreground transition-colors py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Sobre TRUFI
                </Link>
                <Link to="/quienes-somos?tab=mision" className="text-muted-foreground hover:text-foreground transition-colors py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Misión y Visión
                </Link>
                <Link to="/quienes-somos?tab=estructura" className="text-muted-foreground hover:text-foreground transition-colors py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Estructura Organizacional
                </Link>
                <Link to="/quienes-somos?tab=politicas" className="text-muted-foreground hover:text-foreground transition-colors py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Políticas
                </Link>
              </div>
            </div>

            {/* Servicios Section */}
            <div className="border-b border-border pb-2">
              <p className="text-foreground font-semibold py-2 text-sm">Servicios</p>
              <div className="pl-4 flex flex-col gap-1">
                <Link to="/servicios" className="text-muted-foreground hover:text-foreground transition-colors py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Todos los Servicios
                </Link>
                <Link to="/servicios/trufi-plus" className="text-muted-foreground hover:text-foreground transition-colors py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Crédito Trufi Plus
                </Link>
                <Link to="/servicios/trufi-flex" className="text-muted-foreground hover:text-foreground transition-colors py-2 text-sm" onClick={() => setIsMenuOpen(false)}>
                  Crédito Trufi Flex
                </Link>
              </div>
            </div>

            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-3 text-base border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Blog Financiero
            </Link>

            <Link to="/zona-pagos" className="text-muted-foreground hover:text-foreground transition-colors font-medium py-3 text-base border-b border-border" onClick={() => setIsMenuOpen(false)}>
              Zona de Pagos
            </Link>

            <Link to="/servicios" onClick={() => setIsMenuOpen(false)}>
              <Button variant="hero" className="w-full mt-4">
                Solicitar Crédito
              </Button>
            </Link>
          </nav>
        </div>}
    </header>;
};
export default Header;