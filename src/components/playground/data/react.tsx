import ComponentSplitDemo from '../examples/react/ComponentSplitDemo';
import CompoundPatternDemo from '../examples/react/CompoundPatternDemo';
import ReactMemoDemo from '../examples/react/ReactMemoDemo';
import { InfoBlock } from '../examples/InfoBlock';
import type { PlaygroundItem } from '@/types/playground';

export const reactItems: PlaygroundItem[] = [
  {
    id: 'component-split',
    title: '컴포넌트 분리',
    tags: ['React', 'Props'],
    description: '컴포넌트 분리 & props 전달 기본 패턴',
    categories: ['react'],
    demo: <ComponentSplitDemo />,
    code: `function ProfileCard({ profile }) {
  return (
    <Card>
      <h4>{profile.name}</h4>
      <p>{profile.role}</p>
      {profile.tags.map((t) => <Badge key={t}>{t}</Badge>)}
    </Card>
  );
}

const profiles = [...];
return profiles.map((p) => <ProfileCard key={p.name} profile={p} />);`,
  },
  {
    id: 'compoundpattern',
    title: '컴파운드 패턴(탭 예시)',
    tags: ['React', 'Compound'],
    description: 'Tabs.Root/List/Trigger로 조립하는 예시',
    categories: ['react'],
    demo: <CompoundPatternDemo />,
    code: `const tabs = [
  { key: 'one', label: '탭 1', content: '첫 번째 탭 내용' },
  { key: 'two', label: '탭 2', content: '두 번째 탭 내용' },
  { key: 'three', label: '탭 3', content: '세 번째 탭 내용' },
];
const [active, setActive] = React.useState(tabs[0].key);
const current = tabs.find((t) => t.key === active);

<Tabs.Root value={active} defaultValue={tabs[0].key} onValueChange={setActive}>
  <Tabs.List>
    {tabs.map((tab) => (
      <Tabs.Trigger key={tab.key} value={tab.key}>
        {tab.label}
      </Tabs.Trigger>
      ))}
  </Tabs.List>

  {current && (
    <Tabs.Content key={current.key} value={current.key}>
      <div className="section-component">{current.content}</div>
    </Tabs.Content>
  )}
</Tabs.Root>`,
  },
  {
    id: 'memo-usecallback',
    title: 'memo / useCallback 렌더 비교',
    tags: ['React', 'Performance'],
    description: 'props 안정화로 자식 렌더 줄이기',
    categories: ['react'],
    demo: (
      <InfoBlock
        title="memo + useCallback"
        points={[
          '부모 함수 props는 useCallback으로 메모이즈',
          '자식은 React.memo로 props 동일 시 스킵',
          '불필요한 deps 추가는 오히려 비용, 필요한 곳에만 사용',
        ]}
      />
    ),
    code: `const Child = memo(({ onClick }) => ...);
const onClick = useCallback(() => doSomething(), [deps]);
<Child onClick={onClick} />;`,
  },
  {
    id: 'react-memo',
    title: 'React.memo + useMemo',
    tags: ['React', 'Memo'],
    description: '불필요 렌더를 줄이는 기본 예시',
    categories: ['react'],
    demo: <ReactMemoDemo />,
    code: `const Child = React.memo(({ value }) => {
  const computed = useMemo(() => heavy(value), [value]);
  return <div>{computed}</div>;
});

<Child value={value} />`,
  },
  {
    id: 'suspense-boundary',
    title: 'Suspense / Error Boundary',
    tags: ['React', 'Boundary'],
    description: '비동기/에러 경계 패턴',
    categories: ['react'],
    demo: (
      <InfoBlock
        title="Suspense + ErrorBoundary"
        points={[
          'Suspense: 비동기 로딩 UI 분리',
          'ErrorBoundary: 자식 오류 격리, fallback 제공',
          '데이터 패칭 라이브러리(React Query)와 함께 사용하면 효과적',
        ]}
      />
    ),
    code: `<Suspense fallback={<Spinner />}>
  <ErrorBoundary fallback={<Error />}>
    <Profile />
  </ErrorBoundary>
</Suspense>`,
  },
];
