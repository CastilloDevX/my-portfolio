import GlowOrb from "../components/common/GlowOrb.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PageSection from "../components/layout/PageSection.jsx";
import ServiceCard from "../components/cards/ServiceCard.jsx";
import Carousel from "../components/ui/Carousel.jsx";
import { services } from "../data/portfolio.js";

export default function ServicesSection() {
  return (
    <PageSection id="services">
      <div className="relative mx-auto max-w-6xl">
        <SectionTitle>Servicios</SectionTitle>

        <div className="relative">
          <GlowOrb
            color="purple"
            position="left-1/2 top-[48%]"
            translateX="-72%"
            translateY="-50%"
            className="scale-[1.02] opacity-90"
          />
          <GlowOrb
            color="blue"
            position="left-1/2 top-[52%]"
            translateX="12%"
            translateY="-42%"
            className="scale-[0.82] opacity-72"
          />

          <Carousel
            mode="single"
            autoPlay={false}
            items={services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          />
        </div>
      </div>
    </PageSection>
  );
}
