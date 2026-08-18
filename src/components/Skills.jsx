import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Server,
  Wrench,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Code2,
  Zap,
  Star,
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
    color: "from-indigo-500 to-purple-500",
    glow: "shadow-[0_0_80px_rgba(99,102,241,0.4)]",
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
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-[0_0_80px_rgba(6,182,212,0.4)]",
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
    color: "from-violet-500 to-pink-500",
    glow: "shadow-[0_0_80px_rgba(139,92,246,0.4)]",
  },
];

const FloatingParticle = ({ delay }) => (
  <motion.div
    className="absolute w-1 h-1 bg-indigo-400 rounded-full"
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0, 1, 0],
      y: [-20, -100],
      x: [0, Math.random() * 40 - 20],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay: delay,
      ease: "easeOut",
    }}
  />
);

export default function Skills() {
  const [index, setIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const next = () => {
    setIsAutoPlay(false);
    setIndex((prev) => (prev + 1) % categories.length);
  };

  const prev = () => {
    setIsAutoPlay(false);
    setIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const goToSlide = (i) => {
    setIsAutoPlay(false);
    setIndex(i);
  };

  return (
    <section id="skills" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Ambient Glows */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-indigo-600/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Header with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 font-mono text-sm text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20"
          >
            <Sparkles size={15} className="animate-pulse" />
            02. Skills & Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent"
          >
            Technical Expertise
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 flex items-center justify-center gap-2"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-1.5 h-1.5 rounded-full bg-indigo-400"
              />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-slate-400 leading-7"
          >
            A strong foundation in modern web technologies that enables me to
            design, develop and deploy full‑stack applications with clean UI,
            optimized backend logic and scalable architecture.
          </motion.p>
        </motion.div>

        {/* Enhanced 3D Carousel */}
        <div className="relative mt-20 flex items-center justify-center min-h-[580px] md:min-h-[520px]">
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                <FloatingParticle delay={i * 0.5} />
              </div>
            ))}
          </div>

          {categories.map((cat, i) => {
            const Icon = cat.icon;

            const offset = (i - index + categories.length) % categories.length;
            let position = offset;
            if (offset > categories.length / 2)
              position = offset - categories.length;

            const isActive = position === 0;

            return (
              <motion.div
                key={cat.name}
                animate={{
                  x: window.innerWidth < 768 ? position * 50 : position * 360,
                  scale: isActive ? 1 : 0.8,
                  rotateY: position * 15,
                  zIndex: isActive ? 30 : 10 - Math.abs(position),
                  opacity: Math.abs(position) > 1 ? 0.3 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                }}
                className={`absolute w-[92%] md:w-[440px] rounded-3xl p-8 border transition-all duration-700 cursor-pointer
                ${
                  isActive
                    ? `border-indigo-500/50 bg-gradient-to-br from-white/[0.08] to-white/[0.02] ${cat.glow}`
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }
                backdrop-blur-xl`}
                onClick={() => !isActive && goToSlide(i)}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Skill Level Badge */}
                <div className="absolute -top-3 -right-3">
                  <motion.div
                    animate={isActive ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${cat.color} text-white shadow-lg flex items-center gap-1`}
                  >
                    <Star size={12} fill="currentColor" />
                    {cat.level}
                  </motion.div>
                </div>

                {/* Icon + Title */}
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={isActive ? { rotate: [0, 360] } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center shadow-2xl relative`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent" />
                    <Icon size={28} className="relative z-10" />
                  </motion.div>

                  <div className="text-left">
                    <h3 className="text-xl font-bold">{cat.name}</h3>
                    <span className="text-xs text-indigo-400 font-mono flex items-center gap-1 mt-1">
                      <Zap size={10} />
                      Specialized Track
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-6 text-slate-400 text-sm leading-6 text-left">
                  {cat.description}
                </p>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {cat.skills.map((skill, idx) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isActive
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0.7, scale: 0.95 }
                      }
                      transition={{ delay: idx * 0.1 }}
                      className="group relative flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 via-indigo-500/20 to-indigo-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <CheckCircle2 size={12} className="text-indigo-400 relative z-10" />
                      <span className="relative z-10 font-medium">{skill}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Progress Bar */}
                <div className="mt-8 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isActive ? { width: "100%" } : { width: "30%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-1.5 bg-gradient-to-r ${cat.color} rounded-full relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                  </motion.div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-indigo-500/20 rounded-tr-2xl" />
                <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-indigo-500/20 rounded-bl-2xl" />
              </motion.div>
            );
          })}

          {/* Navigation Buttons - Enhanced */}
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            className="absolute left-2 md:left-4 z-40 p-4 rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/30 hover:from-indigo-600/50 hover:to-purple-600/50 backdrop-blur-xl border border-white/10 transition-all shadow-2xl group"
          >
            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className="absolute right-2 md:right-4 z-40 p-4 rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/30 hover:from-indigo-600/50 hover:to-purple-600/50 backdrop-blur-xl border border-white/10 transition-all shadow-2xl group"
          >
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {categories.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => goToSlide(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`relative h-2 rounded-full transition-all duration-500 ${
                i === index ? "w-12 bg-gradient-to-r from-indigo-500 to-purple-500" : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            >
              {i === index && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                  style={{ boxShadow: "0 0 20px rgba(99,102,241,0.6)" }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Auto-play Toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-slate-400 transition-all"
        >
          <motion.div
            animate={{ rotate: isAutoPlay ? 360 : 0 }}
            transition={{ duration: 2, repeat: isAutoPlay ? Infinity : 0, ease: "linear" }}
          >
            <Code2 size={16} />
          </motion.div>
          {isAutoPlay ? "Auto-play On" : "Auto-play Off"}
        </motion.button>
      </div>
    </section>
  );
}