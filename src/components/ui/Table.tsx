'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <div className="relative w-full overflow-auto rounded-lg border border-slate-200/70 dark:border-slate-800">
      <table className={cn('w-full caption-bottom text-sm', className)} {...props} />
    </div>
  );
}

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('bg-slate-50 text-slate-700 dark:bg-slate-800 dark:text-slate-200', className)}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => <tbody ref={ref} className={cn('', className)} {...props} />);
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'bg-slate-50 font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className, ...props }, ref) => (
    <tr
      ref={ref}
      className={cn(
        'border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/70',
        className
      )}
      {...props}
    />
  )
);
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'bg-slate-200 px-3 py-2 text-left align-middle font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-200',
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      'bg-slate-100 px-3 py-2 align-middle text-slate-700 dark:bg-slate-800 dark:text-slate-200',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-2 text-left text-xs text-slate-500 dark:text-slate-400', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

function TableEmpty({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-lg border border-dashed border-slate-200/70 bg-slate-100 px-4 py-6 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-700/40 dark:text-slate-300">
      {children}
    </div>
  );
}

function TableLoading() {
  return (
    <div className="space-y-2 rounded-lg border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="h-3 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
      <div className="h-3 w-1/2 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
      <div className="h-3 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
    </div>
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  TableEmpty,
  TableLoading,
};
