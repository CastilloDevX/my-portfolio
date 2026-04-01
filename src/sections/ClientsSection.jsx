import ClientCard from "../components/cards/ClientCard.jsx";
import GlowOrb from "../components/common/GlowOrb.jsx";
import SectionTitle from "../components/common/SectionTitle.jsx";
import PageSection from "../components/layout/PageSection.jsx";
import Carousel from "../components/ui/Carousel.jsx";
import { clients } from "../data/portfolio.js";

export default function ClientsSection() {
  return (
    <PageSection id="clients">
      <div className="relative mx-auto max-w-6xl">
        <GlowOrb
          color="blue"
          position="left-1/2 top-[58%]"
          translateX="-82%"
          translateY="-45%"
          className="scale-[0.84] opacity-90"
        />
        <GlowOrb
          color="purple"
          position="left-1/2 top-[58%]"
          translateX="10%"
          translateY="-38%"
          className="scale-[0.68] opacity-70"
        />
        <SectionTitle>Clientes</SectionTitle>

        <Carousel
          mode="single"
          autoPlay={false}
          items={clients.map((client) => (
            <ClientCard key={client.clientName} {...client} />
          ))}
        />
      </div>
    </PageSection>
  );
}
