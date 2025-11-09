import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Play } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Podcast = () => {
  // Este URL pode ser facilmente editado para qualquer vídeo do YouTube
  const youtubeVideoId = "dQw4w9WgXcQ"; // Substitua pelo ID do vídeo desejado
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="flex justify-center items-center gap-3 mb-4">
              <Headphones className="h-12 w-12 text-primary" />
              <Play className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Podcast Jurídico
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Legalidade em Debate
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-5xl mx-auto mb-12">
            <Card className="overflow-hidden shadow-xl">
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title="Podcast Jurídico - Princípio da Legalidade"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Headphones className="h-10 w-10 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">
                      Princípio da Legalidade na Administração Pública
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Episódio #01 • Direito Administrativo
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-bold mb-3">Descrição do Episódio</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Neste episódio especial do Podcast Jurídico, mergulhamos profundamente no 
                    princípio da legalidade, um dos pilares fundamentais do Direito Administrativo 
                    brasileiro. Exploramos seus conceitos, aplicações práticas e os desafios 
                    contemporâneos na administração pública.
                  </p>

                </div>
              </CardContent>
            </Card>
          </div>

          {/* Related Content */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Conteúdo Relacionado</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Artigo Completo</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Leia o artigo detalhado sobre o princípio da legalidade na administração pública
                  </p>
                  <a href="/conteudo" className="text-primary hover:underline text-sm font-medium">
                    Acessar artigo →
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-2">Quiz Interativo</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Teste seus conhecimentos sobre o tema com nosso quiz de 10 questões
                  </p>
                  <a href="/quiz" className="text-primary hover:underline text-sm font-medium">
                    Fazer quiz →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Podcast;
