'use client';

import { useEffect, useState } from 'react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-40 rounded-full bg-indigo-500/95 px-4 py-3 text-sm text-white shadow-glass transition duration-300 ${visible ? 'opacity-100 visible' : 'pointer-events-none opacity-0 invisible'}`}
      aria-label="Scroll back to top"
    >
      Top
    </button>
  );
}
