import { Heart } from "lucide-react";

function GithubIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Anuruddh Tiwari. All rights reserved.
        </p>

        <p className="text-sm text-slate-500 flex items-center gap-1.5">
          Built with{" "}
          <Heart className="h-3.5 w-3.5 text-rose-500" /> using the MERN Stack
        </p>

        <a
          href="https://github.com/anuruddh123"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <GithubIcon className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;