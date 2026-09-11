import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Sparkles,
  Phone,
  Activity,
  ArrowUpRight,
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

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("anuruddhtiwari2022@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsTransmitting(true);

    const phoneNumber = "917307122757";
    const text = `Hello Anuruddh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setIsTransmitting(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    }, 750);
  };

  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-[#02040a] via-[#100618] to-[#02040a] text-white select-none"
    >
      {/* Background Signal Grid */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-signal-grid opacity-60" />
        <div className="absolute -bottom-24 left-1/3 w-[550px] h-[550px] bg-rose-500/10 rounded-full blur-[150px]" />
        <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 z-10 space-y-16">
        
        {/* =========================================================
            EDITORIAL HEADER (NO CARDS / ASYMMETRIC)
            ========================================================= */}
        <div className="text-left space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 font-mono text-xs shadow-[0_0_15px_rgba(244,63,94,0.15)]">
            <Sparkles className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
            <span>05 // COMMUNICATION TERMINAL • DIRECT UPLINK</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] uppercase">
            Let's build{" "}
            <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
              something useful.
            </span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Direct developer uplink for junior full-stack opportunities, technical interviews, and production collaboration.
          </p>
        </div>

        {/* =========================================================
            RESPONSIVE DUAL-PANE COMMUNICATION TERMINAL
            ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* ============ LEFT PANE: System Status & Direct Channels ============ */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Uplink Status Banner */}
            <div className="p-6 rounded-3xl bg-slate-950/80 border border-emerald-500/30 shadow-xl backdrop-blur-xl space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  UPLINK READINESS
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-bold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE
                </span>
              </div>

              <div>
                <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wide">
                  AVAILABLE FOR:
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1 leading-tight">
                  Junior Full-Stack / MERN Opportunities
                </h3>
              </div>

              <p className="text-xs text-slate-400 font-mono leading-relaxed">
                Immediate joining available • Open to remote, hybrid, or on-site roles across India.
              </p>
            </div>

            {/* Channels Directory */}
            <div className="space-y-3 font-mono text-xs">
              {/* Email with One-Click Copy */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-8 w-8 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 flex-shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="text-slate-200 truncate">anuruddhtiwari2022@gmail.com</span>
                </div>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-rose-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1 flex-shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Direct Uplink */}
              <a
                href="https://wa.me/917307122757"
                target="_blank"
                rel="noreferrer"
                data-cursor-text="WHATSAPP"
                className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-emerald-500/40 flex items-center justify-between gap-3 transition-all group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="text-slate-200">+91 7307122757</span>
                </div>
                <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                  WhatsApp ↗
                </span>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center gap-3 text-slate-300">
                <div className="h-8 w-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>Kanpur, Uttar Pradesh, India</span>
              </div>
            </div>

            {/* Social Uplinks Buttons */}
            <div className="grid grid-cols-2 gap-3 pt-1 font-mono text-xs">
              <a
                href="https://github.com/anuruddh123"
                target="_blank"
                rel="noreferrer"
                data-cursor-text="GITHUB ↗"
                className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 flex items-center justify-center gap-2 text-slate-200 transition-all shadow-sm"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub Repos</span>
              </a>

              <a
                href="https://www.linkedin.com/in/anuruddh-tiwari-2842b232a"
                target="_blank"
                rel="noreferrer"
                data-cursor-text="LINKEDIN ↗"
                className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 flex items-center justify-center gap-2 text-slate-200 transition-all shadow-sm"
              >
                <LinkedinIcon className="h-4 w-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* ============ RIGHT PANE: Fully Responsive Developer Console ============ */}
          <div className="lg:col-span-7 w-full select-none">
            <div className="w-full rounded-3xl bg-slate-950/90 border border-rose-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl overflow-hidden text-left">
              
              {/* Terminal Window Header */}
              <div className="px-5 py-3.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-xs text-slate-400 ml-2 truncate">
                    console@anuruddh:~ $ transmit-packet.sh
                  </span>
                </div>
                <span className="font-mono text-[10px] text-rose-400 flex items-center gap-1 flex-shrink-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
                  STATION READY
                </span>
              </div>

              {/* Form Body - Fully Mobile Responsive */}
              <form onSubmit={handleSubmit} className="p-5 sm:p-8 space-y-5 font-mono text-xs">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="text-slate-400 flex items-center gap-2">
                    <span className="text-rose-400">&gt;</span>
                    <span>IDENTIFIER (YOUR NAME):</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Hiring Manager / Tech Lead"
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 text-white text-xs sm:text-sm outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-slate-400 flex items-center gap-2">
                    <span className="text-rose-400">&gt;</span>
                    <span>RETURN ADDRESS (YOUR EMAIL):</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    className="w-full min-h-[48px] px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 text-white text-xs sm:text-sm outline-none transition-all placeholder:text-slate-600"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-slate-400 flex items-center gap-2">
                    <span className="text-rose-400">&gt;</span>
                    <span>PAYLOAD BRIEF (MESSAGE / ROLE OVERVIEW):</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe full-stack role requirements, schedule an interview, or discuss engineering projects..."
                    className="w-full min-h-[110px] px-4 py-3 rounded-xl bg-slate-900/80 border border-white/10 focus:border-rose-400 focus:ring-1 focus:ring-rose-400 text-white text-xs sm:text-sm outline-none transition-all placeholder:text-slate-600 resize-none"
                  />
                </div>

                {/* Status Bar Readout */}
                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>PAYLOAD SIZE: {formData.message.length} BYTES</span>
                  <span className="text-emerald-400 font-bold">READY TO TRANSMIT</span>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isTransmitting}
                  data-cursor-text="TRANSMIT"
                  className="w-full min-h-[48px] py-3.5 rounded-xl bg-gradient-to-r from-rose-500 via-pink-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-mono font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg shadow-rose-500/25 hover:shadow-rose-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isTransmitting ? (
                    <>
                      <Activity className="h-4 w-4 animate-spin" />
                      <span>ENCRYPTING & TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>TRANSMIT MESSAGE →</span>
                    </>
                  )}
                </button>

                {/* Submission Success Alert */}
                <AnimatePresence>
                  {sent && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>Message transmitted successfully! Channel opened via WhatsApp.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}