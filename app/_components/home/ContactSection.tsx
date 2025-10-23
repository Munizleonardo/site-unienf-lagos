import { Card, CardContent } from "@/app/_components/ui/card";
import { Button } from "@/app/_components/ui/button";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";

export default function ContactSection() {
    
  const whatsappNumber = "552226211627"; // WhatsApp da UNIENF
  const instagramHandle = "unienflagos";

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagramHandle}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para responder suas dúvidas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    R. São João, 520 - Estação
                    <br />
                    São Pedro da Aldeia, RJ - CEP 28940-000
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Telefone</h3>
                  <p className="text-muted-foreground">(22) 2621-1627</p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <p className="text-muted-foreground">contato@unienf.com.br</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 pt-4">
              <Button
                variant="default"
                size="lg"
                onClick={handleWhatsAppClick}
                className="flex-1"
              >
                <Phone className="mr-2" size={20} />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleInstagramClick}
                className="flex-1"
              >
                <Instagram className="mr-2" size={20} />
                Instagram
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="animate-fade-in">
            <Card className="h-full overflow-hidden">
              <CardContent className="p-0 h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.1763739633593!2d-42.10735852469177!3d-22.832963279307094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x970fb97cc65167%3A0xfaad73cbd70fe859!2sUNIENF%20Lagos!5e0!3m2!1spt-BR!2sbr!4v1761145269171!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização UNIENF"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};