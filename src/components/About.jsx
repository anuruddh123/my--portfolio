import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link2, Award, Code2, Briefcase, GraduationCap, Globe } from "lucide-react";

const profile = {
  name: "Anuruddh Tiwari",
  role: "MERN Stack Developer",
  phone: "+91 7307122757",
  email: "anuruddh@email.com",
  location: "Lucknow, Uttar Pradesh",
  image: "/profile.png", // apni photo ka path
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
      {/* Dark background with glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[400px] w-[600px] sm:h-[500px] sm:w-[900px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[100px] sm:blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <span className="font-mono text-xs sm:text-sm text-indigo-400">01. About</span>
          <h2 className="mt-2 sm:mt-3 font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            A bit about me
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          {/* ============ LEFT : ABOUT CARD ============ */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -0.3 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="group relative">
              {/* Stacked paper effect - hidden on mobile for simplicity */}
              <div className="absolute inset-0 hidden sm:block translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rotate-[1.2deg] sm:rotate-[1.6deg] rounded-sm bg-[#e6e2d8] shadow-xl sm:shadow-2xl shadow-black/40 sm:shadow-black/60" />
              <div className="absolute inset-0 hidden sm:block translate-x-1 translate-y-1 sm:translate-x-1.5 sm:translate-y-1.5 rotate-[0.6deg] sm:rotate-[0.8deg] rounded-sm bg-[#efece3] shadow-lg sm:shadow-xl shadow-black/30 sm:shadow-black/50" />

              {/* Main Paper Card */}
              <div
                className="relative rounded-sm bg-[#faf8f3] px-5 py-6 sm:px-8 sm:py-10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] sm:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)]"
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
                <div className="pointer-events-none absolute -top-2 sm:-top-3 left-4 sm:left-8 h-4 sm:h-6 w-16 sm:w-24 rotate-[-6deg] bg-yellow-200/40 shadow-sm backdrop-blur-[1px] hidden sm:block" />
                <div className="pointer-events-none absolute -top-2 sm:-top-3 right-4 sm:right-8 h-4 sm:h-6 w-16 sm:w-24 rotate-[5deg] bg-yellow-200/40 shadow-sm backdrop-blur-[1px] hidden sm:block" />

                {/* ---- HEADER ---- */}
                <div className="relative border-b-2 border-slate-800 pb-3 sm:pb-4">
                  <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
                    {profile.name}
                  </h1>
                  <p className="mt-1 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-indigo-700">
                    {profile.role}
                  </p>

                  {/* Contact Info - Stack on mobile, grid on larger screens */}
                  <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-x-3 sm:gap-y-2 text-[11px] sm:text-[11.5px] text-slate-700">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-indigo-700" />
                      {profile.phone}
                    </span>
                    <span className="text-slate-400 hidden sm:inline">|</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-indigo-700" />
                      {profile.email}
                    </span>
                    <span className="text-slate-400 hidden sm:inline">|</span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-indigo-700" />
                      {profile.location}
                    </span>
                  </div>
                </div>

                {/* ---- PROFESSIONAL SUMMARY ---- */}
                <div className="relative mt-4 sm:mt-6">
                  <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-800">
                    Professional Summary
                  </h3>
                  <div className="mt-1 h-px w-full bg-slate-300" />
                  <p className="mt-2 sm:mt-3 text-xs sm:text-[12.5px] leading-relaxed text-slate-700">
                    {summary}
                  </p>
                </div>

                {/* ---- EDUCATION ---- */}
                <div className="relative mt-4 sm:mt-6">
                  <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-800">
                    Education
                  </h3>
                  <div className="mt-1 h-px w-full bg-slate-300" />
                  
                  <div className="mt-2 sm:mt-3 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      <p className="text-xs sm:text-[13px] font-bold text-slate-900">
                        {education.school}
                      </p>
                      <p className="text-[10px] sm:text-[11.5px] text-slate-600">{education.place}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      <p className="text-xs sm:text-[12.5px] italic text-slate-700">
                        {education.degree} <span className="font-semibold">({education.cgpa})</span>
                      </p>
                      <p className="text-[10px] sm:text-[11.5px] italic text-slate-600">
                        {education.duration}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ---- TRAINING ---- */}
                <div className="relative mt-4 sm:mt-6">
                  <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-800">
                    Training & Certification
                  </h3>
                  <div className="mt-1 h-px w-full bg-slate-300" />
                  
                  <div className="mt-2 sm:mt-3">
                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                      <p className="text-xs sm:text-[13px] font-bold text-slate-900">
                        {training.role}
                      </p>
                      <p className="text-[10px] sm:text-[11.5px] italic text-slate-600">
                        {training.duration}
                      </p>
                    </div>
                    <p className="text-xs sm:text-[12.5px] italic text-slate-700">{training.org}</p>
                    <p className="mt-2 text-xs sm:text-[12.5px] leading-relaxed text-slate-700">
                      {training.desc}
                    </p>
                  </div>
                </div>

                {/* ---- TECHNICAL SKILLS GRID ---- */}
                <div className="relative mt-4 sm:mt-6">
                  <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-800">
                    Technical Skills
                  </h3>
                  <div className="mt-1 h-px w-full bg-slate-300" />
                  
                  <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {highlights.map((h, i) => (
                      <motion.div
                        key={h.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white/50 p-3 sm:p-4"
                      >
                        <div className="flex-shrink-0 rounded-lg bg-indigo-50 p-2 sm:p-2.5">
                          <h.icon className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs sm:text-[13px] font-bold text-slate-900">{h.label}</h4>
                          <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-[11.5px] leading-relaxed text-slate-600">
                            {h.skills}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Corner fold shadow */}
                <div className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 sm:h-16 sm:w-16 bg-gradient-to-tl from-black/15 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* ============ RIGHT : 3D PROFILE IMAGE ============ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.25 }}
            className="lg:col-span-5 flex justify-center lg:sticky lg:top-24"
          >
            <div className="relative w-fit">
              {/* Glow effect */}
              <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-30 blur-2xl sm:blur-3xl" />

              

            

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.04, rotate: 1.5 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="relative h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 overflow-hidden rounded-full border-4 sm:border-[6px] border-slate-900 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.8)] sm:shadow-[0_35px_70px_-15px_rgba(0,0,0,0.9)]"
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-white/10" />
              </motion.div>

              {/* Floating icon chips - smaller on mobile */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -left-4 sm:-left-6 top-6 sm:top-8 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/90 p-2 sm:p-3 shadow-lg sm:shadow-xl backdrop-blur"
              >
                <Code2 className="h-4 w-4 sm:h-6 sm:w-6 text-indigo-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.8 }}
                className="absolute -right-4 sm:-right-6 bottom-12 sm:bottom-16 rounded-xl sm:rounded-2xl border border-white/10 bg-slate-900/90 p-2 sm:p-3 shadow-lg sm:shadow-xl backdrop-blur"
              >
                <Briefcase className="h-4 w-4 sm:h-6 sm:w-6 text-purple-400" />
              </motion.div>

              {/* CGPA Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-indigo-500/40 bg-slate-900 px-4 py-2 sm:px-5 sm:py-2.5 shadow-lg sm:shadow-xl"
              >
                <span className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-white">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-400" />
                  CGPA 8.1 / 10
                </span>
              </motion.div>
            </div>

            {/* Mini Stats Grid - responsive */}
          
          </motion.div>
        </div>
      </div>
    </section>
  );
}