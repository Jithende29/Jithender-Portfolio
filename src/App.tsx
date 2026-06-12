import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
import InternshipsSection from './components/InternshipsSection';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';
import BackToTopButton from './components/BackToTopButton';
import { motion } from 'framer-motion';

export default function App() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden relative bg-slate-950">
      <ProgressBar />
      <Navbar />
      <HeroSection />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="space-y-24 py-16" initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }}>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <InternshipsSection />
          <CertificationsSection />
          <AchievementsSection />
          <ContactSection />
        </motion.div>
      </div>
      <Footer />
      <BackToTopButton />
    </main>
  );
}
