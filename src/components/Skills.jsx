import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Terminal,
  Layers,
  ArrowRight,
  Database,
  Server,
  ShieldCheck,
  Radio,
  Code2,
  GitBranch,
  Sparkles,
  Palette,
  Activity,
  CheckCircle2,
  Zap,
  Gauge,
  Workflow,
  ExternalLink,
} from "lucide-react";

// Tech nodes for the Engine Circuit Schematic
const ENGINE_NODES = [
  {
    id: "js",
    name: "JavaScript (ES6+)",
    shortName: "JavaScript",
    version: "ES2024+",
    type: "CENTRAL SYSTEM KERNEL",
    layer: "Core Language",
    icon: Code2,
    accentColor: "#FACC15",
    glowColor: "rgba(250, 204, 21, 0.35)",
    x: 50,
    y: 50,
    isCenter: true,
    proficiency: 96,
    telemetry: "V8 Engine • Asynchronous Event Loop",
    purpose:
      "The foundational computational engine powering client logic, asynchronous event queues, DOM reconciliation, and high-concurrency Node.js microservices.",
    capabilities: [
      "Async/Await, Promises & Event Loop orchestration",
      "Closures, Prototypes & Functional Patterns",
      "Modern ES6+ Syntax, Modules & Destructuring",
      "DOM APIs & High-Performance Event Delegation",
    ],
    projects: ["AI Resume Builder", "Full Stack E-commerce", "Real Time News & Alert App"],
    connections: ["react", "node", "express", "mongo", "jwt", "socket", "tailwind", "git", "ai"],
  },
  {
    id: "react",
    name: "React.js",
    shortName: "React.js",
    version: "v19.x",
    type: "CLIENT INTERFACE ENGINE",
    layer: "Frontend Architecture",
    icon: Layers,
    accentColor: "#06B6D4",
    glowColor: "rgba(6, 182, 212, 0.35)",
    x: 20,
    y: 22,
    proficiency: 94,
    telemetry: "60 FPS Reactive Virtual DOM",
    purpose:
      "Component-driven reactive architecture, custom hook state management, optimistic client updates, and seamless rendering pipelines with zero layout shifts.",
    capabilities: [
      "Custom Hook Architecture & Encapsulated State",
      "Component Lifecycle, Memoization & Render Tuning",
      "Context API & Prop-Drilling Free Data Trees",
      "Seamless Integration with REST & WebSockets",
    ],
    projects: ["AI Resume Builder", "Full Stack E-commerce", "Real Time News & Alert App"],
    connections: ["js", "tailwind", "jwt"],
  },
  {
    id: "node",
    name: "Node.js",
    shortName: "Node.js",
    version: "v22.x LTS",
    type: "ASYNCHRONOUS RUNTIME",
    layer: "Backend Architecture",
    icon: Server,
    accentColor: "#22C55E",
    glowColor: "rgba(34, 197, 94, 0.35)",
    x: 80,
    y: 22,
    proficiency: 92,
    telemetry: "Non-blocking Libuv I/O Pipeline",
    purpose:
      "High-throughput server runtime managing non-blocking asynchronous I/O, RESTful API endpoints, token verification, file streams, and real-time socket connections.",
    capabilities: [
      "Event-Driven Architecture & Non-blocking I/O",
      "Microservice Endpoints & REST Architecture",
      "Buffer, Stream & File System Handling",
      "Process Management & Environment Isolation",
    ],
    projects: ["PulseChat App", "Full Stack E-commerce", "Real Time News & Alert App"],
    connections: ["js", "express", "mongo", "socket", "ai"],
  },
  {
    id: "express",
    name: "Express.js",
    shortName: "Express.js",
    version: "v4.x / 5.x",
    type: "HTTP ROUTING & API PIPELINE",
    layer: "API Framework",
    icon: Terminal,
    accentColor: "#A855F7",
    glowColor: "rgba(168, 85, 247, 0.35)",
    x: 84,
    y: 74,
    proficiency: 93,
    telemetry: "Strict REST Middleware Architecture",
    purpose:
      "Configuring modular routing pipelines, schema-validated request controllers, JWT authentication guards, error handlers, and strict JSON API contracts.",
    capabilities: [
      "Modular Router Hierarchies & Clean MVC Separation",
      "CORS Configuration & Security Middlewares",
      "Centralized Error Handling & HTTP Status Codes",
      "JSON Payload Parsing & Input Sanitization",
    ],
    projects: ["PulseChat App", "Full Stack E-commerce", "Real Time News & Alert App"],
    connections: ["js", "node", "jwt", "mongo"],
  },
  {
    id: "mongo",
    name: "MongoDB & Mongoose",
    shortName: "MongoDB",
    version: "Atlas & Local",
    type: "PERSISTENT DOCUMENT STORE",
    layer: "Database Architecture",
    icon: Database,
    accentColor: "#10B981",
    glowColor: "rgba(16, 185, 129, 0.35)",
    x: 50,
    y: 86,
    proficiency: 90,
    telemetry: "Atomic BSON Document Aggregation",
    purpose:
      "Designing scalable NoSQL schemas with Mongoose ODM, strict type validations, relationship modeling, index optimization, and high-performance aggregation pipelines.",
    capabilities: [
      "Complex Aggregation Pipelines ($match, $lookup, $group)",
      "Mongoose Schema Validation & Custom Invariants",
      "Compound Indexing & Fast Query Execution",
      "Atomic CRUD Operations & Data Integrity",
    ],
    projects: ["PulseChat App", "Full Stack E-commerce", "Real Time News & Alert App"],
    connections: ["js", "express", "node"],
  },
  {
    id: "jwt",
    name: "JWT & Auth Security",
    shortName: "JWT Auth",
    version: "RFC 7519",
    type: "CRYPTOGRAPHIC SECURITY GUARDS",
    layer: "Security & Access",
    icon: ShieldCheck,
    accentColor: "#F43F5E",
    glowColor: "rgba(244, 63, 94, 0.35)",
    x: 16,
    y: 74,
    proficiency: 92,
    telemetry: "HMAC-SHA256 Signed Bearer Tokens",
    purpose:
      "Stateless security layer handling cryptographic token issuance, signature verification, route-guard middlewares, password hashing (Bcrypt), and role-based permissions.",
    capabilities: [
      "Signed Bearer Token Verification Middlewares",
      "Role-Based Access Control (Admin / User RBAC)",
      "Bcrypt Salt Hashing for Credential Storage",
      "Protected Route Guards on Client & Server",
    ],
    projects: ["PulseChat App", "Full Stack E-commerce", "Real Time News & Alert App"],
    connections: ["js", "express", "react"],
  },
  {
    id: "socket",
    name: "Socket.IO",
    shortName: "Socket.IO",
    version: "v4.x",
    type: "REAL-TIME EVENT BROKER",
    layer: "Realtime Protocols",
    icon: Radio,
    accentColor: "#FB923C",
    glowColor: "rgba(251, 146, 60, 0.35)",
    x: 86,
    y: 48,
    proficiency: 88,
    telemetry: "Sub-10ms Bi-directional WebSocket Push",
    purpose:
      "Full-duplex WebSocket channels delivering instantaneous breaking news alerts, live notifications, and real-time state broadcasts with zero HTTP polling latency.",
    capabilities: [
      "Room & Namespace Isolation Architecture",
      "Sub-10ms Real-Time Push Messaging",
      "Automatic Fallback & Reconnection Handling",
      "Event-Driven Client-to-Server Sync",
    ],
    projects: ["PulseChat App", "Real Time News & Alert App"],
    connections: ["js", "node", "react"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    shortName: "Tailwind CSS",
    version: "v4.x",
    type: "DESIGN TOKEN SYSTEM",
    layer: "UI Styling & Tokens",
    icon: Palette,
    accentColor: "#38BDF8",
    glowColor: "rgba(56, 189, 248, 0.35)",
    x: 14,
    y: 48,
    proficiency: 95,
    telemetry: "Zero Runtime Overhead CSS Grid",
    purpose:
      "Building bespoke, responsive design systems using utility tokens, fluid flex/grid layouts, subtle gradients, and dark-mode aesthetics with zero stylesheet bloat.",
    capabilities: [
      "Fluid Multi-Device Responsive Breakpoints",
      "Arbitrary Value Tokens & Glassmorphism Effects",
      "Dark Theme Palette & Color Space Design",
      "Micro-Interactions & Hardware-Accelerated Transforms",
    ],
    projects: ["AI Resume Builder", "Full Stack E-commerce", "Real Time News & Alert App"],
    connections: ["js", "react"],
  },
  {
    id: "git",
    name: "Git & Dual Repos",
    shortName: "Git & GitHub",
    version: "v2.x",
    type: "SOURCE ARCHITECTURE",
    layer: "DevOps & Version Control",
    icon: GitBranch,
    accentColor: "#F97316",
    glowColor: "rgba(249, 115, 22, 0.35)",
    x: 50,
    y: 16,
    proficiency: 91,
    telemetry: "Atomic Branch Commit Workflows",
    purpose:
      "Maintaining production git practices with isolated frontend and backend repository architectures, atomic commits, branch workflows, and clean version tags.",
    capabilities: [
      "Dual Separate Repos for Frontend & Backend",
      "Branch-Based Feature Development Workflows",
      "Merge Conflict Resolution & Semantic Commits",
      "Automated Deploy Triggers on Vercel & Netlify",
    ],
    projects: ["All GitHub Repositories"],
    connections: ["js", "node", "react"],
  },
  {
    id: "ai",
    name: "AI API Integration",
    shortName: "AI APIs",
    version: "Gemini / OpenAI",
    type: "COGNITIVE SERVICES",
    layer: "AI & Machine Learning",
    icon: Cpu,
    accentColor: "#C084FC",
    glowColor: "rgba(192, 132, 252, 0.35)",
    x: 76,
    y: 86,
    proficiency: 89,
    telemetry: "Generative Content Pipelines",
    purpose:
      "Integrating Generative AI APIs to automate resume content generation, summarize complex articles, and provide intelligent ATS scoring metrics in production applications.",
    capabilities: [
      "Prompt Engineering & Structured JSON Responses",
      "Streaming Response Handling & Token Optimization",
      "Secure Server-Side API Key Gateways",
      "Automated ATS Scoring & Content Enhancement",
    ],
    projects: ["AI Resume Builder"],
    connections: ["js", "node", "express"],
  },
];

// Categorized Matrix for the Full Ecosystem View
const SKILL_CATEGORIES = [
  {
    title: "Frontend Architecture",
    description: "Building fast, reactive, component-driven user interfaces",
    badge: "Client Layer",
    skills: [
      { name: "React.js (v19)", level: "94%", note: "Hooks, Virtual DOM, Custom State", color: "from-cyan-500 to-blue-500" },
      { name: "JavaScript (ES6+)", level: "96%", note: "Async/Await, Closures, Event Loop", color: "from-amber-400 to-yellow-500" },
      { name: "Tailwind CSS (v4)", level: "95%", note: "Responsive Grids, Tokens, Dark Mode", color: "from-sky-400 to-cyan-500" },
      { name: "HTML5 & Modern CSS3", level: "98%", note: "Semantic Markup, Flexbox, Animations", color: "from-orange-500 to-red-500" },
      { name: "Next.js & Vite", level: "93%", note: "App Router, SSR/SSG, Fast HMR", color: "from-slate-200 to-indigo-500" },
    ],
  },
  {
    title: "Backend & Microservices",
    description: "Robust, non-blocking APIs and high-concurrency event loops",
    badge: "Server Layer",
    skills: [
      { name: "Node.js (v22 LTS)", level: "92%", note: "Asynchronous I/O, Event Loop, REST", color: "from-emerald-500 to-green-600" },
      { name: "Express.js", level: "93%", note: "Routing, Middlewares, Error Handlers", color: "from-purple-500 to-violet-600" },
      { name: "Socket.IO", level: "88%", note: "Bi-directional WebSockets, Live Alerts", color: "from-orange-500 to-amber-600" },
      { name: "JWT & Auth Security", level: "92%", note: "RBAC, HMAC-SHA256, Bcrypt Hashing", color: "from-rose-500 to-pink-600" },
      { name: "RESTful API Design", level: "95%", note: "CRUD, Status Codes, JSON Contracts", color: "from-indigo-500 to-blue-600" },
    ],
  },
  {
    title: "Database & Cloud Data",
    description: "Optimized schemas, indexing, and persistent document storage",
    badge: "Persistence Layer",
    skills: [
      { name: "MongoDB Atlas & Local", level: "90%", note: "NoSQL Collections, Document Schemas", color: "from-emerald-400 to-teal-600" },
      { name: "Mongoose ODM", level: "92%", note: "Schema Invariants, Virtuals, Hooks", color: "from-teal-500 to-emerald-600" },
      { name: "Aggregation Pipelines", level: "87%", note: "$match, $group, $lookup, $project", color: "from-cyan-500 to-teal-500" },
      { name: "Database Indexing", level: "89%", note: "Query Optimization, Compound Keys", color: "from-emerald-600 to-green-700" },
      { name: "Data Sanitization", level: "91%", note: "NoSQL Injection Prevention, Invariants", color: "from-blue-500 to-cyan-600" },
    ],
  },
  {
    title: "DevOps, Tools & AI",
    description: "Continuous deployment, dual-repo isolation, and AI pipelines",
    badge: "Ecosystem Layer",
    skills: [
      { name: "Git & GitHub Dual Repos", level: "92%", note: "Separate Frontend/Backend Repos", color: "from-orange-500 to-red-600" },
      { name: "Generative AI APIs", level: "89%", note: "Gemini / OpenAI Automation Pipelines", color: "from-violet-500 to-purple-600" },
      { name: "Postman API Testing", level: "94%", note: "Endpoint Testing, Environments, Mock", color: "from-amber-500 to-orange-500" },
      { name: "Netlify & Render CI/CD", level: "90%", note: "Cloud Web Services, Static Hosting", color: "from-sky-500 to-blue-600" },
      { name: "Linux & Terminal", level: "88%", note: "CLI Workflows, Process Diagnostics", color: "from-slate-400 to-zinc-600" },
    ],
  },
];

export default function Skills() {
  const [activeNodeId, setActiveNodeId] = useState("react");
  const [viewMode, setViewMode] = useState("schematic"); // 'schematic' | 'matrix'
  const activeNode = ENGINE_NODES.find((n) => n.id === activeNodeId) || ENGINE_NODES[0];
  const ActiveIcon = activeNode.icon;

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-12 bg-slate-950 text-slate-100 border-t border-white/10 select-none overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C8FF3D]/5 rounded-full blur-[160px]" />
        {/* Subtle engineering grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= SECTION HEADER & VIEW SWITCHER ================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="font-mono text-xs text-indigo-400 uppercase tracking-widest flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-[#C8FF3D] animate-ping" />
              <span className="font-bold">03 // THE ENGINE • FULL STACK ARCHITECTURE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Software <span className="text-[#C8FF3D]">Circuitry.</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 font-sans max-w-xl">
              Engineered with modern MERN microservices, asynchronous runtimes, persistent NoSQL schemas, and reactive component systems.
            </p>
          </div>

          {/* View Mode Toggle Pill */}
          <div className="flex items-center gap-2 self-start md:self-end bg-slate-900/90 p-1.5 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md">
            <button
              onClick={() => setViewMode("schematic")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                viewMode === "schematic"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Zap className="h-3.5 w-3.5" />
              <span>Circuit Schematic</span>
            </button>
            <button
              onClick={() => setViewMode("matrix")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                viewMode === "matrix"
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Workflow className="h-3.5 w-3.5" />
              <span>Ecosystem Deck</span>
            </button>
          </div>
        </div>

        {/* ================= VIEW 1: INTERACTIVE CIRCUIT SCHEMATIC ================= */}
        {viewMode === "schematic" && (
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* ----------------- DESKTOP 2D CIRCUIT BLUEPRINT (lg:block) ----------------- */}
            <div className="hidden lg:block lg:col-span-8 relative aspect-[16/11] min-h-[480px] bg-slate-900/80 border border-white/10 rounded-2xl p-6 overflow-hidden shadow-2xl backdrop-blur-sm">
              {/* HUD Telemetry Overlay */}
              <div className="absolute top-4 left-6 flex items-center gap-3 font-mono text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5 text-[#C8FF3D] font-bold">
                  <span className="h-2 w-2 rounded-full bg-[#C8FF3D] animate-pulse" />
                  KERNEL: ONLINE
                </span>
                <span className="text-white/20">|</span>
                <span>BUS: 10 Gbps</span>
                <span className="text-white/20">|</span>
                <span>REF: FORGE_CIRCUIT_v4.2</span>
              </div>

              <div className="absolute top-4 right-6 font-mono text-[10px] text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full">
                ACTIVE NODE: {activeNode.shortName.toUpperCase()}
              </div>

              {/* Corner crosshairs */}
              <div className="absolute bottom-3 left-4 font-mono text-[9px] text-slate-600">
                [+] LAT: 28.6139° N // LON: 77.2090° E
              </div>
              <div className="absolute bottom-3 right-4 font-mono text-[9px] text-slate-600">
                ARCHITECTURE: MERN PROTOCOL
              </div>

              {/* SVG Connecting Traces with Animated Pulses */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="activeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#C8FF3D" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#818CF8" stopOpacity="0.9" />
                  </linearGradient>
                </defs>

                {ENGINE_NODES.map((node) => {
                  if (node.id === "js") return null;
                  const centerNode = ENGINE_NODES.find((n) => n.id === "js");
                  const isDirect = activeNode.id === node.id;
                  const isConnected = activeNode.connections.includes(node.id);

                  return (
                    <g key={node.id}>
                      {/* Background base wire */}
                      <line
                        x1={`${centerNode.x}%`}
                        y1={`${centerNode.y}%`}
                        x2={`${node.x}%`}
                        y2={`${node.y}%`}
                        stroke={
                          isDirect
                            ? "url(#activeGrad)"
                            : isConnected
                            ? "rgba(99, 102, 241, 0.4)"
                            : "rgba(255, 255, 255, 0.08)"
                        }
                        strokeWidth={isDirect ? "2.5" : isConnected ? "1.5" : "1"}
                        strokeDasharray={isDirect ? "6 4" : isConnected ? "3 3" : "none"}
                        className={isDirect ? "animate-pulse" : ""}
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Interactive Hardware Nodes on Desktop */}
              {ENGINE_NODES.map((node) => {
                const isSelected = activeNode.id === node.id;
                const isConnected = activeNode.connections.includes(node.id);
                const NodeIcon = node.icon;

                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNodeId(node.id)}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: "translate(-50%, -50%)",
                      borderColor: isSelected ? node.accentColor : undefined,
                      boxShadow: isSelected ? `0 0 24px ${node.glowColor}` : undefined,
                      color: isSelected ? node.accentColor : undefined,
                    }}
                    className={`absolute font-mono text-xs transition-all duration-300 z-10 p-2.5 sm:px-3.5 sm:py-2.5 rounded-xl text-left border backdrop-blur-md group ${
                      isSelected
                        ? "bg-slate-950 scale-110 shadow-2xl ring-2 font-bold"
                        : isConnected
                        ? "bg-slate-950/80 border-indigo-500/40 text-slate-200 hover:border-indigo-400"
                        : "bg-slate-950/60 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="p-1 rounded-md transition-colors"
                        style={{
                          backgroundColor: isSelected ? `${node.accentColor}20` : "rgba(255,255,255,0.05)",
                          color: isSelected ? node.accentColor : "#94A3B8",
                        }}
                      >
                        <NodeIcon size={14} />
                      </div>
                      <span className="whitespace-nowrap font-semibold">{node.shortName}</span>
                      {isSelected && (
                        <span
                          className="h-2 w-2 rounded-full animate-ping"
                          style={{ backgroundColor: node.accentColor }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ----------------- MOBILE TOUCH MATRIX (block lg:hidden) ----------------- */}
            <div className="block lg:hidden w-full space-y-4">
              {/* Central Kernel Header Card for Mobile */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/15 shadow-xl">
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>CENTRAL COMPUTATIONAL KERNEL</span>
                  <span className="text-[#C8FF3D] font-bold">CORE HUB</span>
                </div>
                <button
                  onClick={() => setActiveNodeId("js")}
                  className={`w-full py-3.5 px-4 rounded-xl font-mono text-sm font-bold border transition-all flex items-center justify-between ${
                    activeNodeId === "js"
                      ? "bg-slate-950 border-[#FACC15] text-[#FACC15] shadow-[0_0_20px_rgba(250,204,21,0.3)] ring-1 ring-[#FACC15]"
                      : "bg-slate-950/70 border-white/10 text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Code2 className="h-4 w-4 text-[#FACC15]" />
                    <span>JAVASCRIPT (ES6+)</span>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
                    96%
                  </span>
                </button>
              </div>

              {/* 2-Column Touch Grid for Other Nodes */}
              <div className="grid grid-cols-2 gap-2.5">
                {ENGINE_NODES.filter((n) => n.id !== "js").map((node) => {
                  const isSelected = activeNode.id === node.id;
                  const NodeIcon = node.icon;

                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNodeId(node.id)}
                      className={`p-3.5 rounded-xl border text-left font-mono transition-all duration-150 flex flex-col justify-between min-h-[82px] active:scale-95 ${
                        isSelected
                          ? "bg-slate-950 ring-1 shadow-lg"
                          : "bg-slate-900/70 border-white/10 text-slate-300 hover:border-white/20"
                      }`}
                      style={{
                        borderColor: isSelected ? node.accentColor : undefined,
                        boxShadow: isSelected ? `0 0 16px ${node.glowColor}` : undefined,
                      }}
                    >
                      <div className="flex items-center justify-between w-full">
                        <div
                          className="p-1 rounded-md"
                          style={{
                            backgroundColor: isSelected ? `${node.accentColor}25` : "rgba(255,255,255,0.05)",
                            color: isSelected ? node.accentColor : "#94A3B8",
                          }}
                        >
                          <NodeIcon size={14} />
                        </div>
                        <span
                          className="text-[10px] font-bold"
                          style={{ color: isSelected ? node.accentColor : "#64748B" }}
                        >
                          {node.proficiency}%
                        </span>
                      </div>

                      <div className="mt-2">
                        <div
                          className="text-xs font-bold truncate"
                          style={{ color: isSelected ? node.accentColor : "#F8FAFC" }}
                        >
                          {node.shortName}
                        </div>
                        <div className="text-[9px] text-slate-500 truncate">{node.layer}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ----------------- TELEMETRY INSPECTOR PANEL (Mobile & Desktop) ----------------- */}
            <div className="w-full lg:col-span-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="bg-slate-900/90 border border-white/10 rounded-2xl p-5 sm:p-7 space-y-5 font-mono shadow-2xl backdrop-blur-md relative overflow-hidden"
                  style={{
                    borderColor: `${activeNode.accentColor}35`,
                  }}
                >
                  {/* Top Ambient Glow for Active Node */}
                  <div
                    className="absolute top-0 right-0 w-36 h-36 rounded-full blur-[70px] pointer-events-none opacity-20"
                    style={{ backgroundColor: activeNode.accentColor }}
                  />

                  {/* Header Spec Tag */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="p-2 rounded-xl"
                        style={{
                          backgroundColor: `${activeNode.accentColor}20`,
                          color: activeNode.accentColor,
                        }}
                      >
                        <ActiveIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest">
                          {activeNode.layer}
                        </div>
                        <div className="text-sm font-bold text-white tracking-tight">
                          {activeNode.name}
                        </div>
                      </div>
                    </div>

                    <span
                      className="text-[10px] font-bold px-2 py-1 rounded-md border font-mono"
                      style={{
                        backgroundColor: `${activeNode.accentColor}15`,
                        borderColor: `${activeNode.accentColor}40`,
                        color: activeNode.accentColor,
                      }}
                    >
                      {activeNode.version}
                    </span>
                  </div>

                  {/* Proficiency & Telemetry Meter */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Gauge className="h-3.5 w-3.5 text-slate-400" />
                        <span>ARCHITECTURE PROFICIENCY</span>
                      </span>
                      <span className="font-bold" style={{ color: activeNode.accentColor }}>
                        {activeNode.proficiency}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${activeNode.proficiency}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: activeNode.accentColor }}
                      />
                    </div>

                    <div className="text-[10px] text-slate-500 flex items-center justify-between pt-0.5">
                      <span>TELEMETRY:</span>
                      <span className="text-slate-300 font-medium">{activeNode.telemetry}</span>
                    </div>
                  </div>

                  {/* Purpose / Role */}
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Activity className="h-3 w-3 text-indigo-400" />
                      <span>PRODUCTION ENGINEERING ROLE:</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {activeNode.purpose}
                    </p>
                  </div>

                  {/* Capabilities List */}
                  <div className="space-y-2 border-t border-white/10 pt-3.5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                      KEY ARCHITECTURAL CAPABILITIES:
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                      {activeNode.capabilities.map((cap, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-[11px] text-slate-300 font-sans"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 flex-shrink-0 mt-0.5"
                            style={{ color: activeNode.accentColor }}
                          />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Associated Projects */}
                  <div className="border-t border-white/10 pt-3.5">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                      <span>VERIFIED IN PRODUCTION PROJECTS:</span>
                      <span className="text-emerald-400 text-[9px] font-bold">100% CODEBASE MATCH</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeNode.projects.map((p, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/10 text-slate-200 text-[10px] font-sans font-medium hover:border-white/30 transition-colors"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Active Conduits */}
                  <div className="border-t border-white/10 pt-3 flex items-center justify-between text-[10px] text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Zap className="h-3 w-3 text-[#C8FF3D]" />
                      <span>CONDUITS: {activeNode.connections.length} ACTIVE</span>
                    </span>
                    <span className="text-emerald-400 font-bold">STATUS: PRODUCTION GRADE</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* ================= VIEW 2: FULL STACK ECOSYSTEM DECK ================= */}
        {viewMode === "matrix" && (
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {SKILL_CATEGORIES.map((category, catIdx) => (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: catIdx * 0.1 }}
                className="bg-slate-900/90 border border-white/10 rounded-2xl p-6 sm:p-7 space-y-6 shadow-xl backdrop-blur-sm relative overflow-hidden group hover:border-indigo-500/40 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-400 font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20">
                      {category.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2.5 tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-sans">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Stack List with Progress Meters */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white font-mono">{skill.name}</span>
                        <span className="font-mono text-xs text-indigo-400 font-bold">
                          {skill.level}
                        </span>
                      </div>

                      <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                          style={{ width: skill.level }}
                        />
                      </div>

                      <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between">
                        <span>{skill.note}</span>
                        <span className="text-emerald-400 text-[9px]">Verified</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}