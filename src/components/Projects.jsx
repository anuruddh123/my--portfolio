import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  ExternalLink,
  Check,
  Rocket,
  ShieldCheck,
  Server,
  Globe,
  Layers,
  ArrowUpRight,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Database,
  Lock,
  Activity,
  Terminal,
  Maximize2,
  Radio,
  Eye,
  FileText,
  ShoppingCart,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";

// Real Projects Data Preserved 100%
const projects = [
  {
    id: "resume-tailor",
    number: "01",
    total: "04",
    title: "Resume Tailor Application",
    category: "ai-ats",
    badge: "Featured • AI & ATS",
    authHighlight: "JWT Authentication & Role-Based Authorization (RBAC)",
    tagline: "Intelligent ATS Resume Optimization Engine & PDF Generator",
    description:
      "A complete full-stack ATS resume tailoring and optimization platform. Analyzes resumes against job descriptions to extract missing keywords and boost ATS scores. Built with secure JWT Authentication & Role-Based Authorization (RBAC), protected user profiles, saved resume versions, and real-time PDF generation.",
    features: [
      "JWT Authentication & Role-Based Authorization (RBAC)",
      "Protected User Dashboard & Tailored Resume History",
      "AI-Powered Keyword Gap Analysis & ATS Scoring",
      "Real-Time Resume Preview & Instant PDF Export",
    ],
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Auth",
      "Tailwind CSS",
      "REST APIs",
    ],
    githubFrontend: "https://github.com/anuruddh123/resume_builder",
    githubBackend: null, // Backend repo removed as explicitly requested
    demo: "https://resume-craftss.netlify.app/",
    domain: "resume-craftss.netlify.app",
    accentColor: "#6366f1",
    accentGlow: "rgba(99, 102, 241, 0.25)",
    emoji: "📄",
    pipeline: [
      { step: "Client", label: "React 18 + Tailwind", sub: "User Profile & Job Description Input", key: "React.js" },
      { step: "Auth Guard", label: "JWT Bearer Token", sub: "RBAC Middleware & Session Protection", key: "JWT Auth" },
      { step: "API Gateway", label: "Express Controller", sub: "ATS Gap Analysis & Scoring Engine", key: "Express.js" },
      { step: "Data Store", label: "MongoDB Atlas", sub: "User Schema & Resume History Snapshots", key: "MongoDB" },
    ],
    telemetry: {
      live: "200 OK • Production Live",
      auth: "JWT RBAC Active",
      api: "REST API v1.4",
      database: "MongoDB Atlas Connected",
      metric: "94% ATS Match Rate",
    },
    caseStudy: {
      problem:
        "Job seekers struggle to get past automated Applicant Tracking Systems (ATS) because standard resumes lack specific keyword alignments and proper schema structures required by enterprise HR software.",
      solution:
        "Engineered an intelligent end-to-end ATS tailoring platform that computes algorithmic similarity scores between candidate resumes and target job descriptions, identifies critical skill deficits, and dynamically generates ATS-optimized documents with one-click export.",
      frontend:
        "Developed using React 18, Tailwind CSS, and Framer Motion. Features a live ATS circular match gauge, interactive skill gap tag analyzer, dynamic resume template previewer, and instant client-side PDF export without external watermarks.",
      backend:
        "Architected a high-throughput Express.js REST API with modular controllers, JWT token validation middleware, role-based authorization guards, and custom keyword tokenization routines.",
      database:
        "Designed normalized MongoDB schemas with Mongoose, storing versioned resume snapshots, user auth credentials, and target job telemetry with optimized indexing for sub-100ms response times.",
      metrics: [
        { label: "ATS Score Boost", value: "+38%" },
        { label: "Keyword Analysis", value: "<120ms" },
        { label: "PDF Export Time", value: "Instant" },
        { label: "Auth Protocol", value: "JWT + RBAC" },
      ],
    },
  },
  {
    id: "ecommerce",
    number: "02",
    total: "04",
    title: "Full Stack E-commerce App",
    category: "mern",
    badge: "Full Stack MERN",
    authHighlight: "Token-Based Auth & Admin Authorization",
    tagline: "Scalable Shopping Ecosystem with Real-Time Cart State",
    description:
      "A robust full-stack shopping platform with end-to-end product management, shopping cart state management, secure token-based authentication, admin inventory control, and RESTful APIs constructed with Express and MongoDB.",
    features: [
      "JWT Authentication & Admin Role Authorization",
      "Cart & Order Management with Real-Time Totaling",
      "Product Catalog with Category Filter & Search",
      "Scalable MongoDB Schema & Token-Verified APIs",
    ],
    stack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Auth",
      "Tailwind CSS",
    ],
    githubFrontend: "https://github.com/anuruddh123/ecommerce",
    githubBackend: "https://github.com/anuruddh123/e-commerce-backend",
    demo: "https://shopvistaaa.netlify.app/",
    domain: "shopvistaaa.netlify.app",
    accentColor: "#10b981",
    accentGlow: "rgba(16, 185, 129, 0.25)",
    emoji: "🛒",
    pipeline: [
      { step: "Client", label: "React + Context API", sub: "Live Cart State & Product Grid", key: "React.js" },
      { step: "Security", label: "Token Verification", sub: "Protects Customer & Admin Orders", key: "JWT Auth" },
      { step: "API Gateway", label: "Express REST Router", sub: "Order Ingestion & Pricing Calcs", key: "Express.js" },
      { step: "Data Store", label: "MongoDB Collections", sub: "Products, Carts, Orders, Users", key: "MongoDB" },
    ],
    telemetry: {
      live: "200 OK • Deployed on Netlify",
      auth: "Admin + Customer RBAC",
      api: "Express REST APIs",
      database: "MongoDB Schema Indexed",
      metric: "Sub-50ms Cart Sync",
    },
    caseStudy: {
      problem:
        "Modern online shoppers require instantaneous cart recalculations, responsive product filtering, and frictionless checkout while store managers need role-protected inventory controls.",
      solution:
        "Engineered a scalable full-stack e-commerce engine with dual customer/admin roles, client-side optimistic cart synchronization, server-validated product totals, and automated inventory depletion.",
      frontend:
        "Built with React and Tailwind CSS featuring dynamic search debouncing, multi-filter category chips, responsive checkout drawers, and optimistic cart updates for instant tactile feedback.",
      backend:
        "Constructed an Express.js backend with robust validation middleware, route-level authorization barriers separating customer carts from administrator product catalogues, and standardized JSON error payloads.",
      database:
        "Engineered a scalable MongoDB schema modeling products, active user sessions, order history, and categorized inventories with compound indexes for rapid query resolution.",
      metrics: [
        { label: "Cart State Consistency", value: "100%" },
        { label: "API Response Latency", value: "<75ms" },
        { label: "Role Separation", value: "Customer / Admin" },
        { label: "Database Engine", value: "MongoDB Atlas" },
      ],
    },
  },
  {
    id: "news-alerts",
    number: "03",
    total: "04",
    title: "Real Time News & Alert Platform",
    category: "realtime",
    badge: "Real-Time MERN",
    authHighlight: "User Auth & Admin Publishing Roles",
    tagline: "Low-Latency Event Broadcasting with Socket.IO & Express",
    description:
      "A high-performance news application delivering real-time news alerts using Socket.IO, category-based filtering, keyword search, token authentication, and a secure admin editorial portal for publishing breaking news updates.",
    features: [
      "User Authentication & Session Management",
      "Real-Time Alert Broadcasting with Socket.IO",
      "Live News Category Filtering & Instant Search",
      "Admin News Management & Verification Dashboard",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.IO",
      "REST APIs",
    ],
    githubFrontend: "https://github.com/anuruddh123/news-alerts-frontend",
    githubBackend: "https://github.com/anuruddh123/news-alerts-backend",
    demo: "https://news-alertss.netlify.app",
    domain: "news-alertss.netlify.app",
    accentColor: "#8b5cf6",
    accentGlow: "rgba(139, 92, 246, 0.25)",
    emoji: "🌐",
    pipeline: [
      { step: "Client", label: "React + Socket Listener", sub: "Live Broadcast Alert Ticker", key: "React.js" },
      { step: "Event Bus", label: "Socket.IO Engine", sub: "Bi-Directional Event Propagation", key: "Socket.IO" },
      { step: "Server", label: "Node & Express Backend", sub: "Admin Editorial & Alert Dispatch", key: "Express.js" },
      { step: "Data Store", label: "MongoDB Atlas Cluster", sub: "Time-Series News Feeds & Users", key: "MongoDB" },
    ],
    telemetry: {
      live: "200 OK • WebSocket Connected",
      auth: "Editorial JWT Active",
      api: "Socket.IO + REST v2",
      database: "MongoDB Real-Time Stream",
      metric: "12ms Broadcast Latency",
    },
    caseStudy: {
      problem:
        "Traditional polling-based news websites suffer from high server overhead, delayed breaking news notifications, and high database connection exhaustion during traffic surges.",
      solution:
        "Implemented an event-driven broadcast architecture combining Socket.IO duplex channels with RESTful endpoints, ensuring readers receive breaking bulletins in sub-20ms with minimal network footprint.",
      frontend:
        "Created an ambient, high-contrast dark newsroom UI in React with live ticker animations, instant category switching, search-as-you-type, and push notification toasts.",
      backend:
        "Engineered dual-layer Node.js backend running Express for CRUD news authoring and Socket.IO for publishing event rooms, throttled event broadcasting, and JWT-authenticated editorial desks.",
      database:
        "MongoDB time-sorted article collection with TTL indexes for ephemeral alerts and text indexes enabling rapid full-text news searches across historical archives.",
      metrics: [
        { label: "Broadcast Latency", value: "<20ms" },
        { label: "Connection Protocol", value: "WebSocket / WSS" },
        { label: "Editorial Gate", value: "JWT Protected" },
        { label: "Feed Ingestion", value: "Automated" },
      ],
    },
  },
  {
    id: "quickbite",
    number: "04",
    total: "04",
    title: "QuickBite Restaurant App",
    category: "mern",
    badge: "Hero Project • MERN Restaurant App",
    authHighlight: "JWT Auth & Role-Based Dashboards",
    tagline: "End-to-End Culinary Ordering & Live Kitchen Workflow",
    description:
      "A comprehensive food ordering web application with customer menu browsing, real-time cart handling, order status tracking, and a full-featured admin dashboard for managing food menus, pricing, and active customer orders.",
    features: [
      "JWT Authentication & Role-Based Access Control",
      "Dynamic Cart & Online Order Placement",
      "Admin Menu CRUD & Real-Time Order Management",
      "Optimized MongoDB Aggregation & Scalable API",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
    githubFrontend: "https://github.com/anuruddh123/quick-bite",
    githubBackend: null, // Backend repo removed as explicitly requested
    demo: "https://quickbiterest.netlify.app/",
    domain: "quickbiterest.netlify.app",
    accentColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.25)",
    emoji: "👨‍🍳",
    pipeline: [
      { step: "Client", label: "React Menu & Cart Store", sub: "Dish Customizer & Order Form", key: "React.js" },
      { step: "Security", label: "JWT Role Middleware", sub: "Separates Diners from Kitchen Staff", key: "JWT" },
      { step: "Backend", label: "Express Order Dispatch", sub: "Kitchen Queue & Status Machine", key: "Express.js" },
      { step: "Data Store", label: "MongoDB Aggregation", sub: "Menu Categories & Live Tickets", key: "MongoDB" },
    ],
    telemetry: {
      live: "200 OK • Deployed on Netlify",
      auth: "Kitchen & Diner Roles",
      api: "Express REST Order API",
      database: "MongoDB Aggregation Ready",
      metric: "Live Order Status Sync",
    },
    caseStudy: {
      problem:
        "Restaurants require a streamlined digital ordering workflow that connects diners' custom culinary choices directly to kitchen management without latency or order discrepancies.",
      solution:
        "Developed an all-in-one culinary ordering portal featuring customized menu selection, synchronized shopping carts, order status transitions (Received -> In Kitchen -> Dispatched), and a secure administrative kitchen console.",
      frontend:
        "Built with React and Tailwind CSS featuring appetizing visual food cards, category filter tabs, interactive item quantity steppers, and dynamic order confirmation dialogues.",
      backend:
        "Node.js and Express REST API architecture with role-based routing protecting kitchen operations, atomic status update controllers, and payload input validation.",
      database:
        "Optimized MongoDB schema leveraging aggregation pipelines to retrieve categorized menu items, calculate sales metrics, and persist active order tickets.",
      metrics: [
        { label: "Order Lifecycle", value: "3-Stage Tracking" },
        { label: "Menu CRUD Suite", value: "100% Dynamic" },
        { label: "Cart Engine", value: "Instant Calcs" },
        { label: "Dashboard Roles", value: "Customer / Admin" },
      ],
    },
  },
];

