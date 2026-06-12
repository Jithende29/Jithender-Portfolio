'use client';

import { motion } from 'framer-motion';

const internships = [
  {
    company: 'Better Tomorrow',
    title: 'MERN Stack Intern',
    date: '2025',
    description: 'Worked on API development and improved query efficiency and scalability.'
  },
  {
    company: 'Webnox Technologies',
    title: 'Flutter App Development Intern',
    date: '2025',
    description: 'Built responsive UI screens, API integrations and improved debugging and deployment skills.'
  },
  {
    company: 'Viruzverse',
    title: 'Digital Marketing Intern',
    date: '2025',
    description: 'Learned SEO, Meta Ads, product pitching and practical digital marketing.'
  }
];

export default function InternshipsSection() {
  return (
    <section id="internships" className="scroll-mt-28 rounded-[40px] border border-white/10 bg-slate-950/80 p-6 shadow-glass backdrop-blur-xl sm:p-10">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.32em] text-indigo-300">Internships</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Professional Experience</h2>
      </div>
      <div className="space-y-6">
        {internships.map((item, index) => (
          <motion.div key={item.company} initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.1 }} className="glass rounded-[28px] border border-white/10 p-6 shadow-glass">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.company}</h3>
                <p className="text-sm text-slate-400">{item.title}</p>
              </div>
              <span className="rounded-full bg-indigo-500/15 px-4 py-2 text-xs uppercase tracking-[0.35em] text-indigo-200">
                {item.date}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
