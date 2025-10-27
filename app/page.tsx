"use client"
import Header from "@/app/_components/Header";
import HeroSection from "@/app/_components/home/HeroSection";
import CoursesSection from "@/app/_components/home/CoursesSection";
import EventsSection from "@/app/_components/home/EventSection";
import TestimonialsSection from "@/app/_components/home/TestimonialsSection";
import FacultySection from "@/app/_components/home/FacultySection";
import ContactSection from "@/app/_components/home/ContactSection";
import Footer from "@/app/_components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div id="about" className="h-0" />
        <CoursesSection />
        <EventsSection />
        <TestimonialsSection />
        <FacultySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};
