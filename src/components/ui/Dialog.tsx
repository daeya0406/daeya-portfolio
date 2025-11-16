'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Dialog({ children }: { children: React.ReactNode }) {
  return <DialogPrimitive.Root>{children}</DialogPrimitive.Root>;
}

export const DialogTrigger = DialogPrimitive.Trigger;

export function DialogContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  return (
    <DialogPrimitive.Portal>
      {/* 배경 */}
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      {/* 컨텐츠 */}
      <DialogPrimitive.Content
        {...props}
        className={cn(
          'bg-background border-border fixed left-1/2 top-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border p-6 shadow-xl focus:outline-none',
          className
        )}
      >
        {children}

        {/* 닫기 버튼 */}
        <DialogPrimitive.Close className="absolute right-3 top-3">
          <X className="text-foreground/60 hover:text-foreground h-5 w-5 cursor-pointer transition" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription = DialogPrimitive.Description;
