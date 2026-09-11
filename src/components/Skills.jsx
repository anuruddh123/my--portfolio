import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Layers,
  Server,
  Database,
  ShieldCheck,
  Globe,
  Terminal,
  Activity,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Code2,
  Wifi,
  Wrench,
  Zap,
} from "lucide-react";

// 3 Functional Tiers of the Full-Stack Digital System
const architectureTiers = [
  {
    id: "presentation",
    tierName: "01 // PRESENTATION & CLIENT TIER",
    description: "Client-side component lifecycle, reactive state management, and fluid responsive interfaces.",
    accent: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
    color: "#38bdf8",
    technologies: [
      {
        id: "react",
        name: "React.js (v18/19)",
        role: "Component Architecture & State Engine",
        tier: "Frontend",
        details: "Single-page application state management, reusable component design systems, custom hooks, and virtual DOM optimization.",
        specs: ["Virtual DOM Optimization", "Custom Hooks Abstraction", "Context API State", "Component Modularization"],
        related: ["javascript", "tailwind", "framer-motion", "rest"],
        icon: Code2,
        accent: "#38bdf8",
      },
      {
        id: "javascript",
        name: "JavaScript (ES6+)",
        role: "Core Execution & Async Runtime",
        tier: "Frontend",
        details: "Modern asynchronous event loop, promises, async/await, closures, functional primitives, and ES6+ modular syntax.",
        specs: ["Async / Await Flow", "Event Loop Mechanics", "Closures & Lexical Scope", "ES6+ Modular Architecture"],
        related: ["react", "nodejs", "express"],
        icon: Terminal,
        accent: "#facc15",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS",
        role: "Utility Design System & Tokens",
        tier: "Frontend",
        details: "Mobile-first responsive layouts, zero-runtime CSS footprint, bespoke design tokens, and fluid layout micro-systems.",
        specs: ["Fluid Breakpoint Systems", "Arbitrary CSS Variants", "Zero Runtime Footprint", "Accessible Contrast Ratios"],
        related: ["react"],
        icon: Layers,
        accent: "#38bdf8",
      },
      {
        id: "framer-motion",
        name: "Framer Motion",
        role: "Spring Physics & Layout Choreography",
        tier: "Frontend",
        details: "Physics-based spring motion, layoutId morphing, scroll-driven triggers, and accessible reduced-motion support.",
        specs: ["Spring Physics Dynamics", "LayoutId Morphing", "Scroll-Linked Transforms", "Accessible Reduced Motion"],
        related: ["react"],
        icon: Activity,
        accent: "#ec4899",
      },
    ],
  },
  {
    id: "application",
    tierName: "02 // APPLICATION, ROUTING & SECURITY TIER",
    description: "Server orchestration, stateless token verification, role barriers, and low-latency event channels.",
    accent: "text-indigo-400 border-indigo-500/40 bg-indigo-500/10",
    color: "#818cf8",
    technologies: [
      {
        id: "nodejs",
        name: "Node.js",
        role: "Event-Driven Backend Runtime",
        tier: "Backend",
        details: "High-throughput asynchronous non-blocking I/O backend architecture powering scalable server instances and API gateways.",
        specs: ["Event-Driven Non-Blocking I/O", "V8 JavaScript Engine", "NPM Ecosystem Modules", "Buffer & Stream Handling"],
        related: ["express", "mongodb", "rest", "socketio"],
        icon: Server,
        accent: "#4ade80",
      },
      {
        id: "express",
        name: "Express.js",
        role: "REST Controller & Middleware Pipeline",
        tier: "Backend",
        details: "Modular request routing, controller abstraction, input sanitization, CORS configuration, and standardized error traps.",
        specs: ["Middleware Stack Chains", "Route Controller Separation", "CORS Configuration", "Global Exception Trap"],
        related: ["nodejs", "jwt", "mongodb", "rest"],
        icon: Server,
        accent: "#a78bfa",
      },
      {
        id: "jwt",
        name: "JWT Auth & RBAC",
        role: "Zero-Trust Authorization Guard",
        tier: "Security",
        details: "Stateless authorization via HMAC-signed Bearer tokens and role-based route middleware protection (RBAC).",
        specs: ["HMAC-SHA256 Signed Tokens", "Role-Based Access (RBAC)", "Bearer Middleware Guard", "Stateless Session Protocol"],
        related: ["express", "nodejs", "react"],
        icon: ShieldCheck,
        accent: "#f472b6",
      },
      {
        id: "rest",
        name: "RESTful APIs",
        role: "HTTP Service Protocols & Contracts",
        tier: "Architecture",
        details: "Semantic HTTP endpoints (GET, POST, PUT, DELETE), standard JSON payloads, status code semantics, and pagination.",
        specs: ["Semantic HTTP Endpoints", "Standardized JSON Payloads", "Idempotent Safe Routes", "Clean HTTP Status Codes"],
        related: ["react", "express", "postman"],
        icon: Globe,
        accent: "#60a5fa",
      },
      {
        id: "socketio",
        name: "Socket.IO",
        role: "Duplex WebSocket Broadcast Bus",
        tier: "Real-Time",
        details: "Low-latency full-duplex communication channels for live alert feeds, chat streams, and distributed event broadcasting.",
        specs: ["Full-Duplex Data Channels", "Room & Channel Broadcasting", "Heartbeat & Auto-Reconnect", "Low-Latency Event Delivery"],
        related: ["nodejs", "express", "react"],
        icon: Wifi,
        accent: "#c084fc",
      },
    ],
  },
  {
    id: "persistence",
    tierName: "03 // PERSISTENCE & DEVOPS PIPELINE",
    description: "Database modeling, schema indexing, aggregation pipelines, version control, and API verification.",
    accent: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
    color: "#34d399",
    technologies: [
      {
        id: "mongodb",
        name: "MongoDB Atlas",
        role: "NoSQL Cloud Document Store",
        tier: "Database",
        details: "Document modeling with Mongoose ODM, compound index tuning, multi-stage aggregation pipelines, and cloud hosting.",
        specs: ["Mongoose Schema Modeling", "Compound Index Tuning", "Multi-Stage Aggregations", "Atlas Cloud Infrastructure"],
        related: ["express", "nodejs"],
        icon: Database,
        accent: "#34d399",
      },
      {
        id: "git",
        name: "Git & GitHub",
        role: "Version Control & Branching Flow",
        tier: "DevOps",
        details: "Feature branching workflows, semantic commit histories, pull requests, merge conflict resolution, and deployment triggers.",
        specs: ["Feature Branching Flow", "Semantic Commit Standards", "Pull Request Reviews", "Deployment Automation Triggers"],
        related: ["react", "nodejs"],
        icon: Wrench,
        accent: "#fb923c",
      },
      {
        id: "postman",
        name: "Postman",
        role: "API Testing & Verification Suite",
        tier: "DevOps",
        details: "Automated endpoint testing, environment variable chaining, collection runner executions, and payload contract validation.",
        specs: ["Endpoint Assertion Tests", "Collection Runner Execution", "Environment Variable Chaining", "Contract Payload Validation"],
        related: ["rest", "express"],
        icon: Zap,
        accent: "#f97316",
      },
    ],
  },
];

