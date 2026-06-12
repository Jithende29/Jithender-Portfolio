'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  const items = [
    'Full-stack development',
    'Artificial Intelligence',
    'Flutter app development',
    'Product building'
  ];

  return (
    <section id="about" className="scroll-mt-28 rounded-[40px] border border-white/10 bg-slate-950/80 p-6 shadow-glass backdrop-blur-xl sm:p-10">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }}>
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-indigo-300">About Me</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Computer Science & Business Systems Student</h2>
          </div>
          <div className="rounded-3xl border border-indigo-500/20 bg-indigo-500/10 px-5 py-4 text-sm text-slate-100">
            Sri Eshwar College of Engineering • 2023-2027
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-5 text-slate-300">
            <p className="text-lg leading-8">
              I am a Computer Science and Business Systems student at Sri Eshwar College of Engineering. I enjoy creating scalable applications and solving practical problems using technology.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {items.map((skill) => (
                <div key={skill} className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-sm text-slate-100 shadow-sm transition hover:border-indigo-400/30 hover:bg-slate-900/90">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-6 shadow-glass backdrop-blur-xl">
            <div className="space-y-4 text-slate-200">
              <div className="rounded-3xl bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-indigo-300">Academic</p>
                <p className="mt-2 text-3xl font-semibold text-white">CGPA 7.2</p>
              </div>
              <div className="space-y-2 rounded-3xl border border-white/10 bg-slate-950/90 p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Timeline</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-base font-semibold text-white">Sri Eshwar College of Engineering</p>
                    <p className="text-sm text-slate-400">B.Tech CSBS • 2023-2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
