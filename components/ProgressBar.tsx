'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', update);
    update();
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div className="progress-wrap">
      <div className="progress-bar" style={{ transform: `scaleX(${scrollProgress})` }} />
    </div>
  );
}
