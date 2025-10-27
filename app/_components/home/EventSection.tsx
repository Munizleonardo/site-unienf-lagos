import { Card, CardContent } from "@/app/_components/ui/card";
import eventImage from "@/public/event1.png";
import eventImage2 from "@/public/event2.png";
import eventImage3 from "@/public/event3.png";
import { Calendar } from "lucide-react";
import Image from "next/image";

const events = [
  {
    title: "Palestra sobre Humanização na Saúde",
    date: "15 de Março, 2024",
    image: eventImage,
    description: "Debate sobre práticas humanizadas no cuidado ao paciente.",
  },
  {
    title: "Feira de Saúde Comunitária",
    date: "28 de Fevereiro, 2024",
    image: eventImage2,
    description: "Ação social com atendimento gratuito à comunidade local.",
  },
  {
    title: "Workshop de Primeiros Socorros",
    date: "10 de Janeiro, 2024",
    image: eventImage3,
    description: "Treinamento prático de técnicas de emergência e atendimento pré-hospitalar.",
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Eventos e Workshops
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiências práticas que complementam sua formação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-bold mb-3">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">{event.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div> 
      </div>    
      </div>
    </section>
    )
};
