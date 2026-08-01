import { Navbar } from "@/components/Navbar";
import { HeroMainframe } from "@/components/HeroMainframe";
import { AgentExamples } from "@/components/AgentExamples";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        <HeroMainframe />
        <AgentExamples />
        <Services />
        <HowItWorks />
        <About />
        <Faq />
        <section id="contact" className="mx-auto w-full max-w-3xl px-5 pb-24 pt-4 sm:px-8">
          <div className="rounded-3xl border border-border bg-background p-6 sm:p-10">
            <p className="text-[13px] font-medium uppercase tracking-[0.12em] text-muted-soft">
              Contact
            </p>
            <h2 className="mt-3 text-[28px] font-medium tracking-[-0.03em] text-foreground sm:text-[34px]">
              Discutons de ton projet
            </h2>
            <p className="mt-3 text-[15px] text-muted" style={{ lineHeight: 1.55 }}>
              Dis-moi ce que tu veux automatiser, et je te réponds sous 24h ouvrées avec une
              première piste concrète — gratuite et sans engagement.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
