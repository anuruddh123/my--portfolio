import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Terminal,
  Activity,
  Layers,
  ShieldCheck,
  Database,
  Radio,
  Sparkles,
  Server,
  Globe,
  Cpu,
  Lock,
} from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Hero() {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Parallax spring mouse movement for System Map
  const mapRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 200, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e) => {
    if (!mapRef.current) return;
    const rect = mapRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredNode(null);
  };

  // Full-Stack System Map Nodes
  const systemNodes = [
    { id: "client", label: "CLIENT TIER", icon: Globe, path: ["client", "react", "api"] },
    { id: "react", label: "REACT 18", icon: Cpu, path: ["client", "react", "api"] },
    { id: "api", label: "API GATEWAY", icon: Activity, path: ["client", "react", "api", "node"] },
    { id: "node", label: "EXPRESS / NODE", icon: Server, path: ["client", "react", "api", "node", "mongodb"] },
    { id: "auth", label: "AUTH (JWT/RBAC)", icon: Lock, path: ["client", "react", "api", "auth", "node"] },
    { id: "mongodb", label: "MONGODB ATLAS", icon: Database, path: ["client", "react", "api", "node", "mongodb"] },
    { id: "deploy", label: "DEPLOYMENT", icon: Layers, path: ["client", "react", "node", "mongodb", "deploy"] },
  ];

  const isNodeActive = (nodeId) => {
    if (!hoveredNode) return false;
    const activeTarget = systemNodes.find((n) => n.id === hoveredNode);
    return activeTarget?.path?.includes(nodeId) || hoveredNode === nodeId;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 sm:pt-36 pb-20 overflow-hidden flex flex-col justify-center bg-[#02040a] text-white select-none"
    >
      {/* Dynamic Technical Environment: Floating Fragments, Subtle Particles & Watermarks */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-digital-system-grid opacity-50" />

        {/* Ambient Radial Lighting */}
        <div className="absolute top-10 left-1/4 w-[650px] h-[650px] bg-cyan-600/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[650px] h-[650px] bg-indigo-600/10 rounded-full blur-[160px]" />

        {/* Floating Code Snippets in 3D Space */}
        <div className="hidden lg:block absolute top-28 right-16 font-mono text-[10px] text-cyan-400/25 leading-relaxed">
          <p>const auth = jwt.verify(bearerToken, SECRET);</p>
          <p>const cluster = await mongoose.connect(ATLAS_URI);</p>
        </div>
        <div className="hidden lg:block absolute bottom-24 left-10 font-mono text-[10px] text-indigo-400/25 leading-relaxed">
          <p>router.post('/api/v1/tailor', authGuard, tailorEngine);</p>
          <p>socket.emit('broadcast:stream', payload);</p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ============ LEFT COLUMN: Monumental Typography & Engineering Controls ============ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
          >
            {/* System Status Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>SYSTEM ONLINE</span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400">FULL-STACK ENGINEER</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-emerald-400 hidden sm:inline">AVAILABLE FOR OPPORTUNITIES</span>
            </div>

            {/* Monumental Typographic Object */}
            <div className="space-y-1">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] text-white">
                <span className="block">Anuruddh</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(6,182,212,0.3)]">
                  Tiwari
                </span>
              </h1>
              <p className="pt-2 font-mono text-xs sm:text-sm font-bold text-slate-400 tracking-widest uppercase">
                MERN STACK • FULL-STACK DEVELOPER
              </p>
            </div>

            {/* Concise Engineering Statement */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg font-normal">
              I build production-ready web applications with thoughtful interfaces, secure APIs, and scalable backend systems.
            </p>

            {/* Engineering Controls (Magnetic Buttons) */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm font-bold">
              {/* [ ENTER PROJECT LAB ] */}
              <a
                href="#projects"
                data-cursor-text="PROJECTS →"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-lg shadow-cyan-400/20 hover:scale-105 active:scale-95 transition-all group"
              >
                <span>[ ENTER PROJECT LAB ]</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              {/* [ DOWNLOAD RESUME ] */}
              <a
                href="/T_anuruddh_resume.pdf"
                download="Anuruddh_Tiwari_Resume.pdf"
                data-cursor-text="DOWNLOAD"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/20 hover:border-cyan-400 text-slate-200 hover:text-white transition-all hover:bg-white/5"
              >
                <Download className="h-4 w-4 text-emerald-400" />
                <span>[ RESUME ]</span>
              </a>

              {/* [ GITHUB ] */}
              <a
                href="https://github.com/anuruddh123"
                target="_blank"
                rel="noreferrer"
                data-cursor-text="OPEN ↗"
                className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all shadow-sm"
              >
                <GithubIcon className="h-4 w-4" />
                <span className="hidden sm:inline">[ GITHUB ]</span>
              </a>

              {/* [ LINKEDIN ] */}
              <a
                href="https://www.linkedin.com/in/anuruddh-tiwari-2842b232a"
                target="_blank"
                rel="noreferrer"
                data-cursor-text="OPEN ↗"
                className="inline-flex items-center gap-1.5 px-3.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all shadow-sm"
              >
                <LinkedinIcon className="h-4 w-4 text-blue-400" />
                <span className="hidden sm:inline">[ LINKEDIN ]</span>
              </a>
            </div>

            {/* Micro Telemetry HUD */}
            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-500">
              <span>BASE: KANPUR, IN</span>
              <span>•</span>
              <span className="text-emerald-400">LATENCY: &lt;24ms</span>
              <span>•</span>
              <span>DEPLOYMENTS: 4 LIVE</span>
            </div>
          </motion.div>

          {/* ============ RIGHT COLUMN: FUTURISTIC FULL-STACK SYSTEM MAP ============ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-center justify-center select-none"
            style={{ perspective: 1200 }}
          >
            <motion.div
              ref={mapRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-full max-w-lg rounded-3xl bg-slate-950/90 border border-cyan-500/30 p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl text-left space-y-6"
            >
              {/* Map Console Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Activity className="h-4 w-4 animate-pulse" />
                  <span className="font-bold tracking-wider">FULL-STACK SYSTEM MAP</span>
                </div>
                <span className="text-[10px] text-slate-500">HOVER NODE TO TRACE</span>
              </div>

              {/* Architectural Nodes Pipeline */}
              <div className="space-y-3">
                {systemNodes.map((node, idx) => {
                  const isActive = isNodeActive(node.id);
                  const isDirectHover = hoveredNode === node.id;
                  const Icon = node.icon;

                  return (
                    <div
                      key={node.id}
                      onMouseEnter={() => setHoveredNode(node.id)}
                      data-cursor-text="INSPECT"
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isDirectHover
                          ? "bg-cyan-500/25 border-cyan-400 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-[1.02]"
                          : isActive
                          ? "bg-slate-900 border-indigo-400/80 text-cyan-300 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
                          : "bg-slate-950/70 border-white/10 text-slate-300 hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`h-7 w-7 rounded-lg flex items-center justify-center border ${
                            isActive
                              ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                              : "bg-white/5 border-white/10 text-slate-400"
                          }`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-mono text-xs font-bold">{node.label}</span>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-[10px]">
                        {isActive ? (
                          <span className="text-cyan-400 font-bold flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                            DATA ACTIVE
                          </span>
                        ) : (
                          <span className="text-slate-500">STAGE 0{idx + 1}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active Path Readout */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">
                  {hoveredNode
                    ? `TRACED PATH: ${systemNodes.find((n) => n.id === hoveredNode)?.path.join(" → ").toUpperCase()}`
                    : "HOVER ANY NODE TO TRACE FULL PATHWAY"}
                </span>
                <span className="text-emerald-400 font-bold">200 OK</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;