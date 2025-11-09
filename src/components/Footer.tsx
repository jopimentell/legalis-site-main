import { Link } from "react-router-dom";
import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="h-6 w-6" />
              <span className="font-bold text-lg">Portal Jurídico</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Plataforma educacional dedicada ao estudo e análise do Direito Administrativo.
            </p>
          </div>

          <div>
            
          </div>

          <div>
            <h3 className="font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/conteudo" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Conteúdo
                </Link>
              </li>
              <li>
                <Link to="/podcast" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Podcast
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Quiz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/70">
          <p>© {new Date().getFullYear()} Portal Jurídico. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
