'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'outline';
};

const variantClass = {
  default: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
  outline: 'border border-blue-300 text-blue-700 dark:border-blue-700 dark:text-blue-200',
};

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        variantClass[variant],
        className
      )}
      {...props}
    />
  );
}
