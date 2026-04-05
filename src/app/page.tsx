import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <Navigation />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Roadmap />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
