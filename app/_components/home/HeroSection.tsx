import { Button } from "@/app/_components/ui/button";
import heroImage from "@/public/hero-nursing.jpg";
import Image from "next/image"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Estudantes de enfermagem UNIENF"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              UNIENF
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light">
              Seu futuro na enfermagem começa aqui na Região dos Lagos.
            </p>
          </div>

          {/* Right Column */}
          <div className="animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <p className="text-white text-lg leading-relaxed mb-6">
                Formação completa com foco em prática humanizada, tecnologia de
                ponta e os melhores professores da região. Prepare-se para uma
                carreira de sucesso na área da saúde.
              </p>
              <Button
                
                size="lg"
                onClick={() => scrollToSection("courses")}
              >
                Conheça os Cursos
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};