// Flat list for cross-tier lookups
const allTechnologies = architectureTiers.flatMap((tier) => tier.technologies);

export default function Skills() {
  const [activeTierId, setActiveTierId] = useState("presentation");
  const [selectedTech, setSelectedTech] = useState(architectureTiers[0].technologies[0]);

  const activeTier = architectureTiers.find((t) => t.id === activeTierId) || architectureTiers[0];

  const handleSelectTech = (tech) => {
    setSelectedTech(tech);
    const parentTier = architectureTiers.find((t) => t.technologies.some((item) => item.id === tech.id));
    if (parentTier && parentTier.id !== activeTierId) {
      setActiveTierId(parentTier.id);
    }
  };

  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-[#02040a] via-[#08061a] to-[#02040a] text-white select-none"
    >
      {/* Background High-Voltage Circuit Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-circuit-grid opacity-60" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10 space-y-16">
        
        {/* =========================================================
            SECTION HEADER (NO CARDS / ASYMMETRIC)
            ========================================================= */}
        <div className="text-left space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-xs shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <Cpu className="h-3.5 w-3.5 text-purple-400 animate-pulse" />
            <span>02 // TECHNOLOGY SYSTEM • TOPOLOGY MAP</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase">
            The stack behind{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-cyan-400 bg-clip-text text-transparent">
              the work.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            An architectural circuit topology representing the 3 functional tiers of my full-stack applications. Select any tier or node to inspect technical capabilities.
          </p>
        </div>

        {/* =========================================================
            INTERACTIVE ARCHITECTURE TOPOLOGY
            ========================================================= */}
        <div className="space-y-10">
          
          {/* Tier Selector Rail (Monospace Architecture Tabs) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 border-b border-white/10 pb-4">
            {architectureTiers.map((tier) => {
              const isSelected = activeTierId === tier.id;
              return (
                <button
                  key={tier.id}
                  onClick={() => {
                    setActiveTierId(tier.id);
                    setSelectedTech(tier.technologies[0]);
                  }}
                  className={`p-4 rounded-2xl text-left font-mono transition-all border ${
                    isSelected
                      ? tier.accent + " shadow-lg"
                      : "bg-slate-950/60 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/25"
                  }`}
                >
                  <p className="text-xs font-bold">{tier.tierName}</p>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 font-sans font-normal">
                    {tier.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Connected Circuit Map & Active Node Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
            
            {/* LEFT: Node Topology Rows (No Box Cards / Clean Schematics) */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/10">
                <span>INTERCONNECT NODES: {activeTier.technologies.length} ACTIVE</span>
                <span className="text-cyan-400">STATUS: VERIFIED</span>
              </div>

              <div className="space-y-2.5">
                {activeTier.technologies.map((tech) => {
                  const isSelected = selectedTech.id === tech.id;
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.id}
                      onClick={() => handleSelectTech(tech)}
                      className={`p-4 rounded-2xl transition-all cursor-pointer border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? "bg-slate-900 border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)] text-white"
                          : "bg-slate-950/70 border-white/10 text-slate-300 hover:border-white/30 hover:bg-slate-900/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="h-9 w-9 rounded-xl flex items-center justify-center border flex-shrink-0"
                          style={{
                            backgroundColor: `${tech.accent}15`,
                            borderColor: `${tech.accent}40`,
                            color: tech.accent,
                          }}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm sm:text-base text-white">
                              {tech.name}
                            </span>
                            {isSelected && (
                              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            )}
                          </div>
                          <p className="text-xs font-mono text-slate-400 mt-0.5">{tech.role}</p>
                        </div>
                      </div>

                      <span className="font-mono text-[11px] text-cyan-400 self-start sm:self-center">
                        {isSelected ? "● INSPECTING" : "○ SELECT →"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: High-Precision Architectural Capability Console */}
            <div className="lg:col-span-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTech.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 sm:p-7 rounded-3xl bg-slate-950/90 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl space-y-6"
                >
                  {/* Console Header */}
                  <div className="border-b border-white/10 pb-4">
                    <span className="font-mono text-[10px] text-cyan-400 uppercase tracking-widest block mb-1">
                      TECHNICAL SPECIFICATION
                    </span>
                    <h3 className="text-2xl font-black text-white">{selectedTech.name}</h3>
                    <p className="text-xs font-mono text-indigo-300 mt-1">{selectedTech.role}</p>
                  </div>

                  {/* Architectural Role Details */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                      Engineering Role:
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans bg-slate-900/80 p-4 rounded-xl border border-white/10">
                      {selectedTech.details}
                    </p>
                  </div>

                  {/* Validated Capabilities Checklist */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                      Validated Capabilities:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedTech.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="p-2.5 rounded-lg bg-slate-900/60 border border-white/10 flex items-center gap-2 text-xs font-mono text-slate-300"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interconnected System Dependencies */}
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                      Interconnected Nodes:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedTech.related.map((relId) => {
                        const relNode = allTechnologies.find((n) => n.id === relId);
                        if (!relNode) return null;
                        return (
                          <button
                            key={relId}
                            onClick={() => handleSelectTech(relNode)}
                            className="px-2.5 py-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 font-mono text-xs transition-colors"
                          >
                            → {relNode.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Console Footer */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Protocol: <strong>Production Standards</strong></span>
                    <span className="text-emerald-400 font-bold">100% Verified</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}