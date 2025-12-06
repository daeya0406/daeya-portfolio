'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 20);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      type="button"
      aria-label="맨 위로"
      onClick={scrollToTop}
      className={`hidden lg:flex fixed bottom-6 left-[calc(50%+520px)] z-50 h-12 w-12 items-center justify-center rounded-full border border-slate-200/70 bg-white/90 text-slate-900 shadow-xl backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:border-slate-700/70 dark:bg-slate-600/80 dark:text-slate-100 dark:hover:bg-slate-600 ${visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