// Custom GitHub SVG Icon
function GithubIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

// Simulated High-Fidelity Browser Canvas Previews
function BrowserMockupScreen({ project }) {
  if (project.id === "resume-tailor") {
    return (
      <div className="h-full w-full bg-slate-950 p-4 flex flex-col justify-between select-none text-left font-sans">
        {/* Top App Header */}
        <div className="flex items-center justify-between border-b border-indigo-500/20 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
              RT
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">ResumeTailor AI</p>
              <p className="text-[10px] text-indigo-400 font-mono">ATS Match Engine v2.4</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Role: Developer
            </span>
          </div>
        </div>

        {/* Middle Canvas: ATS Score & Keyword Detection */}
        <div className="grid grid-cols-12 gap-3 my-auto py-2">
          {/* Score Circular Gauge */}
          <div className="col-span-5 bg-indigo-950/40 border border-indigo-500/20 rounded-xl p-3 flex flex-col items-center justify-center text-center">
            <div className="relative h-16 w-16 flex items-center justify-center">
              <svg className="h-16 w-16 -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#6366f1"
                  strokeDasharray="94, 100"
                  strokeWidth="3.5"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-base font-extrabold text-white">94%</span>
                <span className="text-[8px] text-indigo-300 font-mono">ATS SCORE</span>
              </div>
            </div>
            <p className="mt-2 text-[10px] font-semibold text-emerald-400">High Match Potential</p>
          </div>

          {/* Keywords & Gap Analysis */}
          <div className="col-span-7 bg-slate-900/80 border border-white/10 rounded-xl p-3 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <Check className="h-3 w-3 text-emerald-400" />
                Detected Keyword Alignments
              </p>
              <div className="flex flex-wrap gap-1">
                {["React.js", "Node.js", "REST APIs", "JWT Auth", "MongoDB", "Tailwind"].map((kw) => (
                  <span
                    key={kw}
                    className="px-1.5 py-0.5 rounded bg-indigo-500/20 border border-indigo-500/30 text-indigo-200 text-[9px] font-mono"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px]">
              <span className="text-slate-400 font-mono">PDF Schema Export</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <FileText className="h-3 w-3" /> Ready
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Bar */}
        <div className="bg-slate-900/90 border border-white/10 rounded-lg px-3 py-2 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
            <span className="font-mono">JWT Bearer Authenticated</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-indigo-600 text-white font-medium">
            Live Preview
          </span>
        </div>
      </div>
    );
  }

  if (project.id === "ecommerce") {
    return (
      <div className="h-full w-full bg-slate-950 p-4 flex flex-col justify-between select-none text-left font-sans">
        {/* Storefront Navigation */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
              SV
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">ShopVista Store</p>
              <p className="text-[10px] text-emerald-400 font-mono">Full-Stack MERN Hub</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono flex items-center gap-1.5">
              <ShoppingCart className="h-3 w-3 text-emerald-400" />
              <span>Cart: 3 items</span>
              <span className="font-bold text-white">$149</span>
            </div>
          </div>
        </div>

        {/* Store Catalog Grid */}
        <div className="grid grid-cols-3 gap-2.5 my-auto py-2">
          {[
            { name: "Pro Headset", price: "$79", tag: "Audio" },
            { name: "Mech Keyboard", price: "$49", tag: "Gear" },
            { name: "Ergo Mouse", price: "$21", tag: "Office" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900/90 border border-white/10 rounded-xl p-2.5 flex flex-col justify-between"
            >
              <div>
                <div className="h-10 rounded-lg bg-gradient-to-br from-emerald-950/60 to-slate-900 border border-emerald-500/20 flex items-center justify-center text-lg mb-1.5">
                  {i === 0 ? "🎧" : i === 1 ? "⌨️" : "🖱️"}
                </div>
                <p className="text-[11px] font-bold text-white leading-snug">{item.name}</p>
                <p className="text-[9px] text-emerald-400 font-mono">{item.tag}</p>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-white">{item.price}</span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-600/30 text-emerald-300 text-[8.5px] font-mono">
                  + Cart
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Cart Status */}
        <div className="bg-slate-900/90 border border-white/10 rounded-lg px-3 py-2 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono">Express REST • MongoDB Index</span>
          </div>
          <span className="text-emerald-400 font-mono font-medium">Admin RBAC</span>
        </div>
      </div>
    );
  }

  if (project.id === "news-alerts") {
    return (
      <div className="h-full w-full bg-slate-950 p-4 flex flex-col justify-between select-none text-left font-sans">
        {/* Newsroom Topbar */}
        <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
              <Radio className="h-4 w-4 text-white animate-pulse" />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-tight">NewsWire Live</p>
              <p className="text-[10px] text-purple-400 font-mono">Socket.IO Broadcast Room</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-mono flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-ping" />
              LIVE STREAM
            </span>
          </div>
        </div>

        {/* Live News Bulletins */}
        <div className="space-y-2 my-auto py-2">
          <div className="bg-gradient-to-r from-purple-950/60 to-slate-900 border border-purple-500/30 rounded-xl p-2.5">
            <div className="flex items-center justify-between text-[9px] font-mono text-purple-300 mb-1">
              <span className="bg-purple-500/20 px-1.5 py-0.5 rounded text-purple-200 uppercase font-bold">
                BREAKING FLASH
              </span>
              <span>Just Now • WebSocket Broadcast</span>
            </div>
            <p className="text-[11px] font-semibold text-white leading-snug">
              Global Tech Summit Unveils Next-Gen Real-Time Web Architectures
            </p>
          </div>

          <div className="bg-slate-900/80 border border-white/10 rounded-xl p-2.5">
            <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 mb-1">
              <span className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-300 uppercase">
                Economy & Markets
              </span>
              <span>2m ago • Verified</span>
            </div>
            <p className="text-[11px] font-semibold text-slate-200 leading-snug">
              Cloud Infrastructure Adoption Surges 42% Year-Over-Year
            </p>
          </div>
        </div>

        {/* Telemetry Footer */}
        <div className="bg-slate-900/90 border border-white/10 rounded-lg px-3 py-2 flex items-center justify-between text-[10px]">
          <div className="flex items-center gap-2 text-purple-300 font-mono">
            <Activity className="h-3 w-3 text-purple-400 animate-pulse" />
            <span>Latency: 12ms (Socket Duplex)</span>
          </div>
          <span className="text-slate-400 font-mono">Admin Portal</span>
        </div>
      </div>
    );
  }

  // QuickBite Restaurant App (Scene 04)
  return (
    <div className="h-full w-full bg-slate-950 p-4 flex flex-col justify-between select-none text-left font-sans">
      {/* QuickBite Navigation */}
      <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-amber-500 to-rose-500 flex items-center justify-center text-white text-xs font-bold shadow-md">
            QB
          </div>
          <div>
            <p className="text-xs font-bold text-white leading-tight">QuickBite Kitchen</p>
            <p className="text-[10px] text-amber-400 font-mono">Live Order Lifecycle Engine</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-mono flex items-center gap-1">
            <UtensilsCrossed className="h-3 w-3 text-amber-400" />
            Order #QB-8492
          </span>
        </div>
      </div>

      {/* Culinary Workflow & Live Pipeline */}
      <div className="my-auto py-2 space-y-2.5">
        {/* Order Progress Tracker */}
        <div className="bg-slate-900/90 border border-amber-500/30 rounded-xl p-2.5">
          <div className="flex items-center justify-between text-[9px] font-mono text-slate-300 mb-2">
            <span>Order Status:</span>
            <span className="text-amber-400 font-bold">PREPARING IN KITCHEN</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-center text-[9px] font-mono">
            <div className="py-1 px-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
              ✓ Confirmed
            </div>
            <div className="py-1 px-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold animate-pulse">
              ● Cooking
            </div>
            <div className="py-1 px-1 rounded bg-slate-800 text-slate-400">
              ○ Dispatch
            </div>
          </div>
        </div>

        {/* Dish Items Preview */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-slate-900/70 border border-white/10 rounded-lg p-2 flex items-center gap-2">
            <span className="text-xl">🍔</span>
            <div className="min-w-0">
              <p className="text-[10.5px] font-bold text-white truncate">Gourmet Burger</p>
              <p className="text-[9px] text-amber-400 font-mono">$12.50 • Qty: 2</p>
            </div>
          </div>
          <div className="bg-slate-900/70 border border-white/10 rounded-lg p-2 flex items-center gap-2">
            <span className="text-xl">🍕</span>
            <div className="min-w-0">
              <p className="text-[10.5px] font-bold text-white truncate">Artisan Truffle Pizza</p>
              <p className="text-[9px] text-amber-400 font-mono">$18.00 • Qty: 1</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Kitchen Console Bar */}
      <div className="bg-slate-900/90 border border-white/10 rounded-lg px-3 py-2 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-2 text-slate-300">
          <ShieldCheck className="h-3.5 w-3.5 text-amber-400" />
          <span className="font-mono">Role: Kitchen Admin & Customer</span>
        </div>
        <span className="text-amber-400 font-mono font-bold">MERN Production</span>
      </div>
    </div>
  );
}

// 3D Tilt Browser Mockup Component
function BrowserSceneMockup({
  project,
  activeHoverKey,
  onOpenCaseStudy,
}) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[560px] mx-auto py-6 sm:py-8 select-none"
      style={{ perspective: 1200 }}
    >
      {/* Background Orbital Glow Ambient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl blur-3xl opacity-35 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${project.accentColor} 0%, transparent 70%)`,
        }}
      />

      {/* ============ FLOATING TELEMETRY LABELS AROUND BROWSER ============ */}
      {/* 1. LIVE Indicator - Top Left */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-3 -left-2 sm:-left-6 z-20 px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 backdrop-blur-md shadow-xl transition-all duration-300 ${
          activeHoverKey === "Live" || activeHoverKey === "React.js"
            ? "scale-110 ring-2 ring-emerald-400 bg-emerald-500/30 text-white shadow-emerald-500/50"
            : "bg-slate-900/90 border border-emerald-500/40 text-emerald-300 shadow-black/60"
        }`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span>LIVE</span>
        <span className="text-[10px] text-emerald-400/80 hidden sm:inline">• 200 OK</span>
      </motion.div>

      {/* 2. AUTH Indicator - Top Right */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className={`absolute -top-3 -right-2 sm:-right-6 z-20 px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 backdrop-blur-md shadow-xl transition-all duration-300 ${
          activeHoverKey === "JWT Auth" || activeHoverKey === "JWT" || activeHoverKey === "Auth Guard"
            ? "scale-110 ring-2 ring-indigo-400 bg-indigo-500/30 text-white shadow-indigo-500/50"
            : "bg-slate-900/90 border border-indigo-500/40 text-indigo-300 shadow-black/60"
        }`}
      >
        <ShieldCheck className="h-3.5 w-3.5 text-indigo-400" />
        <span>AUTH</span>
        <span className="text-[10px] text-indigo-400/80 hidden sm:inline">• JWT/RBAC</span>
      </motion.div>

      {/* 3. API Indicator - Bottom Left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={`absolute -bottom-3 -left-2 sm:-left-6 z-20 px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 backdrop-blur-md shadow-xl transition-all duration-300 ${
          activeHoverKey === "Express.js" || activeHoverKey === "REST APIs" || activeHoverKey === "Socket.IO" || activeHoverKey === "API Gateway"
            ? "scale-110 ring-2 ring-cyan-400 bg-cyan-500/30 text-white shadow-cyan-500/50"
            : "bg-slate-900/90 border border-cyan-500/40 text-cyan-300 shadow-black/60"
        }`}
      >
        <Server className="h-3.5 w-3.5 text-cyan-400" />
        <span>API</span>
        <span className="text-[10px] text-cyan-400/80 hidden sm:inline">• Express REST</span>
      </motion.div>

      {/* 4. DATABASE Indicator - Bottom Right */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className={`absolute -bottom-3 -right-2 sm:-right-6 z-20 px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 backdrop-blur-md shadow-xl transition-all duration-300 ${
          activeHoverKey === "MongoDB" || activeHoverKey === "Data Store"
            ? "scale-110 ring-2 ring-emerald-400 bg-emerald-500/30 text-white shadow-emerald-500/50"
            : "bg-slate-900/90 border border-emerald-500/40 text-emerald-300 shadow-black/60"
        }`}
      >
        <Database className="h-3.5 w-3.5 text-emerald-400" />
        <span>DATABASE</span>
        <span className="text-[10px] text-emerald-400/80 hidden sm:inline">• MongoDB</span>
      </motion.div>

      {/* ============ 3D TILT BROWSER FRAME ============ */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        onClick={onOpenCaseStudy}
        data-cursor-text="CASE STUDY"
        className={`relative w-full rounded-2xl overflow-hidden bg-slate-950 border transition-all duration-500 cursor-pointer shadow-2xl group ${
          isHovered
            ? "border-cyan-400/70 shadow-[0_25px_60px_rgba(6,182,212,0.25)]"
            : "border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        }`}
      >
        {/* Browser Top Navigation Bar */}
        <div className="bg-slate-900/95 border-b border-white/10 px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-rose-500/90 shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-amber-500/90 shadow-sm" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/90 shadow-sm" />
          </div>

          <div className="flex-1 max-w-[320px] bg-slate-950/90 border border-white/10 rounded-lg px-3 py-1 flex items-center justify-between text-xs font-mono text-slate-300 shadow-inner">
            <div className="flex items-center gap-1.5 min-w-0">
              <Lock className="h-3 w-3 text-emerald-400 flex-shrink-0" />
              <span className="truncate text-slate-200">{project.domain}</span>
            </div>
            <span className="text-[10px] text-slate-500 hidden sm:inline">SSL 256-bit</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              data-cursor-text="OPEN ↗"
              title="Open Deployed Application"
              className="p-1 rounded hover:bg-white/10 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenCaseStudy();
              }}
              title="Expand Full Case Study"
              className="p-1 rounded hover:bg-white/10 hover:text-cyan-300 transition-colors"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Browser Viewport Canvas (Aspect Ratio 16:10) */}
        <div className="relative h-[300px] sm:h-[340px] w-full overflow-hidden bg-slate-950">
          <BrowserMockupScreen project={project} />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div className="px-4 py-2 rounded-xl bg-cyan-600/90 text-white font-mono text-xs font-semibold flex items-center gap-2 shadow-xl border border-cyan-300/40 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <Eye className="h-3.5 w-3.5 text-white" />
              <span>Click to Explore Production Case Study</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Fullscreen Case Study Modal Component
function CaseStudyModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 25 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-950 border border-cyan-500/30 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden z-10 text-left"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/90">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white text-base font-bold shadow-lg">
                {project.number}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <span>{project.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-normal">
                    Case Study
                  </span>
                </h3>
                <p className="text-xs text-slate-400 font-mono">{project.tagline}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Case Study"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2 px-6 py-3 border-b border-white/10 bg-slate-900/50 overflow-x-auto scrollbar-none">
            {[
              { id: "overview", label: "1. System Overview", icon: Eye },
              { id: "frontend", label: "2. Frontend Engineering", icon: Layers },
              { id: "backend", label: "3. Backend Architecture", icon: Server },
              { id: "database", label: "4. Database & Telemetry", icon: Database },
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-medium flex items-center gap-2 transition-colors whitespace-nowrap ${
                    isSelected
                      ? "text-white font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="modalTabPill"
                      className="absolute inset-0 bg-cyan-600/30 border border-cyan-500/50 rounded-xl"
                    />
                  )}
                  <Icon className={`h-3.5 w-3.5 relative z-10 ${isSelected ? "text-cyan-400" : ""}`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Modal Body Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6 text-slate-300 text-sm leading-relaxed">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase text-cyan-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <Rocket className="h-3.5 w-3.5" /> Problem Statement
                  </h4>
                  <p className="bg-slate-900/80 border border-white/10 rounded-2xl p-4 text-slate-200">
                    {project.caseStudy.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-emerald-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5" /> Engineering Solution
                  </h4>
                  <p className="bg-slate-900/80 border border-white/10 rounded-2xl p-4 text-slate-200">
                    {project.caseStudy.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase text-indigo-400 tracking-wider mb-3 flex items-center gap-1.5">
                    <Activity className="h-3.5 w-3.5" /> Validated Architecture Metrics
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {project.caseStudy.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="bg-slate-900/90 border border-white/10 rounded-2xl p-3 text-center"
                      >
                        <p className="text-xl sm:text-2xl font-black text-white">{m.value}</p>
                        <p className="text-[11px] text-slate-400 font-mono mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "frontend" && (
              <div className="space-y-4">
                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <Layers className="h-4 w-4 text-cyan-400" />
                    Client-Side Architecture & State Management
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{project.caseStudy.frontend}</p>
                </div>

                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5">
                  <h5 className="text-xs font-mono uppercase text-slate-400 mb-3">Key Features Implemented:</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-200">
                        <Check className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "backend" && (
              <div className="space-y-4">
                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <Server className="h-4 w-4 text-indigo-400" />
                    RESTful API & Express Controller Design
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{project.caseStudy.backend}</p>
                </div>

                <div className="bg-indigo-950/30 border border-indigo-500/30 rounded-2xl p-4 flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-indigo-400 flex-shrink-0" />
                  <div>
                    <h5 className="text-xs font-bold text-white font-mono">Authentication Protocol</h5>
                    <p className="text-xs text-indigo-200">{project.authHighlight}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "database" && (
              <div className="space-y-4">
                <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5">
                  <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                    <Database className="h-4 w-4 text-emerald-400" />
                    Data Modeling, Indexing & Cloud Deployment
                  </h4>
                  <p className="text-slate-300 leading-relaxed">{project.caseStudy.database}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-4">
                    <p className="text-xs font-mono text-slate-400 mb-1">Database Provider</p>
                    <p className="text-base font-bold text-emerald-400">MongoDB Atlas Cluster</p>
                    <p className="text-xs text-slate-400 mt-1">Mongoose ODM with index optimization</p>
                  </div>
                  <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-4">
                    <p className="text-xs font-mono text-slate-400 mb-1">Production Hosting</p>
                    <p className="text-base font-bold text-cyan-400">Netlify CDN + Node Server</p>
                    <p className="text-xs text-slate-400 mt-1">Continuous Integration & Automated Builds</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action Buttons */}
          <div className="px-6 py-4 border-t border-white/10 bg-slate-900/90 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={project.githubFrontend}
                target="_blank"
                rel="noreferrer"
                data-cursor-text="CODE"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-xs font-medium text-slate-200 hover:text-white transition-all shadow-sm"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>Frontend Repository</span>
              </a>

              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor-text="CODE"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-xs font-medium text-slate-200 hover:text-white transition-all shadow-sm"
                >
                  <Server className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Backend Repository</span>
                </a>
              )}
            </div>

            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              data-cursor-text="OPEN ↗"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:brightness-110 text-white text-xs font-semibold shadow-lg shadow-cyan-500/25 transition-all"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Launch Live Application</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export function Projects() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [activeHoverKey, setActiveHoverKey] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const activeProject = projects[activeSceneIndex];

  const handleNextScene = () => {
    setActiveSceneIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrevScene = () => {
    setActiveSceneIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden bg-gradient-to-b from-[#040816] via-[#020914] to-[#040816] text-white"
    >
      {/* Background Orbital Telemetry & Cyan Radar Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-radar-grid opacity-70" />
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full blur-[140px] -z-10"
          style={{ background: activeProject.accentGlow }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-left mb-12"
        >
          {/* Section Label: 03 / SELECTED WORK */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Rocket className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>03 / SELECTED WORK • PRODUCTION LAB</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05] uppercase">
            Things I've{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              built.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
            Scroll-driven case study scenes highlighting end-to-end full-stack architectures, live token authorization, verified REST pipelines, and production deployments.
          </p>
        </motion.div>

        {/* ============ MISSION CONTROL SCENE TIMELINE DOCK ============ */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10">
          {projects.map((proj, idx) => {
            const isSelected = activeSceneIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => setActiveSceneIndex(idx)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-mono transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? "text-white font-bold shadow-lg shadow-cyan-500/25 border border-cyan-400/40"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-white/10 hover:border-cyan-500/30"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeSceneTimeline"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-2xl -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="font-bold text-cyan-300">{proj.number}</span>
                <span className="truncate max-w-[130px] sm:max-w-none">{proj.title.split(" ")[0]}</span>
                {isSelected && (
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* ============ CINEMATIC PRODUCTION LAB SCENE ============ */}
        <div className="relative min-h-[580px] rounded-3xl border border-white/10 bg-slate-950/70 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          {/* Top Scene Controls Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 font-mono text-xs font-semibold">
                SCENE {activeProject.number} / {activeProject.total}
              </span>
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                {activeProject.badge}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevScene}
                aria-label="Previous Project Scene"
                className="p-2 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="px-2 font-mono text-xs text-slate-400">
                {activeSceneIndex + 1} of {projects.length}
              </div>
              <button
                onClick={handleNextScene}
                aria-label="Next Project Scene"
                className="p-2 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Scene Transition Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: -20 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* ============ LEFT COLUMN: Project Details & Data Flow Pipeline ============ */}
              <div className="lg:col-span-6 flex flex-col text-left space-y-5">
                {/* Project Number & Badge */}
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                    {activeProject.number}
                  </span>
                  <span className="text-slate-500 font-mono text-xl">/ {activeProject.total}</span>
                  <span className="ml-2 inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-slate-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {activeProject.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {activeProject.title}
                  </h3>
                  <p className="text-sm font-mono text-cyan-300 mt-1">{activeProject.tagline}</p>
                </div>

                {/* Auth & Security Highlight Pill */}
                {activeProject.authHighlight && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-200 text-xs font-medium self-start backdrop-blur-sm">
                    <ShieldCheck className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                    <span>{activeProject.authHighlight}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  {activeProject.description}
                </p>

                {/* ============ ARCHITECTURE DATA FLOW PIPELINE ============ */}
                <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-3.5 sm:p-4 space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-300 font-bold">
                      <Layers className="h-3.5 w-3.5 text-cyan-400" />
                      End-to-End Pipeline Architecture
                    </span>
                    <span className="text-[10px] text-slate-500 hidden sm:inline">
                      Hover step to inspect
                    </span>
                  </div>

                  {/* Flow Nodes Pipeline */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {activeProject.pipeline.map((step, idx) => {
                      const isHovered = activeHoverKey === step.key || activeHoverKey === step.step;
                      return (
                        <div
                          key={idx}
                          onMouseEnter={() => setActiveHoverKey(step.key)}
                          onMouseLeave={() => setActiveHoverKey(null)}
                          className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                            isHovered
                              ? "bg-cyan-500/20 border-cyan-400 shadow-md shadow-cyan-500/20 text-white"
                              : "bg-slate-950/70 border-white/10 text-slate-300 hover:border-white/20"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1 text-[9px] font-mono">
                            <span className="text-cyan-400 font-bold">{step.step}</span>
                            <span className="text-slate-500">0{idx + 1}</span>
                          </div>
                          <p className="text-[11px] font-bold text-white leading-tight truncate">
                            {step.label}
                          </p>
                          <p className="text-[9px] text-slate-400 truncate mt-0.5">{step.sub}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* ============ TECHNOLOGY STACK PILLS ============ */}
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Verified Production Stack:
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {activeProject.stack.map((tech) => {
                      const isHovered = activeHoverKey === tech;
                      return (
                        <button
                          key={tech}
                          onMouseEnter={() => setActiveHoverKey(tech)}
                          onMouseLeave={() => setActiveHoverKey(null)}
                          className={`px-3 py-1 rounded-xl text-xs font-mono font-medium border transition-all duration-200 ${
                            isHovered
                              ? "bg-cyan-500/25 border-cyan-400 text-white shadow-lg shadow-cyan-500/30 scale-105"
                              : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-white/25"
                          }`}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ============ ACTION BUTTONS ============ */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {/* Case Study Trigger */}
                  <button
                    onClick={() => setSelectedCaseStudy(activeProject)}
                    data-cursor-text="CASE STUDY"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 transition-all"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Explore Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  {/* Live URL */}
                  <a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-text="OPEN ↗"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-white text-xs sm:text-sm font-medium shadow-sm transition-all"
                  >
                    <Globe className="h-4 w-4 text-cyan-400" />
                    <span>Live Demo</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </a>

                  {/* Frontend GitHub */}
                  <a
                    href={activeProject.githubFrontend}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-text="CODE"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-slate-200 hover:text-white text-xs sm:text-sm font-medium shadow-sm transition-all"
                    title="Frontend Source Code (GitHub)"
                  >
                    <GithubIcon className="h-4 w-4" />
                    <span>Frontend</span>
                  </a>

                  {/* Backend GitHub if available */}
                  {activeProject.githubBackend && (
                    <a
                      href={activeProject.githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-text="CODE"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/15 text-slate-200 hover:text-white text-xs sm:text-sm font-medium shadow-sm transition-all"
                      title="Backend Source Code (GitHub)"
                    >
                      <Server className="h-4 w-4 text-indigo-400" />
                      <span>Backend</span>
                    </a>
                  )}
                </div>
              </div>

              {/* ============ RIGHT COLUMN: 3D Tilt Browser Mockup ============ */}
              <div className="lg:col-span-6 flex flex-col items-center justify-center">
                <BrowserSceneMockup
                  project={activeProject}
                  activeHoverKey={activeHoverKey}
                  onOpenCaseStudy={() => setSelectedCaseStudy(activeProject)}
                />

                {/* Sub-browser Hint */}
                <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Interactive 3D Preview • Click frame to expand architectural case study</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom All Repositories Link */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/anuruddh123"
            target="_blank"
            rel="noreferrer"
            data-cursor-text="GITHUB ↗"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-lg bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-200 hover:text-white"
          >
            <GithubIcon className="h-4 w-4" />
            <span>Explore All Repositories on GitHub (anuruddh123)</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Fullscreen Case Study Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={Boolean(selectedCaseStudy)}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}

export default Projects;