import { motion } from "framer-motion";
import { Code2, Server, Database, GitBranch } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "REST APIs",
    desc: "Designing clean, resource-driven endpoints with proper status codes, validation, and error handling.",
  },
  {
    icon: GitBranch,
    title: "UI/UX Design",
    desc: "Creating intuitive user interfaces with a focus on usability and accessibility.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Modeling schemas in MongoDB with references, indexes, and aggregation pipelines in mind.",
  },
  {
    icon: Server,
    title: "CRUD Operations",
    desc: "Full create-read-update-delete cycles wired from React forms down to the database layer.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <span className="font-mono text-sm text-indigo-400">
              01. About
            </span>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
              A bit about me
            </h2>

            <div className="mt-5 space-y-4 text-slate-400 leading-relaxed">
              <p>
              I am a B.Tech graduate in Computer Science & Engineering from Lucknow Institute of Technology
               with a CGPA of 8.1. I am a passionate MERN Stack Developer who enjoys building responsive, scalable,
                and user-friendly web applications while continuously learning modern web technologies.
              </p>

              <p>
                To strengthen my practical skills, I completed a 7-month MERN Stack Development program from GUVI,
                 an HCL Group company and an IIT Madras-incubated EdTech platform. Through hands-on projects,
                  I gained experience with MongoDB, Express.js, React.js, Node.js, REST APIs, Git, and responsive web development,
                   and I am now seeking an opportunity to begin my career as a MERN Stack Developer.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 transition-colors hover:border-indigo-500/30 hover:bg-slate-900/80"
              >
                <span className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-indigo-500/10 text-indigo-400">
                  <h.icon className="h-5 w-5" />
                </span>

                <h3 className="text-base font-semibold text-white">
                  {h.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {h.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}