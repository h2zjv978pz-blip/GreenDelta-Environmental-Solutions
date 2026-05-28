import { getContent } from "@/lib/content";
import Navbar   from "@/components/Navbar";
import Hero     from "@/components/Hero";
import About    from "@/components/About";
import Services from "@/components/Services";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import WhyUs   from "@/components/WhyUs";
import Contact  from "@/components/Contact";
import Footer   from "@/components/Footer";

export const dynamic = "force-dynamic";

export default function Home() {
  const content = getContent();
  return (
    <>
      <Navbar />
      <main>
        <Hero     data={content.hero} />
        <About    data={content.about} />
        <Services data={content.services} />
        <Research data={content.research} />
        <Projects data={content.projects} />
        <WhyUs    data={content.whyUs} />
        <Contact  data={content.contact} />
      </main>
      <Footer />
    </>
  );
}
