'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="flex h-[70vh] flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-primary mb-4 text-5xl font-bold"
      >
        Daeya Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-foreground/70 max-w-lg"
      >
        필요한 것을 직접 만들며 성장하는 능동적인 프론트엔드 개발자 김정대입니다.
      </motion.p>
    </section>
  );
}
