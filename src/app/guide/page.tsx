'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs } from '@/components/ui/Tabs';

import UISection from './sections/UISection';
import FontSection from './sections/FontSection';
import ColorSection from './sections/ColorSection';

const tabs = [
  { key: 'ui', label: 'UI' },
  { key: 'font', label: 'Font' },
  { key: 'color', label: 'Color' },
] as const;

export default function Guide() {
  const [activeTab, setActiveTab] = useState<'ui' | 'font' | 'color'>('ui');

  return (
    <section className="mx-auto max-w-5xl space-y-6 px-2 py-4">
      <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25 }}
          className="section-card"
        >
          {activeTab === 'ui' && <UISection />}
          {activeTab === 'font' && <FontSection />}
          {activeTab === 'color' && <ColorSection />}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
