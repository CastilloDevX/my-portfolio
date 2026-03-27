import GlowOrb from "../components/common/GlowOrb.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PageSection from "../components/layout/PageSection.jsx";
import ScrollReveal from "../components/motion/ScrollReveal.jsx";
import { aboutContent } from "../data/portfolio.js";

export default function AboutSection() {
  return (
    <PageSection id="about">
      <div className="relative mx-auto max-w-6xl">
        <GlowOrb
          color="purple"
          position="left-1/2 top-1/2"
          translateX="-92%"
          translateY="-18%"
          className="scale-[0.85] opacity-90"
        />
        <GlowOrb
          color="blue"
          position="left-1/2 top-1/2"
          translateX="-8%"
          translateY="-4%"
          className="scale-[0.72] opacity-75"
        />
        <SectionTitle>Sobre mí</SectionTitle>

        <ScrollReveal
          as="p"
          variant="card"
          className="mx-auto max-w-5xl text-center text-lg leading-loose text-white/80 lg:text-2xl"
        >
          {aboutContent}
        </ScrollReveal>
      </div>
    </PageSection>
  );
}
