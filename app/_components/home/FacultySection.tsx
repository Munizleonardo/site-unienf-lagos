import { Card, CardContent } from "@/app/_components/ui/card";
import professor1 from "@/public/professor1.png";
import professor2 from "@/public/professor2.png";
import Image from "next/image"

const faculty = [
  {
    name: "Dra. Lima Cavalcanti",
    specialty: "Dentista, Especialista em Primeiros Socorros",
    image: professor2,
  },
  {
    name: "Dr. Nikollas Beirão",
    specialty: "Especialista em Instrumentação Cirúrgica",
    image: professor1,
  },
];

export default function FacultySection() {
  return (
    <section id="faculty" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Conheça Nossos Professores
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes e dedicados à sua formação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {faculty.map((prof, index) => (
            <Card
              key={index}
              className="text-center overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                  <Image
                    src={prof.image}
                    alt={prof.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {prof.name}
                </h3>
                <p className="text-muted-foreground">{prof.specialty}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
