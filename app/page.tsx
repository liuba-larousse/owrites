import Hero from "@/components/sections/Hero";
import ProofBar from "@/components/sections/ProofBar";
import Services from "@/components/sections/Services";
import CTABand from "@/components/sections/CTABand";
import Process from "@/components/sections/Process";
import Audience from "@/components/sections/Audience";
import Compare from "@/components/sections/Compare";
import Results from "@/components/sections/Results";
import Manifesto from "@/components/sections/Manifesto";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <Services />
      <CTABand message="Prêt à générer des leads qualifiés via LinkedIn ?" />
      <Process />
      <Audience />
      <Compare />
      <Results />
      <Manifesto />
      <CTABand message="Vous voulez développer votre personal branding LinkedIn ?" />
      <FAQ />
      <CTAFinal />
    </>
  );
}
