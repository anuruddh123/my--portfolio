import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  Compass,
  Cpu,
  Layers,
  Award,
  Radio,
  ArrowUpRight,
} from "lucide-react";

const dockItems = [
  { id: "home", label: "Home", href: "#home", icon: Terminal },
  { id: "about", label: "About", href: "#about", icon: Compass },
  { id: "skills", label: "Skills", href: "#skills", icon: Cpu },
  { id: "projects", label: "Work", href: "#projects", icon: Layers },
  { id: "certifications", label: "Vault", href: "#certifications", icon: Award },
  { id: "contact", label: "Connect", href: "#contact", icon: Radio },
];

export default function CommandDock() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = dockItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(dockItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(dockItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none md:hidden select-none">
      <div className="pointer-events-auto max-w-md w-full h-14 rounded-2xl bg-slate-950/90 border border-cyan-500/30 backdrop-blur-2xl shadow-[0_15px_35px_rgba(0,0,0,0.85)] px-3 flex items-center justify-around gap-1">
        {dockItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
                isActive ? "text-cyan-400" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeMobileDockItem"
                  className="absolute inset-0 bg-cyan-500/15 rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                />
              )}
              <Icon className="h-4 w-4" />
              <span className="text-[9px] font-mono mt-0.5 tracking-tight">{item.label}</span>
              {isActive && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,1)]" />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}

