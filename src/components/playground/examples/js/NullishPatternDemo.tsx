'use client';

import { Badge } from '@/components/ui/Badge';
import { Typo } from '@/components/ui/Text';

export default function NullishPatternDemo() {
  const user = { name: 'Daeya', role: null, city: undefined };
  const fallbackRole = user.role ?? 'guest';
  const cityOrUnknown = user.city || 'Unknown';
  const greeting = user.name ? `Hello, ${user.name}!` : 'Hello!';

  return (
    <div className="grid gap-3 md:grid-cols-2">
      <div className="rounded-lg border border-slate-200/70 bg-white/80 p-3 text-sm dark:border-slate-800 dark:bg-slate-900/60">
        <Typo.caption className="font-semibold">데이터</Typo.caption>
        <pre className="mt-2 whitespace-pre-wrap text-xs text-slate-700 dark:text-slate-200">
          {JSON.stringify(user, null, 2)}
        </pre>
      </div>
      <div className="space-y-2 rounded-lg border border-slate-200/70 bg-white/80 p-3 text-sm dark:border-slate-800 dark:bg-slate-900/60">
        <p>
          역할 (??): <Badge variant="outline">{fallbackRole}</Badge>
        </p>
        <p>
          도시 (||): <Badge variant="outline">{cityOrUnknown}</Badge>
        </p>
        <p>
          삼항: <Badge variant="outline">{greeting}</Badge>
        </p>
      </div>
    </div>
  );
}
