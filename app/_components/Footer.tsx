"use client"
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    
  const whatsappNumber = "552226211627";
  const instagramHandle = "unienflagos";

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">UNIENF</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Excelência em formação de profissionais de enfermagem na Região dos
              Lagos. Transformando vidas através da educação em saúde.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>R. São João, 520 - Estação, São Pedro da Aldeia, RJ</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0" />
                <span>(22) 2621-1627</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="flex-shrink-0" />
                <span>contato@unienf.com.br</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
              <a
                href={`https://instagram.com/${instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/70">
          <p>© 2025 UNIENF. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
