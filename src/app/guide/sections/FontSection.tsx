'use client';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';
import { Heading } from '@/components/common/Heading';

const fontSizes = [
  { label: 'xs', className: 'text-xs', px: '12px' },
  { label: 'sm', className: 'text-sm', px: '14px' },
  { label: 'base', className: 'text-base', px: '16px' },
  { label: 'lg', className: 'text-lg', px: '18px' },
  { label: 'xl', className: 'text-xl', px: '20px' },
  { label: '2xl', className: 'text-2xl', px: '24px' },
  { label: '3xl', className: 'text-3xl', px: '30px' },
  { label: '4xl', className: 'text-4xl', px: '36px' },
  { label: '5xl', className: 'text-5xl', px: '48px' },
  { label: '6xl', className: 'text-6xl', px: '60px' },
];

export default function FontSection() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied: ${text}`, { duration: 1500 });
  };

  return (
    <>
      <Heading subtitle="폰트 크기 스케일 / 클릭 시 클래스 복사">Font System</Heading>

      <div className="divide-border border-border divide-y border-t">
        {fontSizes.map(({ label, className, px }) => (
          <div key={label} className="hover:bg-muted/20 px-4 py-4 transition-colors">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-muted-foreground text-sm">
                text-{label} <span className="text-muted-foreground/60 ml-1">{px}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {/* Bold */}
              <div
                onClick={() => handleCopy(`${className} font-bold`)}
                className="hover:bg-muted/30 group flex cursor-pointer items-center justify-between rounded-md px-3 py-2 transition"
              >
                <p className={`${className} text-foreground font-bold`}>{className} font-bold</p>
                <Copy className="text-muted-foreground h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </div>

              {/* Normal */}
              <div
                onClick={() => handleCopy(`${className} font-normal`)}
                className="hover:bg-muted/30 group flex cursor-pointer items-center justify-between rounded-md px-3 py-2 transition"
              >
                <p className={`${className} text-foreground/90 font-normal`}>
                  {className} font-normal
                </p>
                <Copy className="text-muted-foreground h-4 w-4 opacity-0 transition group-hover:opacity-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
