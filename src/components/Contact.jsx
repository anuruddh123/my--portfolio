import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const name = form[0].value;
  const email = form[1].value;
  const message = form[2].value;

  const phoneNumber = "917307122757"; 

  const text = `Hello Anuruddh,

Name: ${name}
Email: ${email}

Message:
${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    text
  )}`;

  window.open(whatsappURL, "_blank");

  setSent(true);
  setTimeout(() => setSent(false), 4000);
  form.reset();
};

  return (
    <section
      id="contact"
      className="py-24 relative bg-slate-900/30 border-y border-white/5"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="font-mono text-sm text-indigo-400">
            04. Contact
          </span>

          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-white">
            Let's build something
          </h2>

          <p className="mt-3 text-slate-400">
            I'm actively looking for entry-level MERN roles and internships.
            Drop a message and I'll get back to you soon.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="lg:col-span-5 space-y-4"
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "anuruddhtiwari2022@gmail.com",
                href: "mailto:anuruddhtiwari2022@gmail.com",
              },
              {
                icon: GithubIcon,
                label: "GitHub",
                value: "github.com/anuruddh123",
                href: "https://github.com/anuruddh123",
              },
              {
                icon: LinkedinIcon,
                label: "LinkedIn",
                value: "www.linkedin.com/in/anuruddh-tiwari-2842b232a",
                href: "https://www.linkedin.com/in/anuruddh-tiwari-2842b232a",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "kanpur, India",
                href: null,
              },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href || undefined}
                target={c.href ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5 hover:border-indigo-500/30"
              >
                <span className="grid place-items-center h-11 w-11 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <c.icon className="h-5 w-5" />
                </span>

                <div>
                  <p className="text-xs text-slate-500">{c.label}</p>
                  <p className="text-sm text-slate-200">{c.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="lg:col-span-7 p-6 rounded-2xl bg-slate-900/50 border border-white/5"
          >
            <div className="grid sm:grid-cols-2 gap-4">

              <div>
                <label className="text-xs text-slate-300">
                  Name
                </label>

                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-white outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-300">
                  Email
                </label>

                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-white outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-xs text-slate-300">
                Message
              </label>

              <textarea
                rows="5"
                required
                placeholder="Tell me about your project..."
                className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950/50 px-3 py-2 text-white outline-none resize-none focus:border-indigo-500"
              />
                            <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}