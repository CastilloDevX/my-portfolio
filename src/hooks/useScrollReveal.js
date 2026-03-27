import { useEffect, useRef, useState } from "react";

export default function useScrollReveal({
  once = true,
  threshold = 0.18,
  rootMargin = "0px 0px -12% 0px",
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  return { ref, isVisible };
}
