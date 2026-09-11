import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Code2 } from "lucide-react";

export default function BuildingIntro({ onEnter }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  const handleEnter = () => {
    if (isZooming) return;
    setIsZooming(true);
    setTimeout(() => {
      onEnter();
    }, 950);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        handleEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZooming]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#05070c] text-white flex items-center justify-center overflow-hidden select-none touch-manipulation">
      
      {/* Top Bar with Skip Action */}
      <div className="absolute top-4 sm:top-6 left-0 right-0 z-30 px-4 sm:px-10 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <span className="font-mono text-[11px] sm:text-xs font-bold">&lt;/&gt;</span>
          </div>
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-slate-300">
            Anuruddh Tiwari
          </span>
        </div>

        <button
          onClick={handleEnter}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono bg-white/10 hover:bg-white/20 active:bg-white/30 border border-white/15 text-slate-200 transition-all hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md"
        >
          <span>Skip</span>
          <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </button>
      </div>

      {/* Main Perspective Building Container - Hardware Accelerated Zoom */}
      <motion.div
        className="relative h-[100dvh] w-auto aspect-[460/1024] max-w-full flex items-center justify-center"
        style={{
          transformOrigin: "38.6% 45.1%", // Exact coordinates of the glowing window
          willChange: "transform, opacity",
        }}
        animate={
          isZooming
            ? {
                scale: 22,
                opacity: 0,
                transition: {
                  duration: 0.95,
                  ease: [0.16, 1, 0.3, 1], // Buttery smooth deceleration curve
                },
              }
            : {
                scale: 1,
                opacity: 1,
              }
        }
      >
        {/* The Exact Skyscraper Facade Reference Photo */}
        <img
          src="/building_intro.png"
          alt="Night Skyscraper Facade"
          className="w-full h-full object-cover pointer-events-none drop-shadow-2xl"
        />

        {/* Ambient Dark Vignette Edge Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05070c] via-transparent to-[#05070c]/70 pointer-events-none" />

        {/* ============================================================
            INTERACTIVE GLOWING WINDOW: Exactly at (34.78%, 43.06%)
            ============================================================ */}
        <div
          style={{
            left: "34.78%",
            top: "43.06%",
            width: "7.6%",
            height: "4.1%",
          }}
          className="absolute z-20 cursor-pointer group before:absolute before:-inset-6 before:content-['']"
          onClick={handleEnter}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          title="Click to enter portfolio"
        >
          {/* Pulsing Warm Golden Aura */}
          <motion.div
            animate={{
              opacity: [0.6, 0.95, 0.6],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-2.5 rounded bg-amber-400/35 blur-md pointer-events-none"
          />

          {/* Golden Interior Light Wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff2a8] via-[#f59e0b] to-[#d97706] rounded-sm opacity-90 group-hover:opacity-100 shadow-[0_0_25px_rgba(245,158,11,0.9),0_0_50px_rgba(251,191,36,0.6)] transition-all duration-300" />

          {/* Window Center Vertical Mullion Divider */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-slate-950/60 z-10" />

          {/* Subtle Silhouette of Developer Working at Desk */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-3 bg-slate-950/80 rounded-t-sm z-10 opacity-75" />

          {/* CS STUDENT FLOATING BADGE (Directly on / above glowing window) */}
          <motion.div
            initial={{ opacity: 0.95, y: 0 }}
            animate={{
              y: isHovered ? -3 : 0,
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 pointer-events-none"
          >
            <div className="px-2 py-0.5 rounded-full bg-slate-950/95 border border-amber-400 text-amber-300 font-mono text-[9px] sm:text-[10px] font-bold shadow-[0_0_15px_rgba(245,158,11,0.7)] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              <span>cs student</span>
            </div>
          </motion.div>

          {/* Interactive Click Ripple Indicator */}
          <motion.div
            animate={{
              scale: [1, 1.8],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute inset-0 rounded border-2 border-amber-300 pointer-events-none"
          />
        </div>
      </motion.div>

      {/* Bottom Cinematic Atmosphere & Instruction */}
      <div className="absolute bottom-5 sm:bottom-8 left-0 right-0 z-30 px-4 text-center pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto flex flex-col items-center gap-2.5 sm:gap-3"
        >
          <p className="text-xs sm:text-sm text-slate-400 font-light tracking-wide px-2">
            While the whole city sleeps, one light is still on.
          </p>

          <button
            onClick={handleEnter}
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 active:bg-amber-500/35 border border-amber-500/40 text-amber-300 font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:shadow-[0_0_35px_rgba(245,158,11,0.4)] hover:scale-105 active:scale-95 touch-manipulation"
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="hidden sm:inline">Click Window or Press Enter</span>
            <span className="sm:hidden">Tap Window to Enter</span>
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* In-Zoom Warm Light Wash Overlay (Zero GPU strain, pure opacity transition) */}
      {isZooming && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-t from-[#05070c] via-amber-500/25 to-[#030712] pointer-events-none"
        />
      )}
    </div>
  );
}

