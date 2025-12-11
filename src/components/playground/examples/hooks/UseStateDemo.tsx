'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Typo } from '@/components/ui/Text';

function heavyInit() {
  console.log('무거운 연산');
}

export default function UseStateDemo() {
  const [text, setText] = useState('');
  const [nameText, setNameText] = useState('');
  const [name, setName] = useState(['홍길동', '김민수']);
  const [heavy, setHeavy] = useState(() => heavyInit());

  const rerunHeavy = () => setHeavy(heavyInit());

  const handleUpload = () => {
    nameText && setName((prev) => [nameText, ...prev]); // nameText 있을 때만 추가
    setNameText(''); // 해당 input 초기화
  };

  return (
    <div className="space-y-4 rounded-lg border border-slate-200/70 bg-white/80 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">useState</p>
          <Typo.caption>인풋 상태 업데이트</Typo.caption>
        </div>
        <Badge variant="outline">setState</Badge>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-3">
          <div className="flex flex-col gap-y-1">
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="타이핑하면 즉시 반영"
            />
            <Typo.caption className="text-slate-500">
              현재 입력: {text || '(비어있음)'}
            </Typo.caption>
          </div>
          <div className="flex flex-col gap-y-1">
            <Input
              value={nameText}
              onChange={(e) => setNameText(e.target.value)}
              placeholder="버튼 클릭해야 반영"
            />
            <Button onClick={handleUpload}>추가</Button>
            <Typo.bodySm className="text-slate-500">
              현재 입력: {name.map((name) => name).join(', ')}
            </Typo.bodySm>
          </div>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-slate-200/70 bg-slate-50/70 p-3 dark:border-slate-800 dark:bg-slate-800/60">
          <div className="flex items-center justify-between">
            <Typo.body>lazy Initializer</Typo.body>
            <Badge variant="default">useState(() =&gt; ...)</Badge>
          </div>
          <Typo.caption as="p" className="text-slate-500">
            초기 한 번만 실행된 무거운 계산 결과를 캐싱. 재계산은 버튼으로만 실행
            <br />( 대략적으로 3 ~ 5ms 이상일 경우 무거운 계산 결과로 간주 )
          </Typo.caption>
          <div className="flex items-center gap-3">
            <Button size="sm" variant="outline" onClick={rerunHeavy}>
              재계산
            </Button>
            <Typo.caption className="text-slate-600 dark:text-slate-200">
              콘솔로 무거운 연산 확인
            </Typo.caption>
          </div>
        </div>
      </div>
    </div>
  );
}
