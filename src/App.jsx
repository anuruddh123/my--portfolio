import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import BuildingIntro from "./components/BuildingIntro";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import CommandDock from "./components/CommandDock";
import { Hero } from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function AppContent() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-white overflow-x-hidden">
      {/* Desktop Custom Cursor with Spring Physics & Contextual Badges */}
      <CustomCursor />

      <AnimatePresence mode="wait">
        {!hasEntered && (
          <BuildingIntro onEnter={() => setHasEntered(true)} />
        )}
      </AnimatePresence>

      {hasEntered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Navbar onReplayIntro={() => setHasEntered(false)} />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </main>

          <Footer />

          {/* Mobile Bottom Floating Command Dock */}
          <CommandDock />
        </motion.div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}