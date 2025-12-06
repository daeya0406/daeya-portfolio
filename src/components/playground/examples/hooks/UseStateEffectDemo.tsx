'use client';

import { useEffect, useState } from 'react';
import { Typo } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';

export default function UseStateEffectDemo() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState('대기');

  const handleCounter = () => {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    // 0.5초 이상 가만히 있으면 대기(cleanup 이후 적용 되도록 )
    const timer = setTimeout(() => setStatus('대기'), 500);
    requestAnimationFrame(() => setStatus('변경 감지됨'));
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <Button size="sm" onClick={handleCounter}>
          +1
        </Button>
        <Typo.body>
          Count: {count} / <span className="text-xs text-slate-500">{status}</span>
        </Typo.body>
      </div>
    </div>
  );
}
