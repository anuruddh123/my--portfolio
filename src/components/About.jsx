import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Award, Code2, Briefcase, GraduationCap, Globe } from "lucide-react";

const profile = {
  name: "Anuruddh Tiwari",
  role: "MERN Stack Developer",
  phone: "+91 7307122757",
  email: "anuruddh@email.com",
  location: "Lucknow, Uttar Pradesh",
};

const summary =
  "Results-driven Full-Stack Developer specializing in the MERN Stack (MongoDB, Express.js, React.js, Node.js). Experienced in designing high-performance web applications, architecting scalable database schemas, and constructing secure, token-based RESTful APIs. Solid foundation in Data Structures, Algorithms, and Object-Oriented Programming (OOP) in Java.";

const education = {
  school: "APJ Abdul Kalam Technical University",
  place: "Lucknow, Uttar Pradesh",
  degree: "B.Tech in Information Technology",
  cgpa: "CGPA: 8.1/10",
  duration: "Sep. 2022 – June 2026",
};

const training = {
  role: "MERN Stack Trainee",
  org: "GUVI (IIT-M Incubated)",
  duration: "7 Months Intensive Program",
  desc: "Completed comprehensive training focused on scalable MERN Stack architecture, RESTful APIs, and modern full-stack development practices.",
};

const highlights = [
  {
    icon: Code2,
    label: "Frontend",
    skills: "React.js, Tailwind CSS, Framer Motion, Redux",
  },
  {
    icon: Briefcase,
    label: "Backend",
    skills: "Node.js, Express.js, RESTful APIs, JWT Auth",
  },
  {
    icon: Globe,
    label: "Database",
    skills: "MongoDB, Mongoose, Schema Design",
  },
  {
    icon: GraduationCap,
    label: "Tools",
    skills: "Git, GitHub, Postman, VS Code, Render",
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-24">
      {/* Dark background with subtle glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[400px] w-[600px] sm:h-[500px] sm:w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <span className="font-mono text-xs sm:text-sm text-indigo-400">01. About</span>
          <h2 className="mt-2 sm:mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            A bit about me
          </h2>
        </motion.div>

        {/* ============ CENTERED ABOUT CARD ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className="group relative">
            {/* Stacked paper effect */}
            <div className="absolute inset-0 hidden sm:block translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rotate-[1deg] rounded-sm bg-[#e6e2d8] shadow-xl sm:shadow-2xl shadow-black/40" />
            <div className="absolute inset-0 hidden sm:block translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 rotate-[0.4deg] rounded-sm bg-[#efece3] shadow-lg sm:shadow-xl shadow-black/30" />

            {/* Main Paper Card */}
            <div
              className="relative rounded-sm bg-[#faf8f3] px-5 py-6 sm:px-10 sm:py-10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] sm:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(0,0,0,0.055) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)",
                backgroundSize: "6px 6px, 11px 11px",
                backgroundPosition: "0 0, 3px 4px",
              }}
            >
              {/* Paper aging overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-sm bg-gradient-to-br from-transparent via-transparent to-amber-900/10" />
              <div className="pointer-events-none absolute inset-0 rounded-sm shadow-[inset_0_0_40px_rgba(120,100,60,0.1)] sm:shadow-[inset_0_0_60px_rgba(120,100,60,0.12)]" />

              {/* Tape strips - hidden on mobile */}
              <div className="pointer-events-none absolute -top-2 sm:-top-3 left-6 sm:left-10 h-4 sm:h-6 w-16 sm:w-24 rotate-[-4deg] bg-yellow-200/50 shadow-sm border border-yellow-300/30 hidden sm:block" />
              <div className="pointer-events-none absolute -top-2 sm:-top-3 right-6 sm:right-10 h-4 sm:h-6 w-16 sm:w-24 rotate-[4deg] bg-yellow-200/50 shadow-sm border border-yellow-300/30 hidden sm:block" />

              {/* ---- HEADER ---- */}
              <div className="relative border-b-2 border-slate-800 pb-4 sm:pb-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
                      {profile.name}
                    </h1>
                    <p className="mt-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-indigo-700">
                      {profile.role}
                    </p>
                  </div>

                  {/* CGPA Badge */}
                  <div className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-full border border-indigo-200 bg-indigo-50/90 px-3.5 py-1.5 shadow-sm">
                    <Award className="h-4 w-4 text-indigo-700" />
                    <span className="text-xs sm:text-[12.5px] font-bold text-indigo-900">
                      CGPA 8.1 / 10
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-x-4 sm:gap-y-2 text-[11px] sm:text-[12px] text-slate-700">
                  <span className="inline-flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-indigo-700" />
                    {profile.phone}
                  </span>
                  <span className="text-slate-400 hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-indigo-700" />
                    {profile.email}
                  </span>
                  <span className="text-slate-400 hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-indigo-700" />
                    {profile.location}
                  </span>
                </div>
              </div>

              {/* ---- PROFESSIONAL SUMMARY ---- */}
              <div className="relative mt-5 sm:mt-6">
                <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-800">
                  Professional Summary
                </h3>
                <div className="mt-1 h-px w-full bg-slate-300" />
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-[13px] leading-relaxed text-slate-700">
                  {summary}
                </p>
              </div>

              {/* ---- EDUCATION & TRAINING (2 COLUMN ON DESKTOP) ---- */}
              <div className="relative mt-6 sm:mt-7 grid sm:grid-cols-2 gap-6 sm:gap-8">
                {/* EDUCATION */}
                <div>
                  <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-800">
                    Education
                  </h3>
                  <div className="mt-1 h-px w-full bg-slate-300" />

                  <div className="mt-3 space-y-1.5">
                    <p className="text-xs sm:text-[13px] font-bold text-slate-900">
                      {education.school}
                    </p>
                    <p className="text-[11px] text-slate-600">{education.place}</p>
                    <p className="text-xs sm:text-[12.5px] italic text-slate-700">
                      {education.degree} <span className="font-semibold text-indigo-900">({education.cgpa})</span>
                    </p>
                    <p className="text-[10.5px] sm:text-[11px] italic text-slate-600">
                      {education.duration}
                    </p>
                  </div>
                </div>

                {/* TRAINING */}
                <div>
                  <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-800">
                    Training & Certification
                  </h3>
                  <div className="mt-1 h-px w-full bg-slate-300" />

                  <div className="mt-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="text-xs sm:text-[13px] font-bold text-slate-900">
                        {training.role}
                      </p>
                      <span className="text-[10px] sm:text-[11px] italic text-slate-600">
                        {training.duration}
                      </span>
                    </div>
                    <p className="text-xs sm:text-[12px] font-medium text-indigo-800 mt-0.5">{training.org}</p>
                    <p className="mt-1.5 text-xs sm:text-[12px] leading-relaxed text-slate-700">
                      {training.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* ---- TECHNICAL SKILLS GRID ---- */}
              <div className="relative mt-6 sm:mt-8">
                <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-800">
                  Technical Skills
                </h3>
                <div className="mt-1 h-px w-full bg-slate-300" />

                <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                  {highlights.map((h) => (
                    <div
                      key={h.label}
                      className="flex flex-col gap-2 rounded-lg border border-slate-200/80 bg-white/70 p-3 sm:p-3.5 shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex-shrink-0 rounded-md bg-indigo-50 p-1.5 text-indigo-600">
                          <h.icon className="h-4 w-4" />
                        </div>
                        <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">{h.label}</h4>
                      </div>
                      <p className="text-[11px] sm:text-[11.5px] leading-relaxed text-slate-600">
                        {h.skills}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner fold shadow */}
              <div className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 sm:h-16 sm:w-16 bg-gradient-to-tl from-black/15 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}