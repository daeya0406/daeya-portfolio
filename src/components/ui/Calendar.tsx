'use client';

import * as React from 'react';
import dayjs from 'dayjs';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type CalendarProps = {
  value?: Date;
  onChange?: (date: Date) => void;
  className?: string;
};

export function Calendar({ value, onChange, className }: CalendarProps) {
  const [current, setCurrent] = React.useState(dayjs(value ?? new Date()));

  const days = React.useMemo(() => {
    const start = current.startOf('month').startOf('week');
    return Array.from({ length: 42 }, (_, i) => start.add(i, 'day'));
  }, [current]);

  const selected = value ? dayjs(value) : null;
  const isSameDay = (a: dayjs.Dayjs, b: dayjs.Dayjs | null) => !!b && a.isSame(b, 'day');

  return (
    <div
      className={cn(
        'w-full min-w-[280px] max-w-sm overflow-hidden rounded-xl border border-slate-200/70 bg-white/90 p-3 shadow-lg backdrop-blur dark:border-slate-800 dark:bg-slate-900/80',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setCurrent((c) => c.subtract(1, 'month'))}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          aria-label="이전 달"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          {current.format('YYYY년 MM월')}
        </div>
        <button
          type="button"
          onClick={() => setCurrent((c) => c.add(1, 'month'))}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
          aria-label="다음 달"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-2 grid grid-cols-7 gap-1 text-center text-[11px] text-slate-500 dark:text-slate-400">
        {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
          <span key={d} className="py-1 font-semibold">
            {d}
          </span>
        ))}
      </div>

      <div className="mt-1 grid max-h-[320px] grid-cols-7 gap-1 overflow-y-auto text-sm">
        {days.map((day) => {
          const inMonth = day.isSame(current, 'month');
          const isSelected = isSameDay(day, selected);
          return (
            <button
              key={day.format('YYYY-MM-DD')}
              type="button"
              onClick={() => onChange?.(day.toDate())}
              className={cn(
                'h-8 rounded-lg border border-transparent transition',
                isSelected
                  ? 'border-blue-500 bg-blue-50 font-semibold text-blue-900 shadow-sm dark:border-blue-400 dark:bg-blue-900/40 dark:text-blue-50'
                  : 'hover:border-slate-200 hover:bg-slate-100 dark:hover:border-slate-700 dark:hover:bg-slate-800',
                !inMonth && 'text-slate-400 dark:text-slate-600'
              )}
            >
              {day.date()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
