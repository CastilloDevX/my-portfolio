import { useEffect, useState } from "react";

export default function TechCarousel({ items = [], speed = 3000 }) {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  // Movimiento automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, speed);

    return () => clearInterval(interval);
  }, [total, speed]);

  return (
    <div className="relative w-full flex justify-center items-center py-10 overflow-hidden">
      <div className="relative w-full h-[140px] flex justify-center items-center perspective">
        {items.map((src, index) => {
          let offset = (index - current + total) % total;

          if (offset > total / 2) {
            offset -= total;
          }

          // Posiciones 3D — Ajusta si quieres más profundidad
          const x = offset * 150;
          const z = -Math.abs(offset) * 150;
          const scale = 1 - Math.abs(offset) * 0.15;
          const opacity = 1 - Math.abs(offset) * 0.25;

          return (
            <img
              key={index}
              src={src}
              className="w-[100px] h-[100px] absolute transition-all duration-700 ease-out"
              style={{
                transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
                opacity,
                filter: opacity < 0.4 ? "blur(4px)" : "blur(0)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
