import GlowOrb from "../components/common/GlowOrb.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PageSection from "../components/layout/PageSection.jsx";
import ScrollReveal from "../components/motion/ScrollReveal.jsx";
import { contactContent } from "../data/portfolio.js";

export default function ContactSection() {
  return (
    <PageSection id="contact" className="pb-20">
      <div className="relative mx-auto max-w-3xl text-center">
        <GlowOrb
          color="purple"
          position="left-1/2 top-1/2"
          translateX="-84%"
          translateY="-34%"
          className="scale-[0.82] opacity-85"
        />
        <GlowOrb
          color="blue"
          position="left-1/2 top-1/2"
          translateX="8%"
          translateY="-8%"
          className="scale-[0.64] opacity-65"
        />
        <SectionTitle>Contacto</SectionTitle>

        <ScrollReveal
          as="p"
          variant="card"
          className="mb-6 text-xl font-medium leading-9 text-white/80 sm:text-2xl"
        >
          {contactContent.message}
        </ScrollReveal>

        <ScrollReveal as="div" variant="media-right" delay={120}>
          <a
            href={`mailto:${contactContent.email}`}
            className="inline-flex text-xl font-bold underline decoration-white/40 underline-offset-8 transition duration-300 hover:scale-105 hover:decoration-white sm:text-2xl"
          >
            {contactContent.email}
          </a>
        </ScrollReveal>
      </div>
    </PageSection>
  );
}
