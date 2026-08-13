import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-background">
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
