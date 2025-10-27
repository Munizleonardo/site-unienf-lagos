import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import courseTechnical from "@/public/course-technical.jpg";
import courseSurgical from "@/public/course-surgical.jpg";
import Image from "next/image"

const courses = [
  {
    title: "Técnico em Enfermagem",
    description:
      "Formação completa para atuar em hospitais, clínicas e unidades de saúde. Aprenda procedimentos técnicos, cuidados ao paciente e gestão hospitalar.",
    image: courseTechnical,
  },
  {
    title: "Instrumentação Cirúrgica",
    description:
      "Especialização em procedimentos cirúrgicos, esterilização de materiais e assistência em centro cirúrgico. Prepare-se para atuar em cirurgias de alta complexidade.",
    image: courseSurgical,
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Cursos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Formações de excelência com prática intensiva e certificação reconhecida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 text-foreground/80">
                  {course.description}
                </CardDescription>
                <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  window.location.href = "https://wa.me/552226211627";
                }}
                >
                  Mais Informações
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
