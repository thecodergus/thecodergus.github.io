import { useI18n } from "~/stores/i18nStore";
import type { SharedData } from "~/types";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";
import About from "~/components/About";
import Stats from "~/components/Stats";
import Skills from "~/components/Skills";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
import ScrollProgress from "~/components/ScrollProgress";

export default function Home() {
  const { sharedData } = useI18n();
  const basicInfo = () => (sharedData() as SharedData | undefined)?.basic_info;

  return (
    <main id="main" class="bg-bg min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
