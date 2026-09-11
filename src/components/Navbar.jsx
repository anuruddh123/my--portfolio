import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Radio, Shield, Terminal } from "lucide-react";

const links = [
  { name: "Home", href: "#home", num: "00", color: "#38bdf8" },
  { name: "About", href: "#about", num: "01", color: "#60a5fa" },
  { name: "Skills", href: "#skills", num: "02", color: "#a855f7" },
  { name: "Projects", href: "#projects", num: "03", color: "#06b6d4" },
  { name: "Certifications", href: "#certifications", num: "04", color: "#f59e0b" },
  { name: "Contact", href: "#contact", num: "05", color: "#f43f5e" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((l) => l.href.substring(1));
      const scrollPos = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const activeLink = links.find((l) => l.href.substring(1) === activeSection) || links[0];

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 flex justify-center pointer-events-none select-none">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto max-w-5xl w-full rounded-full px-4 sm:px-6 flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? "h-14 bg-slate-950/90 border border-white/15 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.85)]"
            : "h-16 bg-slate-950/65 border border-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        }`}
        style={{
          boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${activeLink.color}15`,
        }}
      >
        {/* OPERATING SYSTEM DEVELOPER MARK */}
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="flex items-center gap-2.5 group"
        >
          <div className="h-8 w-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <span className="font-mono text-xs font-bold">&lt;/&gt;</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono font-black tracking-tight text-white text-sm sm:text-base leading-none">
              Anuruddh<span className="text-cyan-400">.dev</span>
            </span>
            <span className="font-mono text-[9px] text-slate-400 tracking-wider flex items-center gap-1 mt-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              OS v2.6 • SYS.ON
            </span>
          </div>
        </a>

        {/* DESKTOP OS CONTROL SHELL NAV */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-1.5 bg-slate-900/70 border border-white/5 rounded-full p-1">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "text-white font-bold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavCapsule"
                    className="absolute inset-0 rounded-full border shadow-sm"
                    style={{
                      backgroundColor: `${link.color}20`,
                      borderColor: `${link.color}60`,
                      boxShadow: `0 0 15px ${link.color}35`,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}
                <span
                  className="relative z-10 text-[9.5px] font-normal"
                  style={{ color: isActive ? link.color : "rgba(148, 163, 184, 0.7)" }}
                >
                  {link.num}
                </span>
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* RIGHT ACTION: HIRE ME */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, "#contact")}
            data-cursor-text="CONNECT"
            className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 shadow-md shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all group"
          >
            <span>Hire Me</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </header>
  );
}