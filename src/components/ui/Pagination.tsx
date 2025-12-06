'use client';

import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
  page: number;
  pageSize: number;
  total: number;
  onPageChange: (page: number) => void;
};

export function Pagination({ page, pageSize, total, onPageChange }: Props) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  if (totalPages <= 1) return null;

  const windowSize = 5;
  const start = Math.max(1, page - Math.floor(windowSize / 2));
  const end = Math.min(totalPages, start + windowSize - 1);
  const pages = [];
  for (let p = start; p <= end; p++) pages.push(p);

  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-slate-200/70 bg-white/80 px-3 py-2 text-sm shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
      <button
        className={cn(
          'rounded-md px-3 py-1 font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-50 dark:text-slate-100 dark:hover:bg-slate-800',
          page === 1 && 'pointer-events-none'
        )}
        onClick={() => onPageChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="이전 페이지"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="flex items-center">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => onPageChange(p)}
            className={cn(
              'min-w-[28px] rounded-md px-2 py-1 text-sm font-semibold transition',
              p === page
                ? 'text-primary border border-blue-200 bg-blue-50'
                : 'text-slate-700 hover:bg-slate-100 dark:text-slate-100 dark:hover:bg-slate-800'
            )}
            aria-current={p === page ? 'page' : undefined}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        className={cn(
          'rounded-md px-3 py-1 font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-50 dark:text-slate-100 dark:hover:bg-slate-800',
          page === totalPages && 'pointer-events-none'
        )}
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="다음 페이지"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
