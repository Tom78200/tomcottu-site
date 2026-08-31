import { Navbar } from "@/components/Navbar";
import { HeroMainframe } from "@/components/HeroMainframe";
import { VideoSection } from "@/components/VideoSection";
import { AgentExamples } from "@/components/AgentExamples";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { ProofSection } from "@/components/ProofSection";
import { OffersSection } from "@/components/OffersSection";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        <HeroMainframe />
        <VideoSection />
        <AgentExamples />
        <Services />
        <HowItWorks />
        <ProofSection />
        <OffersSection />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
