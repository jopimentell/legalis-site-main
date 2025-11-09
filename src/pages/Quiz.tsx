import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, CheckCircle, XCircle, RotateCcw } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "O que significa o princípio da legalidade na Administração Pública?",
    options: [
      "Significa que o agente público só pode fazer o que a lei autoriza. Diferente do particular, que pode fazer tudo o que a lei não proíbe.",
      "Significa que o agente público pode agir conforme seu julgamento, desde que beneficie o interesse coletivo.",
      "Significa que o agente público deve seguir apenas orientações internas, sem depender da lei."
    ],
    correctAnswer: 0,
    explanation: "Significa que o agente público só pode fazer o que a lei autoriza. Diferente do particular, que pode fazer tudo o que a lei não proíbe."
  },
  {
    id: 2,
    question: "Onde está previsto o princípio da legalidade?",
    options: [
      "Está no artigo 37 da Constituição Federal, que lista os princípios da administração pública",
      "Está no Código Penal, dentro das normas sobre conduta de servidores.",
      "Está apenas em leis municipais que tratam da organização do poder público.."
    ],
    correctAnswer: 0,
    explanation: "O artigo 37 da Constituição Federal estabelece os princípios que regem a administração pública, incluindo o princípio da legalidade."
  },
  {
    id: 3,
    question: "Qual é a principal diferença entre o princípio da legalidade para o cidadão e para o administrador público?",
    options: [
      "✅ O cidadão tem liberdade, o servidor público tem limitação. O cidadão pode agir livremente; o administrador só age conforme a lei.",
      "Ambos têm a mesma liberdade para agir, desde que não prejudiquem outras pessoas.",
      "O administrador público tem mais autonomia que o cidadão, pois representa o Estado."
    ],
    correctAnswer: 0,
    explanation: "Para o cidadão, vale a autonomia da vontade (pode tudo que não é proibido). Para o administrador, vale a legalidade estrita (só pode fazer o que a lei autoriza)."
  },
  {
    id: 4,
    question: "A administração pode agir sem previsão legal?",
    options: [
      "Não. Se não houver lei autorizando, o ato é considerado ilegal e pode ser anulado.",
      "Sim, desde que o ato tenha boa intenção e beneficie o interesse público.",
      "Sim, quando houver urgência e o administrador julgar necessário."
    ],
    correctAnswer: 0,
    explanation: "A administração pública não pode agir sem base legal. Todo ato administrativo precisa de fundamento em lei, caso contrário é ilegal e passível de anulação."
  },
  {
    id: 5,
    question: "O princípio da legalidade limita ou amplia o poder do administrador público?",
    options: [
      "Limita. Ele serve justamente para evitar abusos e garantir que o poder público siga as regras.",
      "Amplia, dando mais liberdade para o administrador decidir sozinho.",
      "Nem limita nem amplia, apenas orienta o administrador a seguir costumes."
    ],
    correctAnswer: 0,
    explanation: "O princípio da legalidade é um instrumento de limitação do poder estatal, protegendo o cidadão contra abusos e arbitrariedades."
  },
  {
    id: 6,
    question: "O que acontece quando um ato administrativo é feito fora dos limites da lei?",
    options: [
      "Esse ato é ilegal e pode ser anulado pela própria administração ou pelo Judiciário.",
      "O ato é válido, desde que o administrador tenha boa-fé.",
      "O ato permanece válido até que o Legislativo aprove sua regularização."
    ],
    correctAnswer: 0,
    explanation: "Atos ilegais podem ser anulados pela própria Administração (poder de autotutela) ou pelo Poder Judiciário, pois contrariam o ordenamento jurídico."
  },
  {
    id: 7,
    question: "É possível que a lei dê certa liberdade ao administrador para escolher como agir?",
    options: [
      "Sim. Em alguns casos, a lei permite um espaço de discricionariedade, mas mesmo assim dentro dos limites legais.",
      "Não, o administrador nunca pode escolher, deve sempre seguir ordens superiores.",
      "Sim, o administrador pode agir livremente sem qualquer base legal."
    ],
    correctAnswer: 0,
    explanation: "A discricionariedade administrativa permite ao gestor público escolher, dentro dos limites da lei, a melhor forma de atender ao interesse público."
  },
  {
    id: 8,
    question: "Como o princípio da legalidade se relaciona com o Estado Democrático de Direito?",
    options: [
      "Ele garante que o Estado atue com base nas leis e não na vontade pessoal dos governantes, protegendo o cidadão de arbitrariedades.",
      "Permite que o governo atue conforme sua vontade política.",
      "Dá ao governante o poder de criar leis por decreto sem aprovação."
    ],
    correctAnswer: 0,
    explanation: "No Estado Democrático de Direito, o princípio da legalidade é fundamental para garantir que o poder público se submeta às leis e proteja os direitos dos cidadãos."
  },
  {
    id: 9,
    question: "O princípio da legalidade impede totalmente a inovação na administração pública?",
    options: [
      "Não. É possível inovar, desde que respeitando as normas legais e os princípios da administração.",
      "Sim, impede qualquer inovação ou mudança de prática administrativa.",
      "Apenas impede inovações tecnológicas, mas não de gestão."
    ],
    correctAnswer: 0,
    explanation: "O princípio da legalidade não impede a inovação, apenas exige que ela seja feita dentro dos limites legais e respeitando os demais princípios administrativos."
  },
  {
    id: 10,
    question: "Qual é a principal 'possibilidade' que o princípio da legalidade oferece?",
    options: [
      "A possibilidade de segurança jurídica, transparência e controle das ações do poder público.",
      "A possibilidade de o administrador agir sem interferência do Judiciário.",
      "A possibilidade de flexibilizar as leis conforme o interesse do governo."
    ],
    correctAnswer: 0,
    explanation: "O princípio da legalidade garante previsibilidade, segurança jurídica e possibilita o controle dos atos da administração, protegendo o cidadão."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResults) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
    } else {
      setShowResults(true);
      const score = selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
      toast.success(`Quiz finalizado! Você acertou ${score} de ${questions.length} questões.`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(selectedAnswers[currentQuestion - 1] !== -1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(Array(questions.length).fill(-1));
    setShowResults(false);
    setShowExplanation(false);
  };

  const calculateScore = () => {
    return selectedAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        
        <main className="flex-1 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 py-12">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <Brain className="h-20 w-20 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Quiz Finalizado!</h2>
                <div className="text-6xl font-bold text-primary mb-2">
                  {score}/{questions.length}
                </div>
                <p className="text-xl text-muted-foreground mb-8">
                  Você acertou {percentage.toFixed(0)}% das questões
                </p>

                <div className="space-y-4 mb-8">
                  {questions.map((question, index) => (
                    <div key={question.id} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                      <span className="font-medium">Questão {index + 1}</span>
                      {selectedAnswers[index] === question.correctAnswer ? (
                        <CheckCircle className="h-6 w-6 text-success" />
                      ) : (
                        <XCircle className="h-6 w-6 text-destructive" />
                      )}
                    </div>
                  ))}
                </div>

                <Button onClick={handleRestart} size="lg" className="gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Refazer Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== -1;
  const isCorrect = selectedAnswers[currentQuestion] === question.correctAnswer;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <Brain className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">Quiz Interativo</h1>
            <p className="text-xl text-muted-foreground">
              Princípio da Legalidade na Administração Pública
            </p>
          </div>

          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    Questão {currentQuestion + 1} de {questions.length}
                  </span>
                  <span className="text-sm font-medium text-primary">
                    {selectedAnswers.filter(a => a !== -1).length} respondidas
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 mb-6">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">{question.question}</h2>

              <div className="space-y-3 mb-6">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestion] === index;
                  const showCorrect = isAnswered && index === question.correctAnswer;
                  const showIncorrect = isAnswered && isSelected && index !== question.correctAnswer;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={isAnswered}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                        showCorrect
                          ? "border-success bg-success/10"
                          : showIncorrect
                          ? "border-destructive bg-destructive/10"
                          : isSelected
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-accent"
                      } ${isAnswered ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{option}</span>
                        {showCorrect && <CheckCircle className="h-5 w-5 text-success" />}
                        {showIncorrect && <XCircle className="h-5 w-5 text-destructive" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className={`p-4 rounded-lg mb-6 ${
                  isCorrect ? "bg-success/10 border border-success/20" : "bg-destructive/10 border border-destructive/20"
                }`}>
                  <p className="font-medium mb-2">
                    {isCorrect ? "✓ Resposta correta!" : "✗ Resposta incorreta"}
                  </p>
                  <p className="text-sm text-muted-foreground">{question.explanation}</p>
                </div>
              )}

              <div className="flex gap-3">
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  disabled={currentQuestion === 0}
                  className="flex-1"
                >
                  Anterior
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!isAnswered}
                  className="flex-1"
                >
                  {currentQuestion === questions.length - 1 ? "Finalizar" : "Próxima"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Quiz;
