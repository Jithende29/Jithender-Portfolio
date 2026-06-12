'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { useMemo, useState } from 'react';

const filters = ['All', 'AI', 'Flutter', 'React'];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.stack.some((tech) => tech.toLowerCase().includes(activeFilter.toLowerCase())));
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-28 rounded-[40px] border border-white/10 bg-slate-950/80 p-6 shadow-glass backdrop-blur-xl sm:p-10">
      <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-indigo-300">Featured Projects</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Premium Work</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${activeFilter === filter ? 'border-indigo-400 bg-indigo-500/15 text-indigo-100' : 'border-white/10 text-slate-300 hover:border-indigo-300/40 hover:text-white'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <motion.article key={project.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }} className="glass rounded-[32px] border border-white/10 p-6 shadow-glass">
            <div className="mb-5 flex items-center justify-between">
              <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs uppercase tracking-[0.32em] text-indigo-200">Project</span>
              <span className="text-xs uppercase tracking-[0.28em] text-slate-400">{project.stack[0]}</span>
            </div>
            <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.subtitle}</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="mt-6 space-y-3">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-slate-400">Key Features</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 text-indigo-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
