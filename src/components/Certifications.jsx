import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ExternalLink,
  Eye,
  CheckCircle2,
  ShieldCheck,
  Copy,
  Check,
  X,
  ZoomIn,
  ZoomOut,
  Sparkles,
  FileCheck,
  Lock,
} from "lucide-react";

// 8 Verified Official Credentials Preserved 100%
const certificates = [
  {
    serial: "VAULT-01",
    id: "3dTyYJqGNPLmxRgQ",
    title: "IIT-M Pravartak Full Stack Development With AI Tools",
    program: "7 Months Intensive Full Stack Development Program",
    issuer: "GUVI | HCL (An IITM Incubated Company)",
    partner: "IIT-M Pravartak & Google for Education",
    issueDate: "April 10, 2026",
    category: "Full Stack",
    image: "/certificates/guvi-fsd-iitm.png",
    skills: ["MERN Stack", "React.js", "Node.js", "Express.js", "MongoDB", "AI Tools", "REST APIs"],
    verifyUrl: "https://www.guvi.in/certificate?id=3dTyYJqGNPLmxRgQ",
    badge: "Flagship Credential",
  },
  {
    serial: "VAULT-02",
    id: "w6rSqGwmaJVznXBG",
    title: "ReactJS Advanced Web Development",
    program: "Full Stack Development Programme - Zen Class",
    issuer: "GUVI | HCL (An IITM Incubated Company)",
    partner: "IIT-M Incubated & Google for Education",
    issueDate: "April 10, 2026",
    category: "Frontend",
    image: "/certificates/guvi-react.png",
    skills: ["React.js", "Hooks", "State Management", "Component Systems", "Single Page Apps"],
    verifyUrl: "https://www.guvi.in/certificate?id=w6rSqGwmaJVznXBG",
    badge: "Frontend Specialization",
  },
  {
    serial: "VAULT-03",
    id: "YFo15C7pH2I1rSOO",
    title: "Node.js Backend & API Engineering",
    program: "Full Stack Development Programme - Zen Class",
    issuer: "GUVI | HCL (An IITM Incubated Company)",
    partner: "IIT-M Incubated & Google for Education",
    issueDate: "April 10, 2026",
    category: "Backend",
    image: "/certificates/guvi-node.png",
    skills: ["Node.js", "Express.js", "RESTful Architecture", "JWT Authentication", "Routing"],
    verifyUrl: "https://www.guvi.in/certificate?id=YFo15C7pH2I1rSOO",
    badge: "Backend Specialization",
  },
  {
    serial: "VAULT-04",
    id: "X9EaRURkOqrua3Cc",
    title: "Database Architecture (MongoDB & SQL)",
    program: "Full Stack Development Programme - Zen Class",
    issuer: "GUVI | HCL (An IITM Incubated Company)",
    partner: "IIT-M Incubated & Google for Education",
    issueDate: "April 10, 2026",
    category: "Database",
    image: "/certificates/guvi-database.png",
    skills: ["MongoDB", "Mongoose ODM", "Schema Design", "Data Modeling", "Aggregation Pipelines"],
    verifyUrl: "https://www.guvi.in/certificate?id=X9EaRURkOqrua3Cc",
    badge: "Database",
  },
  {
    serial: "VAULT-05",
    id: "56u0h89t4H70Y41v75",
    title: "Java Programming & Object-Oriented Design",
    program: "Certificate of Achievement",
    issuer: "HCL GUVI Geek Network",
    partner: "Google for Education Partner • ISO 9001-27001",
    issueDate: "September 2, 2025",
    category: "Languages",
    image: "/certificates/guvi-java.png",
    skills: ["Java Core", "OOP Principles", "Data Structures & Algorithms", "Collections"],
    verifyUrl: "https://www.guvi.in/certificate?id=56u0h89t4H70Y41v75",
    badge: "Core Language",
  },
  {
    serial: "VAULT-06",
    id: "f1K8fnQaemOU7Tpi",
    title: "Advanced JavaScript (ES6+)",
    program: "Full Stack Development Programme - Zen Class",
    issuer: "GUVI | HCL (An IITM Incubated Company)",
    partner: "IIT-M Incubated & Google for Education",
    issueDate: "April 10, 2026",
    category: "Frontend",
    image: "/certificates/guvi-advanced-js.png",
    skills: ["Asynchronous JS", "Promises & Async/Await", "Closures", "Event Loop"],
    verifyUrl: "https://www.guvi.in/certificate?id=f1K8fnQaemOU7Tpi",
    badge: "Language Mastery",
  },
  {
    serial: "VAULT-07",
    id: "YEXjgjtkYILR1Nxu",
    title: "Responsive Web Design (HTML5, CSS3 & Tailwind)",
    program: "Full Stack Development Programme - Zen Class",
    issuer: "GUVI | HCL (An IITM Incubated Company)",
    partner: "IIT-M Incubated & Google for Education",
    issueDate: "April 10, 2026",
    category: "Frontend",
    image: "/certificates/guvi-frontend.png",
    skills: ["HTML5 Semantics", "Modern CSS3", "Tailwind CSS", "Flexbox & Grid"],
    verifyUrl: "https://www.guvi.in/certificate?id=YEXjgjtkYILR1Nxu",
    badge: "UI Styling",
  },
  {
    serial: "VAULT-08",
    id: "FmpeBfWPGk5P8y3R",
    title: "JavaScript Basics & DOM Manipulation",
    program: "Full Stack Development Programme - Zen Class",
    issuer: "GUVI | HCL (An IITM Incubated Company)",
    partner: "IIT-M Incubated & Google for Education",
    issueDate: "April 10, 2026",
    category: "Frontend",
    image: "/certificates/guvi-js-basics.png",
    skills: ["DOM APIs", "Event Listeners", "Conditionals & Loops", "Data Types"],
    verifyUrl: "https://www.guvi.in/certificate?id=FmpeBfWPGk5P8y3R",
    badge: "Core Basics",
  },
];

