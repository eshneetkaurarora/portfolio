import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const hoveringRef = useRef(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
    };

    const over = (e: MouseEvent) => {
      const next = !!(e.target as HTMLElement).closest("[data-cursor='hover']");
      if (next !== hoveringRef.current) {
        hoveringRef.current = next;
        setHovering(next);
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-100 hidden rounded-full mix-blend-difference md:block"
      style={{
        x,
        y,
        width: 12,
        height: 12,
        backgroundColor: "#fff",
        opacity: visible ? 1 : 0,
        willChange: "transform",
      }}
      animate={{ scale: hovering ? 3.2 : 1 }}
      transition={{ scale: { duration: 0.18, ease: "easeOut" } }}
    />
  );
}
