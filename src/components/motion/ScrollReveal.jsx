import useScrollReveal from "../../hooks/useScrollReveal.js";

export default function ScrollReveal({
  as: Tag = "div",
  children,
  className = "",
  variant = "text",
  delay = 0,
}) {
  const { ref, isVisible } = useScrollReveal({
    threshold: variant === "carousel" ? 0.12 : 0.18,
  });

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal scroll-reveal--${variant} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
