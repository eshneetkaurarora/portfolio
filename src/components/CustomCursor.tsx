import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 25, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 25, stiffness: 400, mass: 0.4 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
      if (!visible) setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("[data-cursor='hover']"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [visible, x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-100 hidden rounded-full mix-blend-difference md:block"
      style={{
        x: springX,
        y: springY,
        width: 12,
        height: 12,
        backgroundColor: "#fff",
        opacity: visible ? 1 : 0,
      }}
      animate={{ scale: hovering ? 3.2 : 1 }}
      transition={{ scale: { type: "spring", damping: 20, stiffness: 300 } }}
    />
  );
}
