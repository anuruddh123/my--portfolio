import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Check,
  Sparkles,
  Eye,
  Server,
  Lock,
  Activity,
  ArrowRight,
  Layers,
  ShieldCheck,
} from "lucide-react";

// All 4 production projects (Ordered: PulseChat 1st, E-commerce 2nd, News 3rd, AI Resume Builder 4th)
const projects = [
  {
    id: "pulsechat",
    indexNum: "01",
    title: "PulseChat — Real-Time Chat App",
    slug: "chatappsssss.netlify.app",
    description:
      "High-throughput messaging platform featuring instant bi-directional Socket.IO communication, room conversations, real-time online presence detection, and secure MongoDB chat persistence.",
    highlight: "⚡ Socket.IO • WebSockets • < 10ms Latency",
    features: [
      "Instant Bi-Directional Socket.IO Messaging",
      "Public Rooms & Private 1-on-1 Discussions",
      "Real-Time Online Presence & Typing State Indicators",
      "Persistent Chat History with MongoDB",
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "Tailwind CSS"],
    githubFrontend: "https://github.com/anuruddh123/pulsechat-frontend",
    githubBackend: "https://github.com/anuruddh123/pulsechat-backend",
    demo: "https://chatappsssss.netlify.app/",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    bgGradient: "from-emerald-500/20 via-teal-500/10 to-cyan-500/5",
    accentColor: "#10B981",
    emoji: "💬",
    badge: "Full Stack MERN",
  },
  {
    id: "ecommerce",
    indexNum: "02",
    title: "Full Stack E-commerce Platform",
    slug: "shopvistaaa.netlify.app",
    description:
      "Production-grade online shopping platform with dynamic catalog browsing, multi-item shopping cart state, token-based JWT authentication, and admin product CRUD management.",
    adminCredentials: {
      email: "admin@shopvista.com",
      password: "admin123",
    },
    highlight: "🛒 Storefront & Admin Portal • Full CRUD • Cart State",
    features: [
      "JWT Auth & Role-Protected Admin Routes",
      "Dynamic Product Catalog & Category Filtering",
      "Shopping Cart & Multi-Step Checkout Flow",
      "Dedicated Admin Product & Inventory Dashboard",
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"],
    githubFrontend: "https://github.com/anuruddh123/ecommerce",
    githubBackend: "https://github.com/anuruddh123/ecommerce",
    demo: "https://shopvistaaa.netlify.app/",
    adminDemo: "https://shopvista-admin.netlify.app/",
    gradient: "from-indigo-600 via-blue-600 to-cyan-600",
    bgGradient: "from-indigo-500/20 via-blue-500/10 to-cyan-500/5",
    accentColor: "#3B82F6",
    emoji: "🛒",
    badge: "Full Stack MERN",
  },
  {
    id: "news-alerts",
    indexNum: "03",
    title: "Real-Time News & Alert Hub",
    slug: "news-alertss.netlify.app",
    description:
      "Live news publishing hub delivering real-time breaking alerts, category feeds, instant keyword search, and administrative publishing backed by a scalable MERN API.",
    highlight: "📡 Live Broadcasting • Category Feeds • Admin",
    features: [
      "JWT User Auth & Admin Editorial Portal",
      "Real-Time Breaking Alerts & Live News Feeds",
      "Category Search & Fast Query Indexing Engine",
      "Scalable Express REST API with MongoDB Collections",
    ],
    stack: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "REST APIs"],
    githubFrontend: "https://github.com/anuruddh123/news-alerts-frontend",
    githubBackend: "https://github.com/anuruddh123/news-alerts-backend",
    demo: "https://news-alertss.netlify.app",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    bgGradient: "from-violet-500/20 via-purple-500/10 to-fuchsia-500/5",
    accentColor: "#8B5CF6",
    emoji: "🌐",
    badge: "Full Stack MERN",
  },
  {
    id: "resume-builder",
    indexNum: "04",
    title: "AI Resume Builder",
    slug: "resume-craftss.netlify.app",
    description:
      "AI-powered resume platform built with Next.js featuring customizable ATS-compliant templates, automated content generation, instant preview, and PDF export.",
    highlight: "★ Next.js • AI API • ATS Optimization",
    features: [
      "AI-Powered Content Generation & Optimization",
      "ATS-Friendly Next.js Templates & Layouts",
      "Real-Time Instant Preview & Document Editing",
      "Single-Click PDF Compilation & Export",
    ],
    stack: ["Next.js", "React.js", "Tailwind CSS", "AI API"],
    githubFrontend: "https://github.com/anuruddh123/resume_builder",
    githubBackend: null, // Frontend-only Next.js app
    demo: "https://resume-craftss.netlify.app/",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    bgGradient: "from-blue-500/20 via-indigo-500/10 to-purple-500/5",
    accentColor: "#6366F1",
    emoji: "📄",
    badge: "Next.js AI App",
  },
];

