import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Precision spring physics
  const springConfig = { damping: 26, stiffness: 380, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsEnabled(mediaQuery.matches);

    const handleMediaChange = (e) => setIsEnabled(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      const customTextEl = target.closest("[data-cursor-text]");
      const clickableEl = target.closest("a, button, [role='button'], input, textarea, select");

      if (customTextEl) {
        setCursorText(customTextEl.getAttribute("data-cursor-text") || "");
        setCursorVariant("badge");
      } else if (clickableEl) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isEnabled, isVisible]);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Precision Center Dot */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? (cursorVariant === "badge" ? 0 : 1) : 0,
        }}
      />

      {/* Dynamic Spring Ring / Contextual Badge */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none flex items-center justify-center font-mono font-bold text-center transition-colors duration-200 ${
          cursorVariant === "badge"
            ? "px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-[10px] tracking-wider shadow-[0_0_20px_rgba(6,182,212,0.6)]"
            : cursorVariant === "hover"
            ? "h-10 w-10 rounded-full border border-cyan-400/80 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.25)]"
            : "h-6 w-6 rounded-full border border-white/25 bg-white/5"
        }`}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
          scale: cursorVariant === "hover" ? 1.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 26 }}
      >
        {cursorVariant === "badge" && cursorText && (
          <span className="whitespace-nowrap">{cursorText}</span>
        )}
      </motion.div>
    </div>
  );
}
