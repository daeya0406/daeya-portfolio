'use client';

import { Typo } from '@/components/ui/Text';

type InfoBlockProps = {
  title?: string;
  description?: string;
  points: string[];
};

export function InfoBlock({ title, description, points }: InfoBlockProps) {
  return (
    <div className="space-y-2">
      {title && <Typo.h6 className="text-slate-700 dark:text-slate-200">{title}</Typo.h6>}
      {description && (
        <Typo.bodyXs className="text-slate-600 dark:text-slate-300">{description}</Typo.bodyXs>
      )}
      <ul className="list-disc space-y-1 pl-4 text-slate-700 dark:text-slate-200">
        {points.map((p) => (
          <li key={p} className="typo-body-xs">
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
