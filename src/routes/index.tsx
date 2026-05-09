import { ErrorBoundary } from "solid-js";
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
import I18nErrorBanner from "~/components/I18nErrorBanner";

function SectionErrorFallback() {
  return null;
}

export default function Home() {
  return (
    <main id="main" class="bg-bg min-h-screen">
      <ScrollProgress />
      <Navbar />
      <ErrorBoundary fallback={SectionErrorFallback}><Hero /></ErrorBoundary>
      <ErrorBoundary fallback={SectionErrorFallback}><About /></ErrorBoundary>
      <ErrorBoundary fallback={SectionErrorFallback}><Stats /></ErrorBoundary>
      <ErrorBoundary fallback={SectionErrorFallback}><Skills /></ErrorBoundary>
      <ErrorBoundary fallback={SectionErrorFallback}><Experience /></ErrorBoundary>
      <ErrorBoundary fallback={SectionErrorFallback}><Projects /></ErrorBoundary>
      <ErrorBoundary fallback={SectionErrorFallback}><Contact /></ErrorBoundary>
      <Footer />
      <I18nErrorBanner />
    </main>
  );
}
