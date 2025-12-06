'use client';

import { Suspense, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Tabs } from '@/components/ui/Tabs';
import { extractTabsFromNav } from '@/components/common/navigation';

import { GuideTabContent } from './GuideTabContent';

const tabs = extractTabsFromNav('Guide');
type TabKey = string;

export default function Guide() {
  return (
    <Suspense fallback={<div className="py-10 text-center text-sm text-slate-500">Loading...</div>}>
      <GuidePageContent />
    </Suspense>
  );
}

function GuidePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultKey = tabs[0]?.key ?? '';

  const activeTab = useMemo<TabKey>(() => {
    const tab = searchParams.get('tab');
    return (tabs.find((t) => t.key === tab)?.key ?? defaultKey) as TabKey;
  }, [searchParams, defaultKey]);

  const onChange = (key: TabKey) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', key);
    router.replace(`/guide?${params.toString()}`, { scroll: false });
  };

  if (!tabs.length) {
    return null;
  }

  return (
    <section className="mx-auto max-w-5xl space-y-6 px-2 py-4">
      <Tabs.Root value={activeTab} defaultValue={defaultKey} onValueChange={onChange}>
        <Tabs.List>
          {tabs.map((tab) => (
            <Tabs.Trigger key={tab.key} value={tab.key}>
              {tab.label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content key={activeTab} value={activeTab}>
          <div className="section-card">
            <GuideTabContent tab={activeTab} />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}
