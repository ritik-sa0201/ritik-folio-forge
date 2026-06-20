import { PageReveal } from "@/components/PageReveal";
import { Navbar } from "@/components/Navbar";
import { GridGuides } from "@/components/GridGuides";
import { GrainOverlay } from "@/components/GrainOverlay";
import { ScrollRail } from "@/components/ScrollRail";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <PageReveal>
      <div className="min-h-screen bg-bg text-ink overflow-x-hidden">
        <GridGuides />
        <GrainOverlay />
        <ScrollRail />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </PageReveal>
  );
}