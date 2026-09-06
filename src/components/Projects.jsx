import { motion } from "framer-motion";
import { ExternalLink, Check, Sparkles, Code2, Rocket, Eye } from "lucide-react";

const projects = [
  {
    title: "Full Stack E-commerce App",
    description:
      "Built a full-stack shopping platform with product management, user authentication, cart functionality, and a responsive UI using the MERN stack.",
    features: ["JWT Auth", "Admin Panel", "Responsive Design", "Product CRUD"],
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    github: "https://github.com/anuruddh123/e-commerce-frontend",
    demo: "https://try-me-frontend.netlify.app",
    gradient: "from-indigo-600 via-blue-600 to-cyan-600",
    bgGradient: "from-indigo-500/20 via-blue-500/10 to-cyan-500/5",
    emoji: "🛒",
  },
  {
    title: "Real Time News App",
    description:
      "Developed a responsive news application with real-time news fetching, category-based filtering, search functionality, and a user-friendly interface using React.js and API integration.",
    features: [
      "User Authentication",
      "Live News Fetching",
      "Category Filtering",
      "Admin News Management",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.IO",
      "API Integration",
    ],
    github: "https://github.com/anuruddh123/news-alerts-frontend",
    demo: "https://news-alertss.netlify.app",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    bgGradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/5",
    emoji: "🌐",
  },
  {
  title: "AI Resume Builder",
  description:
    "Developed a full-stack AI-powered resume builder that helps users create professional, ATS-friendly resumes with customizable templates, AI-assisted content generation, and real-time resume preview using the MERN stack.",
  features: [
    "AI-Powered Resume Content Generation",
    "ATS-Friendly Resume Builder",
    "Customizable Resume Templates",
    "Real-Time Resume Preview & Editing",
    "Resume Download as PDF",
    "User Authentication & Profile Management",
  ],
  stack: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Tailwind CSS",
    "AI API",
  ],
  github: "https://github.com/anuruddh123/resume_builder",
  demo: "https://resume-craftss.netlify.app/",
  gradient: "from-blue-600 via-indigo-600 to-purple-600",
  bgGradient: "from-blue-500/20 via-indigo-500/10 to-purple-500/5",
  emoji: "🤖",
},
];

// ✅ Custom GitHub Icon (lucide-react ka GitHub/Github import hata diya)
function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      className="group relative flex flex-col rounded-3xl bg-slate-900/95 border border-white/10 hover:border-indigo-500/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7)] overflow-hidden transition-all duration-300 will-change-transform"
    >
      {/* Gradient Border Overlay */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-3xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${project.gradient}`}
      >
        <div className="h-full w-full rounded-3xl bg-slate-900" />
      </div>

      {/* Ambient Glow */}
      <div
        className={`pointer-events-none absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      />

      {/* Header */}
      <div
        className={`relative h-48 bg-gradient-to-br ${project.bgGradient} border-b border-white/10 overflow-hidden`}
      >
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Orbs */}
        <div
          className={`pointer-events-none absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-300`}
        />
        <div
          className={`pointer-events-none absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-50 transition-opacity duration-300`}
        />

        {/* Emoji */}
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-7xl filter drop-shadow-2xl transition-transform duration-300 ease-out group-hover:scale-110">
            {project.emoji}
          </span>
        </div>

        {/* Top buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center h-10 w-10 rounded-xl bg-slate-950/90 border border-white/20 text-slate-200 hover:text-white hover:bg-slate-900 hover:scale-105 transition-all shadow-xl"
            aria-label="GitHub repo"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={`grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br ${project.gradient} text-white hover:scale-105 transition-all shadow-xl`}
            aria-label="Live demo"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Status */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Live Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 relative">
        <h3
          className={`text-xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
        >
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-slate-400 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Features */}
        <ul className="mt-5 space-y-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-xs text-slate-300"
            >
              <div
                className={`h-4 w-4 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}
              >
                <Check className="h-2.5 w-2.5 text-white" />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        {/* Stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-semibold bg-white/5 text-white/90 border border-white/10 hover:border-white/30 transition-colors`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-auto pt-6 border-t border-white/10 flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm font-medium text-slate-300 hover:text-white hover:scale-[1.02] transition-all"
          >
            <Code2 className="h-4 w-4" />
            Source Code
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all`}
          >
            <Eye className="h-4 w-4" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      {/* Background - Static GPU layers for silky smooth scrolling */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 mb-6"
          >
            <Sparkles className="h-4 w-4 text-indigo-400 animate-pulse" />
            <span className="font-mono text-sm text-indigo-300">Featured Work</span>
            <Rocket className="h-4 w-4 text-pink-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
              Things I've Built
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            Three production-ready MERN applications showcasing full-stack expertise
            — from database architecture to polished React interfaces.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 h-1 w-40 mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full"
          />
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/anuruddh123"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-2xl shadow-indigo-900/50 hover:shadow-indigo-900/70 transition-all"
          >
            <GithubIcon className="h-5 w-5" />
            View All Projects on GitHub
            <ExternalLink className="h-4 w-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;