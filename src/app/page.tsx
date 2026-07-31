import { Navbar } from "@/components/Navbar";
import { HeroMainframe } from "@/components/HeroMainframe";
import { UseCases } from "@/components/UseCases";
import { AgentExamples } from "@/components/AgentExamples";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { GeoLinks } from "@/components/GeoLinks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        <HeroMainframe />
        <UseCases />
        <AgentExamples />
        <Services />
        <HowItWorks />
        <About />
        <Faq />
        <GeoLinks variant="home" />
      </main>
      <Footer />
    </>
  );
}
