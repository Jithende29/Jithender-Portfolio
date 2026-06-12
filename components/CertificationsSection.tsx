'use client';

import { motion } from 'framer-motion';

const certifications = [
  'Introduction to MongoDB for Students',
  'Web Development using HTML and JavaScript (Codedex)',
  'Python Basic to Intermediate (Udemy)',
  'Digital Marketing Basics (Udemy)'
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-28 rounded-[40px] border border-white/10 bg-slate-950/80 p-6 shadow-glass backdrop-blur-xl sm:p-10">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.32em] text-indigo-300">Certifications</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Verified Learning</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <motion.div key={cert} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="glass rounded-[28px] border border-white/10 p-5 shadow-glass">
            <p className="text-sm font-semibold text-white">{cert}</p>
            <span className="mt-4 inline-flex rounded-full bg-indigo-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-indigo-200">Certification</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
