import { createFileRoute } from "@tanstack/react-router";
import { PageReveal } from "@/components/PageReveal";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ritik Saini — Computer Engineer · AI Builder" },
      { name: "description", content: "Portfolio of Ritik Saini — Computer Engineering @ IIIT Bhubaneswar, multi-agent AI builder, LeetCode Knight, co-founder at Innoveda Solutions." },
      { property: "og:title", content: "Ritik Saini — Computer Engineer · AI Builder" },
      { property: "og:description", content: "AI systems, competitive programming, and shipped products." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <PageReveal>
      <div className="min-h-screen bg-bg text-ink overflow-x-hidden">
        <Navbar />
        <main>
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
