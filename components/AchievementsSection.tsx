'use client';

import { motion } from 'framer-motion';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="scroll-mt-28 rounded-[40px] border border-white/10 bg-slate-950/80 p-6 shadow-glass backdrop-blur-xl sm:p-10">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.32em] text-indigo-300">Achievements</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Awards & Recognition</h2>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="glass rounded-[32px] border border-white/10 p-8 shadow-glass">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-200">Cynosure 2K25</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">1st Prize in Website Designing</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">Won the website designing competition organized by KITE Institution, Coimbatore, with a premium UI and strong usability focus.</p>
          </div>
          <div className="rounded-[28px] bg-indigo-500/10 px-6 py-5 text-white shadow-glass border border-indigo-400/20">
            <p className="text-xs uppercase tracking-[0.35em] text-indigo-100">Prize Amount</p>
            <p className="mt-2 text-3xl font-semibold">₹600</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
