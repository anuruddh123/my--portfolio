import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";

const projects = [
  {
    title: "Full Stack E-commerce App",
    description:
      "Built a full-stack shopping platform with product management, user authentication, cart functionality, and a responsive UI using the MERN stack.",
    features: [
      "JWT Auth",
      "Admin Panel",
      "Responsive Design",
      "Product CRUD",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    github: "https://github.com/anuruddh123/e-commerce-frontend",
    demo: "https://try-me-frontend.netlify.app",
    gradient: "from-indigo-600/30 via-blue-600/20 to-transparent",
    emoji: "🛒",
  },
  {
    title: "Real Time News App",
    description:
      "Developed a responsive news application with real-time news fetching, category-based filtering, search functionality, and a user-friendly interface using React.js and API integration.",
    features: [
  "User Authentication",
  "Live News Fetching",
  "Category Filtering",
  "Admin News Management",
   ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.IO", "API Integration"],
    github: "https://github.com/anuruddh123/news-alerts-frontend",
    demo: "https://news-alertss.netlify.app",
    gradient: "from-violet-600/30 via-purple-600/20 to-transparent",
    emoji: "🌐",
  },
  {
    title: "Quickbite Restaurant App",
    description:
      "Developed a full-stack food ordering platform with online delivery, menu management, cart functionality, and an admin dashboard for managing products and orders using the MERN stack.",
    features: [
     "Online Food Ordering",
     "Admin Dashboard",
     "Menu & Product Management",
     "Cart and Order Management",
     ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/anuruddh123/quick-bite",
    demo: "https://quickbiterest.netlify.app/",
    gradient: "from-emerald-600/30 via-teal-600/20 to-transparent",
    emoji: "👨‍🍳",
  },
];

function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-sm text-indigo-400">
            03. Projects
          </span>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Things I've built
          </h2>

          <p className="mt-3 text-slate-400">
            Three MERN projects that show my handle on full stack flow — from
            database schema to React UI.
          </p>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
              }}
              className="group flex flex-col rounded-2xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/40 overflow-hidden shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-indigo-900/20 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div
                className={`relative h-40 bg-gradient-to-br ${p.gradient} border-b border-white/5 overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="absolute inset-0 grid place-items-center">
                  <span className="text-5xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {p.emoji}
                  </span>
                </div>

                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="grid place-items-center h-9 w-9 rounded-lg bg-slate-950/70 backdrop-blur border border-white/10 text-slate-200 hover:text-white hover:bg-slate-900 transition-colors"
                    aria-label="GitHub repo"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>

                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="grid place-items-center h-9 w-9 rounded-lg bg-slate-950/70 backdrop-blur border border-white/10 text-slate-200 hover:text-white hover:bg-slate-900 transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors">
                  {p.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {p.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <Check className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex items-center gap-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Code
                  </a>

                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;