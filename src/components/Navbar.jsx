import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-slate-950/70 backdrop-blur-xl border-b border-white/10 shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/40 group-hover:scale-110 transition">
              <Terminal size={18} />
              
            </div>
            <span className="text-white font-mono font-semibold tracking-wide">
              <span className="text-indigo-400">&lt;</span>
              Anuruddh.dev
              <span className="text-indigo-400">/&gt;</span>
            </span>
          </a>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href} className="relative group">
                <a
                  href={link.href}
                  className="text-slate-300 hover:text-white transition duration-300"
                >
                  {link.name}
                </a>

                {/* HALF MOON ARC */}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-0 h-0 opacity-0 group-hover:opacity-100 group-hover:w-10 group-hover:h-5 transition-all duration-500">
                  <span className="block w-full h-full border-b-2 border-indigo-500 rounded-b-full shadow-[0_0_12px_rgba(99,102,241,0.7)]" />
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium shadow-lg hover:scale-105 transition"
          >
            Hire Me
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-80 bg-slate-950 border-l border-white/10 z-50 p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-white font-semibold text-lg">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition text-white"
                >
                  <X size={24} />
                </button>
              </div>

              <ul className="space-y-8">
                {links.map((link) => (
                  <li key={link.href} className="relative group">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-lg text-slate-300 hover:text-white transition"
                    >
                      {link.name}
                    </a>

                    {/* HALF MOON FOR MOBILE */}
                    <span className="block w-0 h-0 group-hover:w-12 group-hover:h-6 transition-all duration-500">
                      <span className="block w-full h-full border-b-2 border-indigo-500 rounded-b-full shadow-[0_0_10px_rgba(99,102,241,0.7)]" />
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-auto text-center py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg"
              >
                Hire Me
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}