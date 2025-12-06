'use client';

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/Dialog';
import { Button } from '@/components/ui/Button';
import { Typo } from '@/components/ui/Text';

type CardDeleteDialogProps = {
  open: boolean;
  title?: string;
  onConfirm: () => void;
  onOpenChange: (open: boolean) => void;
  isLoading?: boolean;
};

export function CardDeleteDialog({
  open,
  title,
  onConfirm,
  onOpenChange,
  isLoading,
}: CardDeleteDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogTitle>
          <Typo.h4 as="span">카드 삭제</Typo.h4>
        </DialogTitle>
        <DialogDescription asChild>
          <Typo.body as="span" className="text-slate-700 dark:text-slate-200">
            {title ? `${title} 카드를 삭제할까요?` : '카드를 삭제할까요?'}
          </Typo.body>
        </DialogDescription>
        <div className="mt-4 flex justify-end gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)} disabled={isLoading}>
            취소
          </Button>
          <Button variant="outline" isLoading={isLoading} onClick={onConfirm}>
            {isLoading ? '' : '삭제'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
