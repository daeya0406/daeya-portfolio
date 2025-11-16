'use client';
import { motion } from 'framer-motion';

interface Tab<K extends string> {
  key: K;
  label: string;
}

interface TabsProps<K extends string> {
  tabs: readonly Tab<K>[]; // readonly 배열 지원
  active: K; // literal union 그대로 사용
  onChange: (key: K) => void; // string → literal union
}

export function Tabs<K extends string>({ tabs, active, onChange }: TabsProps<K>) {
  return (
    <nav className="border-border text-foreground relative flex justify-center border-b">
      <div className="flex gap-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onChange(tab.key)}
            className={`text-md relative min-w-[80px] cursor-pointer pb-3 font-semibold ${
              active === tab.key ? 'text-primary' : 'text-foreground/50 hover:text-foreground'
            }`}
          >
            {tab.label}
            {active === tab.key && (
              <motion.div
                layoutId="underline"
                className="bg-primary absolute bottom-0 left-0 h-[2px] w-full"
              />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
