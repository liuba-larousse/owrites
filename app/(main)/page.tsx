import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import VideoSection from "@/components/sections/VideoSection";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CTABand from "@/components/sections/CTABand";
import Process from "@/components/sections/Process";
import Audience from "@/components/sections/Audience";
import Why from "@/components/sections/Why";
import Compare from "@/components/sections/Compare";
import Results from "@/components/sections/Results";
import CaseStudy from "@/components/sections/CaseStudy";
import Testimonials from "@/components/sections/Testimonials";
import Manifesto from "@/components/sections/Manifesto";
import BlogPreview from "@/components/sections/BlogPreview";
import FAQ from "@/components/sections/FAQ";
import CalendlySection from "@/components/sections/CalendlySection";
import CTAFinal from "@/components/sections/CTAFinal";
import StickyCTA from "@/components/sections/StickyCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      {/* <VideoSection /> */}
      <About />
      <Services />
      <CTABand
        message="Prêt à générer des leads qualifiés via LinkedIn ?"
        sub="Réservez un appel stratégique gratuit de 30 minutes. Sans engagement."
      />
      <Process />
      <Audience />
      <Why />
      <Compare />
      <Results />
      <CaseStudy />
      <Testimonials />
      <Manifesto />
      <BlogPreview />
      <FAQ />
      <CalendlySection />
      <CTAFinal />
      <StickyCTA />
    </>
  );
}
