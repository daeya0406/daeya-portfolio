'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Typo } from '@/components/ui/Text';

export default function UxOptimisticDemo() {
  const [likes, setLikes] = useState(12);
  const [status, setStatus] = useState<'idle' | 'saving' | 'error'>('idle');

  const toggleLike = () => {
    setStatus('saving');
    setLikes((v) => v + 1); // optimistic
    setTimeout(() => {
      const fail = Math.random() < 0.25;
      if (fail) {
        setLikes((v) => v - 1);
        setStatus('error');
      } else {
        setStatus('idle');
      }
    }, 600);
  };

  return (
    <div className="space-y-2">
      <Typo.bodySm className="text-slate-600 dark:text-slate-200">
        Optimistic UI: 먼저 UI 반영 → 실패 시 롤백
      </Typo.bodySm>
      <div className="flex items-center gap-3 rounded-lg border border-slate-200/70 bg-white/80 p-3 text-sm dark:border-slate-700 dark:bg-slate-800/50">
        <Button size="sm" onClick={toggleLike} disabled={status === 'saving'}>
          좋아요 +1
        </Button>
        <Typo.bodySm className="text-slate-800 dark:text-slate-100">{likes} likes</Typo.bodySm>
        <Typo.caption className="text-slate-500 dark:text-slate-400">
          {status === 'saving' && '서버 반영 중...'}
          {status === 'error' && '실패: 롤백됨'}
          {status === 'idle' && '즉시 반영 후 서버 동기화'}
        </Typo.caption>
      </div>
    </div>
  );
}
