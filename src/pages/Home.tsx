import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Podcast, Brain, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-legal.jpg";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Princípio da Legalidade na Administração Pública
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
                Estudo completo sobre os limites e possibilidades do princípio fundamental 
                que rege toda a atuação administrativa no Brasil
              </p>
              <Link to="/conteudo">
                <Button size="lg" variant="secondary" className="gap-2">
                  Leia o conteúdo completo
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              O Princípio da Legalidade no Direito Administrativo
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O princípio da legalidade é um dos fundamentos essenciais do Direito Administrativo 
              brasileiro, estabelecendo que a Administração Pública só pode agir quando autorizada 
              ou determinada por lei. Este princípio garante a proteção dos direitos dos cidadãos 
              e impõe limites claros à atuação do Estado.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Neste estudo aprofundado, analisamos as diversas dimensões do princípio da legalidade, 
              suas aplicações práticas, limites e possibilidades no contexto da administração pública 
              contemporânea.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Explore o Conteúdo
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="transition-transform hover:scale-105">
                <CardHeader>
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Artigo Completo</CardTitle>
                  <CardDescription>
                    Análise detalhada do princípio da legalidade com fundamentação doutrinária e jurisprudencial
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/conteudo">
                    <Button variant="outline" className="w-full gap-2">
                      Ler artigo
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="transition-transform hover:scale-105">
                <CardHeader>
                  <Podcast className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Podcast Jurídico</CardTitle>
                  <CardDescription>
                    Discussão aprofundada sobre o tema em formato audiovisual para melhor compreensão
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/podcast">
                    <Button variant="outline" className="w-full gap-2">
                      Assistir podcast
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="transition-transform hover:scale-105">
                <CardHeader>
                  <Brain className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Quiz Interativo</CardTitle>
                  <CardDescription>
                    Teste seus conhecimentos com 10 questões sobre o princípio da legalidade
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/quiz">
                    <Button variant="outline" className="w-full gap-2">
                      Fazer quiz
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center bg-accent p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Aprofunde seus conhecimentos
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Comece agora sua jornada de estudo sobre o princípio da legalidade 
              na administração pública brasileira
            </p>
            <Link to="/conteudo">
              <Button size="lg" className="gap-2">
                Começar a ler
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
