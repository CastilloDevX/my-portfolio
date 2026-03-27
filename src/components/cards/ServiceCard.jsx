import ScrollReveal from "../motion/ScrollReveal.jsx";
import IconCarousel from "../ui/IconCarousel.jsx";

export default function ServiceCard({ title, description, icons }) {
  return (
    <article className="relative mx-auto flex w-full max-w-[1000px] flex-col items-center text-center">
      <ScrollReveal
        as="p"
        variant="media-left"
        className="max-w-4xl text-3xl font-bold sm:text-4xl md:text-5xl"
      >
        {title}
      </ScrollReveal>

      <IconCarousel items={icons} speed={1500} />

      <ScrollReveal
        as="p"
        delay={120}
        variant="media-right"
        className="max-w-4xl text-lg leading-8 text-white/80 sm:px-10 sm:text-xl md:text-2xl"
      >
        {description}
      </ScrollReveal>
    </article>
  );
}
