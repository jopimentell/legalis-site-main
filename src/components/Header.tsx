import { Link, useLocation } from "react-router-dom";
import { Scale, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  
  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/conteudo", label: "Conteúdo" },
    { href: "/podcast", label: "Podcast" },
    { href: "/quiz", label: "Quiz" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-header-bg shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-header-text">
          <Scale className="h-8 w-8" />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight">Portal Jurídico</span>
            <span className="text-xs font-normal opacity-90">Direito Administrativo</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors rounded ${
                isActive(link.href)
                  ? "text-header-text bg-primary-light"
                  : "text-header-text/90 hover:text-header-text hover:bg-primary-light/50"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-header-text">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-base font-medium rounded transition-colors ${
                    isActive(link.href)
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent/50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
