'use client';

import { Typo } from '@/components/ui/Text';

type CodeCardProps = {
  title: string;
  description?: string;
  code: string;
};

export function CodeCard({ title, description, code }: CodeCardProps) {
  return (
    <div className="space-y-2 rounded-lg border border-slate-200/70 bg-white/80 p-4 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-800/40">
      <div>
        <Typo.h6 className="text-slate-900 dark:text-slate-50">{title}</Typo.h6>
        {description ? (
          <Typo.bodySm className="text-slate-600 dark:text-slate-300">{description}</Typo.bodySm>
        ) : null}
      </div>
      <pre className="whitespace-pre-wrap rounded-md bg-slate-100 p-3 font-mono text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-200">
        {code}
      </pre>
    </div>
  );
}
