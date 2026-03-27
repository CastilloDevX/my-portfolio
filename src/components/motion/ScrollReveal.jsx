import { createElement } from "react";
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

  return createElement(
    Tag,
    {
      ref,
      className: `scroll-reveal scroll-reveal--${variant} ${isVisible ? "is-visible" : ""} ${className}`,
      style: { transitionDelay: `${delay}ms` },
    },
    children
  );
}
