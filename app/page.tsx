import About from "@/components/About";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/Contact";
import Navbar from "@/components/Navbar";
import '@fontsource/jost';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-jost">
      <Navbar />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Services />
      <Projects />
      <Timeline />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
