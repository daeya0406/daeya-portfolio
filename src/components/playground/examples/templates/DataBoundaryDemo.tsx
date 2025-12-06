'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function DataBoundaryDemo() {
  const [state, setState] = useState<'loading' | 'error' | 'empty' | 'success'>('loading');
  const data = state === 'success' ? ['Alpha', 'Beta', 'Gamma'] : [];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={() => setState('loading')}>
          로딩
        </Button>
        <Button size="sm" variant="outline" onClick={() => setState('success')}>
          성공
        </Button>
        <Button size="sm" variant="outline" onClick={() => setState('empty')}>
          빈 데이터
        </Button>
        <Button size="sm" variant="outline" onClick={() => setState('error')}>
          에러
        </Button>
      </div>

      <div className="rounded-lg border border-slate-200/70 bg-white/80 p-3 text-sm dark:border-slate-800 dark:bg-slate-900/50">
        {state === 'loading' && (
          <div className="space-y-2">
            <div className="h-3 w-2/3 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
            <div className="h-3 w-1/2 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
          </div>
        )}
        {state === 'error' && (
          <p className="text-red-500">에러가 발생했습니다. 다시 시도해주세요.</p>
        )}
        {state === 'empty' && <p className="text-slate-500">데이터가 없습니다.</p>}
        {state === 'success' && (
          <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-200">
            {data.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
