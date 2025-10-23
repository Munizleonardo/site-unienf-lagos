"use client"
import { useState, useEffect } from "react";
import { Button } from "@/app/_components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Sobre", id: "about" },
    { label: "Cursos", id: "courses" },
    { label: "Eventos", id: "events" },
    { label: "Professores", id: "faculty" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div
          className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? "text-primary" : "text-white"
          }`}
        >
          UNIENF
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`transition-colors duration-300 hover:text-accent font-medium ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            onClick={() => scrollToSection("contact")}
          >
            Inscreva-se
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-colors ${
            isScrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background shadow-lg">
          <ul className="flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-8 py-3 text-foreground hover:bg-secondary transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="px-8 pt-4">
              <Button
                variant="default"
                className="w-full"
                onClick={() => scrollToSection("contact")}
              >
                Inscreva-se
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
