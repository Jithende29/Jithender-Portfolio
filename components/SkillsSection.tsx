'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/skills';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 rounded-[40px] border border-white/10 bg-slate-950/80 p-6 shadow-glass backdrop-blur-xl sm:p-10">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-indigo-300">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Technical & Business Abilities</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-400">
          A premium skillset built for full-stack product development, AI, and mobile-first delivery.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((section) => (
          <motion.div key={section.category} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.55 }} variants={cardVariants} className="glass rounded-[28px] border border-white/10 p-6 shadow-glass">
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-200">{section.category}</p>
            <div className="mt-4 space-y-3">
              {section.items.map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-100 transition hover:border-indigo-400/30 hover:bg-indigo-500/10">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
