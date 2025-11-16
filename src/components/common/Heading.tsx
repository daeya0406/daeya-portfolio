import { cn } from '@/lib/utils';

interface HeadingProps {
  children: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function Heading({ children, subtitle, align = 'left', className }: HeadingProps) {
  return (
    <header className={cn('mb-8', align === 'center' && 'text-center', className)}>
      <h2 className="text-primary text-2xl font-bold tracking-tight">{children}</h2>
      {subtitle && <p className="mt-2 text-gray-400">{subtitle}</p>}
    </header>
  );
}
