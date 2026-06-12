import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28 rounded-[40px] border border-white/10 bg-slate-950/80 p-6 shadow-glass backdrop-blur-xl sm:p-10">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-indigo-300">Contact</p>
        <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s Build Something Together</h2>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="glass rounded-[32px] border border-white/10 p-8 shadow-glass">
          <p className="text-sm uppercase tracking-[0.32em] text-indigo-300">Reach Out</p>
          <div className="mt-6 space-y-4 text-slate-200">
            <div className="rounded-3xl bg-slate-950/90 p-5">
              <p className="text-sm text-slate-400">Name</p>
              <p className="mt-2 font-semibold text-white">Jithender J</p>
            </div>
            <div className="rounded-3xl bg-slate-950/90 p-5">
              <p className="text-sm text-slate-400">Email</p>
              <p className="mt-2 font-semibold text-white">jithender.j2023csbs@sece.ac.in</p>
            </div>
            {/* Phone removed by user request */}
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <a href="https://github.com" className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-5 py-3 text-sm text-indigo-100 transition hover:bg-indigo-500/20">GitHub</a>
            <a href="https://linkedin.com" className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-5 py-3 text-sm text-indigo-100 transition hover:bg-indigo-500/20">LinkedIn</a>
            <a href="mailto:jithender.j2023csbs@sece.ac.in" className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-5 py-3 text-sm text-indigo-100 transition hover:bg-indigo-500/20">Email</a>
          </div>
        </motion.div>
        <motion.form initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="glass rounded-[32px] border border-white/10 p-8 shadow-glass">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/10" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
              <input id="email" name="email" type="email" placeholder="Your email" className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/10" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project" rows={5} className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-400/60 focus:ring-2 focus:ring-indigo-500/10" />
            </div>
            <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400">
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
