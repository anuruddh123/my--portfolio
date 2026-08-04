import { motion } from "framer-motion";
import { ArrowDown, FolderGit2, Download } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

        <div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-7"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for entry-level roles
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Anuruddh Tiwari
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl sm:text-2xl font-semibold text-slate-300"
          >
            MERN Stack Developer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base text-slate-400 leading-relaxed"
          >
            Passionate Full Stack Developer skilled in building responsive and
            scalable web applications using MongoDB, Express, React, and
            Node.js. Seeking entry-level opportunities to grow and contribute.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-lg shadow-indigo-600/30 transition-colors"
            >
              <FolderGit2 className="h-4 w-4" />
              View Projects
            </a>

            <a
              href="/my_resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-sm font-semibold transition-colors"
            >
            <Download className="h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-4"
          >
            <a
              href="https://github.com/anuruddh123"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-10 w-10 rounded-lg bg-white/5 hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-indigo-300 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/anuruddh-tiwari-2842b232a"
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-10 w-10 rounded-lg bg-white/5 hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-indigo-300 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-slate-900/80">
              <span className="h-3 w-3 rounded-full bg-rose-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-slate-500">
                developer.js
              </span>
            </div>

            <pre className="p-5 font-mono text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
{`const developer = {
  name: "Anuruddh Tiwari",
  role: "MERN Stack Developer",
  stack: ["MongoDB", "Express",
          "React", "Node.js"],
  focus: "REST APIs · JWT Auth",
  learning: "Always shipping",
  openToWork: true,
};

developer.build(); // `}
            </pre>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[11px] uppercase tracking-widest">
          Scroll
        </span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </a>
    </section>
  );
}

export default Hero;