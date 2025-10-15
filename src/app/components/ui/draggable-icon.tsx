// DraggableIcon: se posiciona "absolute" y calcula constraints respecto a su offsetParent (wrapper)
import { motion } from "motion/react";
import React, { useRef, useEffect, useState } from "react";

export const DraggableIcon = ({
  src,
  size = 50,
  initial = { x: 0, y: 0 },
}: {
  src: string;
  size?: number;
  initial?: { x: number; y: number }; // coordenadas LEFT / TOP dentro del wrapper
}) => {
  const iconRef = useRef<HTMLImageElement | null>(null);
  const [constraints, setConstraints] = useState<
    { left: number; top: number; right: number; bottom: number } | undefined
  >(undefined);

  useEffect(() => {
    const el = iconRef.current;
    if (!el) return;

    const calc = () => {
      // offsetParent será el ancestor posicionado (wrapper que pondremos como `relative`)
      const parent = el.offsetParent as HTMLElement | null;
      if (!parent) return;

      const pRect = parent.getBoundingClientRect();
      const iRect = el.getBoundingClientRect();

      // constraints en valores relativos al transform (x,y) actual del icono
      const left = -(iRect.left - pRect.left);
      const top = -(iRect.top - pRect.top);
      const right = Math.max(0, pRect.width - iRect.width + left);
      const bottom = Math.max(0, pRect.height - iRect.height + top);

      setConstraints({ left, top, right, bottom });
    };

    // calc al montar y al resize
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [size, initial]);

  return (
    <motion.img
      ref={iconRef}
      src={src}
      drag
      dragConstraints={constraints}
      dragMomentum={false}
      dragElastic={0.15}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="absolute z-50 cursor-grab active:cursor-grabbing select-none"
      // Usamos left/top CSS para colocar el icono *por encima* de la card
      style={{
        width: size,
        height: size,
        left: initial.x,
        top: initial.y,
        touchAction: "none", // ayuda para móviles
      }}
      alt="draggable icon"
    />
  );
};
