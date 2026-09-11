import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Terminal,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  Layers,
  Sparkles,
  MapPin,
  ArrowUpRight,
  Cpu,
  Code2,
  Database,
  Lock,
  Globe,
} from "lucide-react";

const education = {
  school: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
  degree: "B.Tech in Computer Science & Engineering",
  cgpa: "CGPA: 8.1 / 10",
  duration: "Sep. 2022 – June 2026",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java)",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
  ],
};

const training = {
  role: "MERN Stack Trainee",
  org: "GUVI (IIT-Madras Incubated)",
  duration: "7 Months Intensive Full-Stack Program",
  desc: "Completed end-to-end full stack training covering scalable MERN architecture, token authentication (JWT/RBAC), API optimization, and AI tools integration.",
  credentialId: "3dTyYJqGNPLmxRgQ",
  verifyUrl: "https://www.guvi.in/certificate?id=3dTyYJqGNPLmxRgQ",
};

const orbitingDataPoints = [
  { id: "fullstack", label: "FULL STACK", info: "End-to-end web systems architecture from frontend state to database schemas.", color: "#38bdf8" },
  { id: "mern", label: "MERN", info: "MongoDB, Express.js, React.js, and Node.js production ecosystem.", color: "#818cf8" },
  { id: "js", label: "JAVASCRIPT", info: "ES6+, asynchronous event loop, promises, closures, and modular architecture.", color: "#facc15" },
  { id: "rest", label: "REST APIs", info: "Semantic HTTP endpoints, idempotent methods, and clean error handling contracts.", color: "#34d399" },
  { id: "jwt", label: "JWT AUTH", info: "Stateless HMAC-SHA256 tokens and role-based route access guards (RBAC).", color: "#f472b6" },
  { id: "mongodb", label: "MONGODB", info: "Normalized & denormalized NoSQL schema design and aggregation pipelines.", color: "#4ade80" },
  { id: "react", label: "REACT 18", info: "Single-page application state management, component lifecycles, and custom hooks.", color: "#60a5fa" },
];

