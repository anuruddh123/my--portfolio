import { useState } from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Wrench,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
} from "lucide-react";

const categories = [
  {
    name: "Frontend Development",
    icon: Monitor,
    description:
      "Crafting modern, responsive and interactive user interfaces with performance and accessibility in mind.",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    level: "Advanced",
  },
  {
    name: "Backend Development",
    icon: Server,
    description:
      "Building scalable APIs, authentication systems and database architectures for full‑stack applications.",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "Mongoose",
    ],
    level: "Intermediate",
  },
  {
    name: "Developer Tools",
    icon: Wrench,
    description:
      "Using modern tools and workflows to improve development speed, code quality and collaboration.",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Vercel",
      "Netlify",
    ],
    level: "Advanced",
  },
];

export default function Skills() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % categories.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );

  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Header */}
        <div className="max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 font-mono text-sm text-indigo-400">
            <Sparkles size={15} />
            02. Skills
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Technical Expertise
          </h2>

          <p className="mt-6 text-slate-400 leading-7">
            A strong foundation in modern web technologies that enables me to
            design, develop and deploy full‑stack applications with clean UI,
            optimized backend logic and scalable architecture.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-20 flex items-center justify-center h-[520px] md:h-[480px]">

          {categories.map((cat, i) => {
            const Icon = cat.icon;

            const offset =
              (i - index + categories.length) %
              categories.length;

            let position = offset;
            if (offset > categories.length / 2)
              position = offset - categories.length;

            return (
              <motion.div
                key={cat.name}
                animate={{
                  x:
                    window.innerWidth < 768
                      ? position * 40
                      : position * 320,
                  scale: position === 0 ? 1 : 0.85,
                  rotate: position === 0 ? 0 : position * 8,
                  zIndex: position === 0 ? 20 : 10,
                  opacity: Math.abs(position) > 2 ? 0 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className={`absolute w-[90%] md:w-[420px] rounded-3xl p-8 border transition-all duration-500
                ${
                  position === 0
                    ? "border-indigo-500/40 bg-gradient-to-br from-white/[0.06] to-white/[0.02] shadow-[0_0_60px_rgba(99,102,241,0.25)]"
                    : "border-white/10 bg-white/[0.03]"
                }
                backdrop-blur-xl`}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-lg">
                    <Icon size={26} />
                  </div>

                  <div className="text-left">
                    <h3 className="text-xl font-semibold">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-indigo-400 font-mono">
                      {cat.level}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-slate-400 text-sm leading-6 text-left">
                  {cat.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition"
                    >
                      <CheckCircle2
                        size={12}
                        className="text-indigo-400"
                      />
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Bottom Decorative Line */}
                <div className="mt-8 h-1 w-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
              </motion.div>
            );
          })}

          {/* Buttons */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-0 z-30 p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-2 md:right-0 z-30 p-3 rounded-full bg-white/5 hover:bg-indigo-500/20 transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}