'use client';

import { useRef, useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typo } from '@/components/ui/Text';

export default function UseRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [domValue, setDomValue] = useState('');

  const silentCountRef = useRef(0);
  const renderCountRef = useRef(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [stateCount, setStateCount] = useState(0);

  renderCountRef.current += 1;

  const focusInput = () => inputRef.current?.focus();
  const insertText = () => {
    if (!inputRef.current) return;
    inputRef.current.value = 'ref로 직접 작성';
    inputRef.current.focus();
  };

  const addSilent = () => {
    silentCountRef.current += 1; // 렌더 없음
  };
  const syncToView = () => setVisibleCount(silentCountRef.current);

  return (
    <div className="space-y-4 rounded-lg border border-slate-200/70 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">useRef</p>
          <Typo.caption>DOM 직접 참조 / 렌더 없이 값 보관</Typo.caption>
        </div>
        <Badge variant="outline">no re-render on ref</Badge>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2 rounded-lg border border-slate-200/70 bg-slate-50/70 p-3 text-sm dark:border-slate-800 dark:bg-slate-800/60">
          <Typo.body className="mb-4">1) DOM 직접 참조</Typo.body>
          <Input
            ref={inputRef}
            value={domValue}
            onChange={(e) => setDomValue(e.target.value)}
            placeholder="버튼으로 focus / 값 삽입"
          />
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" onClick={focusInput}>
              focus()
            </Button>
            <Button size="sm" variant="outline" onClick={insertText}>
              값 삽입(ref)
            </Button>
          </div>
          <Typo.caption className="text-slate-500">
            DOM 노드를 ref로 직접 제어. state 없이도 포커스/값 삽입 가능
          </Typo.caption>
        </div>

        <div className="space-y-2 rounded-lg border border-slate-200/70 bg-slate-50/70 p-3 text-sm dark:border-slate-800 dark:bg-slate-800/60">
          <Typo.body className="mb-4">2) 렌더링 없이 값 저장</Typo.body>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" variant="outline" onClick={addSilent}>
              ref 카운트 +1 (렌더 없음)
            </Button>
            <Button size="sm" variant="outline" onClick={() => setStateCount((c) => c + 1)}>
              state +1 (렌더 발생)
            </Button>
            <Button size="sm" onClick={syncToView}>
              렌더
            </Button>
          </div>
          <div className="space-y-1 text-sm text-slate-800 dark:text-slate-100">
            <p>ref 카운트(동기화 시 표시): {visibleCount}</p>
            <p>state 카운트(렌더 발생): {stateCount}</p>
            <p>렌더 횟수(ref 추적): {renderCountRef.current}</p>
          </div>
          <Typo.caption className="text-slate-500">
            ref는 바뀌어도 컴포넌트 렌더를 유발하지 않음. 필요할 때만 state로 동기화
          </Typo.caption>
        </div>
      </div>
    </div>
  );
}
