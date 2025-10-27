import { Card, CardContent } from "@/app/_components/ui/card";

const testimonials = [
  {
    name: "Maria Silva",
    course: "Técnico em Enfermagem - Turma 2024",
    text: "A UNIENF transformou minha vida. Os professores são excepcionais e a estrutura é de primeiro mundo. Consegui emprego antes mesmo de me formar!",
  },
  {
    name: "João Santos",
    course: "Instrumentação Cirúrgica - Turma 2023",
    text: "O curso de Instrumentação superou todas as minhas expectativas. As aulas práticas no laboratório foram essenciais para minha formação profissional.",
  },
  {
    name: "Ana Costa",
    course: "Técnico em Enfermagem - Turma 2024",
    text: "Escolher a UNIENF foi a melhor decisão da minha carreira. O foco em prática humanizada faz toda a diferença no mercado de trabalho.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O Que Nossos Alunos Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de sucesso e transformação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative bg-card hover:shadow-xl transition-all duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-10">
                <p className="text-foreground/90 mb-6 italic leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.course}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
