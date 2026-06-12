import { motion } from 'framer-motion';

const skills = ['Full Stack Developer', 'Flutter Developer', 'AI Enthusiast'];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-24">
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(79,70,229,0.2),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_20%)]" />
      <div className="mx-auto relative max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85 }}>
            <p className="mb-5 inline-flex rounded-full border border-indigo-400/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-indigo-200 shadow-glass">
              Hello, I'm Jithender
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              JITHENDER J
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              I build AI-powered applications, web platforms, and mobile experiences that solve real-world problems.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
                View Projects
              </a>
              <a href="/resume.pdf" className="inline-flex items-center justify-center rounded-full border border-indigo-400/20 bg-slate-900/80 px-6 py-3 text-sm text-slate-100 transition hover:border-indigo-300/40 hover:bg-slate-800">
                Download Resume
              </a>
            </div>
            <div className="mt-12 max-w-xl rounded-[28px] border border-white/10 bg-slate-950/80 p-6 shadow-glass backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-200">Roles</p>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {skills.map((skill) => (
                  <div key={skill} className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-100 transition hover:border-indigo-400/30 hover:bg-indigo-500/10">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <div className="glass relative overflow-hidden rounded-[32px] border border-white/10 p-8 shadow-glass">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 opacity-90" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.28em] text-indigo-200">Featured</span>
                  <div className="flex items-center gap-3 text-slate-400">
                    <a href="https://github.com" aria-label="GitHub" className="transition hover:text-white">GitHub</a>
                    <a href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-white">LinkedIn</a>
                    <a href="mailto:jithender.j2023csbs@sece.ac.in" aria-label="Email" className="transition hover:text-white">Email</a>
                  </div>
                </div>
                <div className="space-y-4 rounded-[24px] bg-slate-900/80 p-6 text-slate-200">
                  <p className="text-base leading-7">Full Stack Developer | Flutter Developer | AI Enthusiast</p>
                  <div className="typewriter text-xl font-medium text-white">I build scalable digital products and AI-first experiences.</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-5 shadow-sm border border-white/10">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">CGPA</p>
                    <p className="mt-3 text-3xl font-semibold text-white">7.2</p>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-5 shadow-sm border border-white/10">
                    <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Education</p>
                    <p className="mt-3 text-base text-slate-200">Sri Eshwar College of Engineering</p>
                    <p className="mt-1 text-sm text-slate-500">B.Tech CSBS • 2023-2027</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