export default function About() {
  const [activeDataPoint, setActiveDataPoint] = useState(orbitingDataPoints[0]);
  const [copiedId, setCopiedId] = useState(false);

  const copyCredentialId = () => {
    navigator.clipboard.writeText(training.credentialId);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2200);
  };

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-[#02040a] via-[#050b18] to-[#02040a] text-white select-none"
    >
      {/* Background Subtle Blueprint Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-digital-system-grid opacity-40" />
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-0 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10 space-y-20">
        
        {/* =========================================================
            SECTION HEADER
            ========================================================= */}
        <div className="text-left space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>01 // ENGINEERING IDENTITY • PROFILE INTERFACE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase">
            The engineer behind{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              the system.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Move around the central identity module to inspect technical capabilities, and scroll down to follow the verified engineering trajectory.
          </p>
        </div>

        {/* =========================================================
            FUTURISTIC PROFILE IDENTITY MODULE (Orbiting Data Points)
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Central Module with Orbiting Data Nodes */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-950/80 border border-cyan-500/30 shadow-2xl backdrop-blur-xl relative">
            
            {/* Center Core Emblem */}
            <div className="relative h-44 w-44 rounded-full border border-cyan-400/40 bg-slate-900/90 flex flex-col items-center justify-center text-center p-4 shadow-[0_0_40px_rgba(6,182,212,0.25)] my-6">
              <div className="h-10 w-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-2">
                <Code2 className="h-5 w-5" />
              </div>
              <p className="font-bold text-white text-xs leading-tight">ANURUDDH TIWARI</p>
              <p className="font-mono text-[9.5px] text-cyan-400 mt-0.5">FULL-STACK CORE</p>
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Orbiting Satellite Data Points */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-xl">
              {orbitingDataPoints.map((point) => {
                const isSelected = activeDataPoint.id === point.id;
                return (
                  <button
                    key={point.id}
                    onClick={() => setActiveDataPoint(point)}
                    onMouseEnter={() => setActiveDataPoint(point)}
                    data-cursor-text="INSPECT"
                    className={`px-3.5 py-1.5 rounded-full font-mono text-xs font-bold transition-all border ${
                      isSelected
                        ? "bg-cyan-400 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-105"
                        : "bg-slate-900/80 text-slate-300 border-white/15 hover:border-cyan-400/50 hover:text-white"
                    }`}
                  >
                    {point.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Insight Display for the Selected Data Point */}
          <div className="lg:col-span-5 text-left">
            <div className="p-7 rounded-3xl bg-slate-950/90 border border-white/15 shadow-xl backdrop-blur-xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-slate-400">
                <span className="text-cyan-400 font-bold">NODE TELEMETRY:</span>
                <span>STATUS: OPERATIONAL</span>
              </div>

              <h3 className="text-2xl font-black text-white" style={{ color: activeDataPoint.color }}>
                {activeDataPoint.label}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {activeDataPoint.info}
              </p>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Domain: <strong>Production Systems</strong></span>
                <span className="text-emerald-400 font-bold">100% Verified</span>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================
            VERTICAL PHYSICAL PROGRESS TIMELINE (Progress travels physically)
            ========================================================= */}
        <div className="pt-10 text-left space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs text-slate-400">
            <span className="text-cyan-400 font-bold uppercase tracking-wider">
              VERIFIED ENGINEERING TRAJECTORY
            </span>
            <span>2022 — 2026 TIMELINE</span>
          </div>

          {/* Traveling Vertical Timeline Track */}
          <div className="relative pl-6 sm:pl-10 space-y-12">
            {/* The physical glowing line */}
            <div className="absolute top-2 bottom-2 left-2 sm:left-3 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-emerald-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />

            {/* Stage 1: Education (AKTU) */}
            <div className="relative space-y-2 group">
              <div className="absolute -left-6 sm:-left-10 top-1 h-3.5 w-3.5 rounded-full bg-cyan-400 border-2 border-slate-950 shadow-[0_0_10px_rgba(6,182,212,1)]" />
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="text-cyan-400 font-bold">[01] EDUCATION</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">{education.duration}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold">
                  {education.cgpa}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                {education.degree}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono">{education.school}</p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {education.coursework.map((c) => (
                  <span key={c} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px]">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Stage 2: Specialized Full-Stack Training (GUVI) */}
            <div className="relative space-y-2 group">
              <div className="absolute -left-6 sm:-left-10 top-1 h-3.5 w-3.5 rounded-full bg-indigo-400 border-2 border-slate-950 shadow-[0_0_10px_rgba(129,140,248,1)]" />
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="text-indigo-400 font-bold">[02] INTENSIVE BOOTCAMP</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">{training.duration}</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold">
                  OFFICIALLY VERIFIED
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                {training.role} • {training.org}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">{training.desc}</p>
              
              <div className="pt-1 flex items-center gap-4 text-xs font-mono">
                <button
                  onClick={copyCredentialId}
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {copiedId ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">ID Copied ({training.credentialId})</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy ID: {training.credentialId}</span>
                    </>
                  )}
                </button>

                <a
                  href={training.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-text="VERIFY ↗"
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                >
                  <span>Official Verification</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Stage 3: Full-Stack Project Engineering */}
            <div className="relative space-y-2 group">
              <div className="absolute -left-6 sm:-left-10 top-1 h-3.5 w-3.5 rounded-full bg-emerald-400 border-2 border-slate-950 shadow-[0_0_10px_rgba(52,211,153,1)]" />
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
                <span className="text-emerald-400 font-bold">[03] PRODUCTION PRACTICE</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">4+ Live MERN Applications</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                Full-Stack Architecture & Live Deployments
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                Architecting end-to-end web applications with stateless authentication (JWT + RBAC), real-time WebSockets (Socket.IO), scalable MongoDB database schemas, and clean responsive interfaces.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}