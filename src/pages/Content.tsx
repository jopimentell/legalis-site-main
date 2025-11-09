import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Scale, FileText } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Content = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-secondary/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Navegação
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a href="#introducao" className="block text-muted-foreground hover:text-primary transition-colors">
                      Introdução
                    </a>
                    <a href="#historia" className="block text-muted-foreground hover:text-primary transition-colors">
                      Origem Histórica
                    </a>
                    <a href="#aplicacao" className="block text-muted-foreground hover:text-primary transition-colors">
                      Aplicação Prática
                    </a>
                    <a href="#conclusao" className="block text-muted-foreground hover:text-primary transition-colors">
                      Conclusão
                    </a>
                  </nav>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <article className="lg:col-span-3">
              <Card>
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-3 mb-8 text-primary">
                    <Scale className="h-8 w-8" />
                    <BookOpen className="h-6 w-6" />
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Princípio da Legalidade na Administração Pública: Limites e Possibilidades
                  </h1>

                  <div className="prose prose-lg max-w-none">
                    <div id="introducao" className="mb-8">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Introdução</h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        O princípio da legalidade é um dos fundamentos do Direito Administrativo e está diretamente ligado à ideia de que toda atuação da Administração Pública deve respeitar a lei. Diferente do cidadão, que pode fazer tudo o que a lei não proíbe, o agente público só pode agir conforme o que a lei autoriza.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        Esse princípio está previsto na Constituição Federal de 1988, especialmente nos artigos 5º, II, e 37, caput, e garante que o Estado atue com transparência, justiça e respeito aos direitos individuais. Ele é essencial para impedir abusos de poder e assegurar que os atos da Administração Pública sejam legítimos e controláveis.
                      </p>
                    </div>                   

                    <div id="historia" className="mb-8">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Origem Histórica</h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Historicamente, o princípio da legalidade surgiu a partir das revoluções liberais, principalmente a Revolução Francesa (1789), que consolidou a ideia de que ninguém está acima da lei, nem mesmo os governantes. Esse pensamento foi fundamental para a construção do Estado de Direito, no qual o poder público se submete às leis, e não o contrário.
                      </p>
                      


                    <div id="aplicacao" className="mb-8">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Aplicação Prática</h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Na prática, a legalidade limita o poder dos administradores e exige que toda ação governamental esteja respaldada por uma norma jurídica. Quando a autoridade pública age sem base legal, o ato é considerado inválido, podendo gerar responsabilidade civil, administrativa e penal.
                      </p>
                      
                      <h3 className="text-xl font-bold mb-3 text-foreground">Relação com Outros Princípios</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Além disso, o princípio da legalidade está relacionado a outros princípios da Administração Pública, como a impessoalidade, moralidade, publicidade e eficiência. A Emenda Constitucional nº 19/1998, conhecida como “Reforma Administrativa”, trouxe o princípio da eficiência, que busca tornar a administração mais ágil e moderna, sem afastar o dever de agir conforme a lei.
                      </p>

                      <h3 className="text-xl font-bold mb-3 text-foreground">Legalidade e Eficiência na Atualidade</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                       Com o avanço das demandas sociais, a Administração passou a enfrentar o desafio de conciliar legalidade com eficiência. Isso levou ao surgimento de instrumentos como a discricionariedade administrativa, o poder regulamentar e as parcerias público-privadas, que permitem maior flexibilidade, mas sempre dentro dos limites legais.
                      </p>

                      
                    </div>

                    <div id="conclusao" className="mb-4">
                      <h2 className="text-2xl font-bold mb-4 text-foreground">Conclusão</h2>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Dessa forma, o princípio da legalidade deve ser entendido hoje como dinâmico e equilibrado: ele continua garantindo segurança jurídica e controle dos atos públicos, mas também precisa permitir que o Estado atue de maneira eficiente e inovadora, para atender melhor às necessidades da sociedade.
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Em síntese, a legalidade:
                      </p>

                      <ul className="list-disc pl-6 mb-4 text-muted-foreground space-y-2">
                        <li>Resguarda os direitos dos cidadãos;</li>
                        <li>Orienta a conduta dos agentes públicos;</li>
                        <li>Evita abusos e arbitrariedades;</li>
                        <li>Mantém o Estado fiel ao interesse público e à Constituição.</li>
                      </ul>
                      <p className="text-muted-foreground leading-relaxed">
                        Assim, o princípio da legalidade não é apenas uma regra jurídica, mas uma garantia democrática essencial, que equilibra o poder do Estado com a proteção do cidadão e o bom funcionamento da Administração Pública.
                      </p>                      
                    </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Content;
