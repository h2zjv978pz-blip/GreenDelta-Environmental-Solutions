import Navbar    from "@/components/Navbar";
import Hero      from "@/components/Hero";
import About     from "@/components/About";
import Services  from "@/components/Services";
import Research  from "@/components/Research";
import Projects  from "@/components/Projects";
import WhyUs     from "@/components/WhyUs";
import Contact   from "@/components/Contact";
import Footer    from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Research />
        <Projects />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
