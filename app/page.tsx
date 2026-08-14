import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-[#0a0f1f]">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />
    </div>
  );
}
