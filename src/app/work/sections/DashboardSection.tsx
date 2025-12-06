'use client';

import { Typo } from '@/components/ui/Text';

export default function DashboardSection() {
  return (
    <div className="space-y-3">
      <Typo.h3>Dashboard</Typo.h3>
      <Typo.caption className="block text-slate-500 dark:text-slate-300">
        보호된 위젯/요약 정보를 배치할 공간입니다.
      </Typo.caption>
      <div className="rounded-xl border border-slate-200/70 bg-white/70 p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900/50">
        <p className="text-sm text-slate-700 dark:text-slate-200">인증/권한이 필요한 영역을 샘플로 보여주세요.</p>
      </div>
    </div>
  );
}