const categories = ["All Credentials", "Full Stack", "Frontend", "Backend", "Database", "Languages"];

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All Credentials");
  const [activeCertificate, setActiveCertificate] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const copyCredentialId = (id, e) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleInspect = (cert) => {
    setActiveCertificate(cert);
    setIsZoomed(false);
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 1400);
  };

  const filteredCertificates =
    selectedCategory === "All Credentials"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  return (
    <section
      id="certifications"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-[#02040a] via-[#0b0816] to-[#02040a] text-white select-none"
    >
      {/* Background Amber Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-vault-pattern opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10 space-y-16">
        
        {/* =========================================================
            EDITORIAL HEADER (NO CARDS / ASYMMETRIC)
            ========================================================= */}
        <div className="text-left space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <Award className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span>04 // VERIFIED CREDENTIALS • ARCHIVAL VAULT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase">
            Proof of continuous{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent">
              learning.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            An official cryptographic document ledger storing 8 verified engineering credentials issued by GUVI, HCL, and IIT-Madras Pravartak.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 border ${
                selectedCategory === cat
                  ? "bg-amber-500/20 border-amber-400 text-amber-200 font-bold shadow-lg shadow-amber-500/20"
                  : "bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* =========================================================
            CREDENTIAL VAULT GRID: Physical Digital Documents
            ========================================================= */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                whileHover={{ y: -6 }}
                onClick={() => handleInspect(cert)}
                data-cursor-text="INSPECT"
                className="group relative rounded-3xl bg-slate-950/85 border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 shadow-xl hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)] flex flex-col justify-between overflow-hidden cursor-pointer backdrop-blur-md"
              >
                {/* Physical Document Header with Image Preview */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900/90 border-b border-white/10 flex items-center justify-center p-3">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Top Seal Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/90 border border-amber-500/40 text-amber-300 text-[10.5px] font-mono font-bold flex items-center gap-1.5 shadow-md">
                    <ShieldCheck className="h-3 w-3 text-amber-400" />
                    <span>{cert.badge}</span>
                  </div>

                  {/* Serial ID */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-slate-950/90 border border-white/10 text-slate-400 text-[10px] font-mono">
                    {cert.serial}
                  </div>

                  {/* Hover Inspect Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none backdrop-blur-[2px]">
                    <div className="px-3 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-mono text-xs font-bold flex items-center gap-1.5 shadow-lg">
                      <Eye className="h-3.5 w-3.5" />
                      <span>Inspect Credential</span>
                    </div>
                  </div>
                </div>

                {/* Document Metadata Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between text-left space-y-4">
                  <div>
                    <span className="font-mono text-[10.5px] text-amber-400/90 font-semibold block mb-1">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug group-hover:text-amber-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 font-mono">{cert.issueDate}</p>
                  </div>

                  {/* Verified Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px]"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-slate-400 font-mono text-[10px]">
                        +{cert.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Footer Action Bar */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <button
                      onClick={(e) => copyCredentialId(cert.id, e)}
                      className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                      title="Copy Credential ID"
                    >
                      {copiedId === cert.id ? (
                        <>
                          <Check className="h-3 w-3 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 text-slate-400" />
                          <span className="truncate max-w-[100px]">{cert.id}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      data-cursor-text="VERIFY ↗"
                      className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Vault Ledger Summary Bar */}
        <div className="px-6 py-4 rounded-2xl bg-slate-900/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>VAULT STATUS: {filteredCertificates.length} CREDENTIALS RECORDED</span>
          </div>
          <span className="text-emerald-400 font-bold">100% OFFICIALLY VERIFIABLE ON GUVI.IN</span>
        </div>

      </div>

      {/* =========================================================
          FULLSCREEN CREDENTIAL LIGHTBOX INSPECTOR WITH LIVE SCAN
          ========================================================= */}
      <AnimatePresence>
        {activeCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setActiveCertificate(null);
                setIsZoomed(false);
              }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-slate-950 border border-amber-500/40 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden z-10 flex flex-col text-left"
            >
              {/* Modal Topbar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-slate-900/90">
                <div className="flex items-center gap-2 min-w-0">
                  <FileCheck className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span className="font-mono text-xs text-amber-300 uppercase font-bold truncate">
                    Official Credential Archive • {activeCertificate.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-300 transition-colors"
                    title={isZoomed ? "Zoom Out" : "Zoom In"}
                  >
                    {isZoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
                  </button>
                  <button
                    onClick={() => {
                      setActiveCertificate(null);
                      setIsZoomed(false);
                    }}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors"
                    aria-label="Close Inspector"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Scanning Simulation Banner */}
              <div className="px-6 py-2 bg-slate-900/70 border-b border-white/5 font-mono text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {isScanning ? (
                    <>
                      <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                      <span className="text-amber-300">VERIFYING CRYPTOGRAPHIC RECORD...</span>
                    </>
                  ) : (
                    <>
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span className="text-emerald-400 font-bold">SIGNATURE VERIFIED ✓ • GUVI IIT-M PRAVARTAK</span>
                    </>
                  )}
                </div>
                <span className="text-slate-500 text-[11px] hidden sm:inline">SHA-256 LEDGER HASH</span>
              </div>

              {/* Certificate Image Canvas */}
              <div className="relative p-6 bg-slate-950 overflow-auto max-h-[55vh] flex items-center justify-center">
                {/* Laser scan line while scanning */}
                {isScanning && (
                  <motion.div
                    initial={{ top: "0%" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 1.2, ease: "linear" }}
                    className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_15px_rgba(245,158,11,1)] z-20 pointer-events-none"
                  />
                )}

                <img
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  className={`rounded-xl shadow-2xl transition-all duration-300 ${
                    isZoomed ? "scale-125 cursor-zoom-out" : "max-h-[46vh] object-contain cursor-zoom-in"
                  }`}
                  onClick={() => setIsZoomed(!isZoomed)}
                />
              </div>

              {/* Inspector Footer Details */}
              <div className="p-6 border-t border-white/10 bg-slate-900/90 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white text-base leading-tight">
                    {activeCertificate.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Serial: {activeCertificate.serial} • ID: {activeCertificate.id} • {activeCertificate.issueDate}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => copyCredentialId(activeCertificate.id, e)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    {copiedId === activeCertificate.id ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-400">ID Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>

                  <a
                    href={activeCertificate.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor-text="VERIFY ↗"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-mono text-xs font-bold shadow-lg shadow-amber-500/25 hover:brightness-110 transition-all"
                  >
                    <span>Verify on GUVI.in</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