// Custom GitHub SVG Icon
function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Spatial Fan-Out Transform: Center, Left, Right, and Back
  const getCardTransform = (index) => {
    const diff = (index - currentIndex + projects.length) % projects.length;

    // Center Active Card (Front & Sharp)
    if (diff === 0) {
      return {
        zIndex: 40,
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        pointerEvents: "auto",
      };
    }

    // Right Card (Peeking to the Right)
    if (diff === 1) {
      return {
        zIndex: 30,
        x: isMobile ? 48 : 135,
        y: isMobile ? -8 : -14,
        scale: isMobile ? 0.92 : 0.92,
        opacity: 0.62,
        pointerEvents: "auto",
      };
    }

    // Left Card (Peeking to the Left)
    if (diff === projects.length - 1) {
      return {
        zIndex: 30,
        x: isMobile ? -48 : -135,
        y: isMobile ? -8 : -14,
        scale: isMobile ? 0.92 : 0.92,
        opacity: 0.62,
        pointerEvents: "auto",
      };
    }

    // Back Card (Tucked Behind Center)
    return {
      zIndex: 15,
      x: 0,
      y: isMobile ? -24 : -36,
      scale: isMobile ? 0.84 : 0.84,
      opacity: 0.25,
      pointerEvents: "auto",
    };
  };

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 relative overflow-hidden bg-slate-950 border-t border-white/10 select-none"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-2.5">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
            <span className="font-mono text-xs text-indigo-300 font-semibold tracking-wider">
              04 // FEATURED APPLICATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Things I've <span className="text-indigo-400">Built.</span>
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-400 font-sans">
            Interactive 3D showcase — explore production Full Stack & AI applications.
          </p>
        </div>

        {/* ================= 3D FAN-OUT CAROUSEL ================= */}
        {/* Center card in front, background cards peeking to the left and right */}
        <div className="relative h-[555px] sm:h-[515px] w-full flex items-center justify-center pt-6">
          {projects.map((project, index) => {
            const isFront = index === currentIndex;
            const cardStyles = getCardTransform(index);

            return (
              <motion.div
                key={project.id}
                animate={cardStyles}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  mass: 0.8,
                }}
                onClick={() => {
                  if (!isFront) setCurrentIndex(index);
                }}
                className={`absolute w-full max-w-2xl sm:max-w-3xl cursor-pointer will-change-transform ${
                  !isFront ? "select-none" : ""
                }`}
              >
                <article className="group relative flex flex-col rounded-2xl sm:rounded-3xl bg-slate-900/95 border border-white/10 hover:border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.75)] overflow-hidden transition-all duration-200">
                  {/* Frosted depth overlay for background cards */}
                  {!isFront && (
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] z-20 pointer-events-none transition-opacity duration-200" />
                  )}

                  {/* Ambient Glow */}
                  <div
                    className={`pointer-events-none absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br ${project.bgGradient}`}
                  />

                  {/* Window Chrome Header */}
                  <div className="px-4 py-2 bg-slate-950/90 border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-900 border border-white/10 text-[10px] font-mono text-slate-400">
                      <Lock className="h-2.5 w-2.5 text-emerald-400" />
                      <span className="truncate max-w-[200px]">{project.slug}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-indigo-400 font-bold">
                        {project.badge}
                      </span>
                      <span className="font-mono text-xs text-slate-500">
                        {project.indexNum}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-7 flex flex-col relative z-10">
                    {/* Top Row: Title + Status + Highlight */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-3xl filter drop-shadow-md">{project.emoji}</span>
                        <h3
                          className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent tracking-tight`}
                        >
                          {project.title}
                        </h3>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-xs font-mono self-start sm:self-auto">
                        <Activity className="h-3 w-3 text-indigo-400 flex-shrink-0" />
                        <span>{project.highlight}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mt-3">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {project.description}
                      </p>

                      {/* Admin Credentials Badge */}
                      {project.adminCredentials && (
                        <div className="mt-2.5 inline-flex flex-wrap items-center gap-x-2.5 gap-y-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/25 text-xs font-mono">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-amber-400">
                            <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                            Admin Access:
                          </span>
                          <span className="text-slate-300">
                            User ID: <span className="text-white font-bold select-all bg-black/40 px-1.5 py-0.5 rounded border border-white/10">{project.adminCredentials.email}</span>
                          </span>
                          <span className="text-amber-500/40 hidden sm:inline">•</span>
                          <span className="text-slate-300">
                            Password: <span className="text-amber-300 font-bold select-all bg-black/40 px-1.5 py-0.5 rounded border border-white/10">{project.adminCredentials.password}</span>
                          </span>
                        </div>
                      )}
                    </div>

                    {/* 4 Feature Bullets (Single Column Layout) */}
                    <div className="mt-3.5 flex flex-col space-y-2 pt-3 border-t border-white/10">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                          <div
                            className={`h-4 w-4 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}
                          >
                            <Check className="h-2.5 w-2.5 text-white" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-2.5">
                      {/* Repositories */}
                      {project.githubBackend ? (
                        <div className="grid grid-cols-2 gap-2 w-full sm:w-auto sm:flex-1">
                          <a
                            href={project.githubFrontend}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all shadow-sm"
                            title="Frontend Source Code"
                          >
                            <GithubIcon className="h-3.5 w-3.5" />
                            <span>Frontend</span>
                          </a>

                          <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all shadow-sm"
                            title="Backend Source Code"
                          >
                            <Server className="h-3.5 w-3.5 text-indigo-400" />
                            <span>Backend</span>
                          </a>
                        </div>
                      ) : (
                        <a
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full sm:w-auto sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all shadow-sm"
                          title="Source Code (GitHub)"
                        >
                          <GithubIcon className="h-4 w-4" />
                          <span>Source Code (GitHub)</span>
                        </a>
                      )}

                      {/* Admin Panel Link (if available) */}
                      {project.adminDemo && (
                        <a
                          href={project.adminDemo}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 hover:text-amber-200 text-xs font-mono font-semibold shadow-sm hover:scale-[1.02] transition-all"
                          title={
                            project.adminCredentials
                              ? `Admin Dashboard (ID: ${project.adminCredentials.email} | PW: ${project.adminCredentials.password})`
                              : "Admin Dashboard Portal"
                          }
                        >
                          <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
                          <span>Admin Panel</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}

                      {/* Live Demo Trigger Button */}
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-full sm:w-auto sm:min-w-[190px] inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-xs sm:text-sm font-bold shadow-lg hover:brightness-110 hover:scale-[1.02] transition-all`}
                      >
                        <Eye className="h-4 w-4" />
                        <span>Launch Live Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </article>
              </motion.div>
            );
          })}
        </div>

        {/* ================= STACK NAVIGATION CONTROLS ================= */}
        {/* Next & Previous Buttons + Progress Dots */}
        <div className="mt-4 flex items-center justify-between gap-4 max-w-2xl sm:max-w-3xl mx-auto pt-2">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-mono text-xs font-semibold shadow-lg transition-all active:scale-95"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </button>

          {/* Center Indicator Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
            <span className="font-mono text-xs text-slate-400 ml-2">
              0{currentIndex + 1} / 0{projects.length}
            </span>
          </div>

          {/* Next Button (Highlighted) */}
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110 text-white font-mono text-xs font-bold shadow-lg shadow-indigo-500/25 transition-all active:scale-95"
          >
            <span>Next Project</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* ================= SUBTLE GITHUB FOOTER ================= */}
        <div className="mt-8 text-center">
          <a
            href="https://github.com/anuruddh123"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-indigo-300 transition-colors"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>Explore all repositories & codebases on GitHub (anuruddh123) ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;