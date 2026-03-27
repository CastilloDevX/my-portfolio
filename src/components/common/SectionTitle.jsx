import ScrollReveal from "../motion/ScrollReveal.jsx";

export default function SectionTitle({ children, className = "" }) {
  return (
    <ScrollReveal as="h2" variant="title" className={`section-title ${className}`}>
      {children}
    </ScrollReveal>
  );
}
