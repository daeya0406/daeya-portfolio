import ToggleHookDemo from '../examples/hooks/ToggleHookDemo';
import UseQueryDemo from '../examples/hooks/UseQueryDemo';
import UseStateEffectDemo from '../examples/hooks/UseStateEffectDemo';
import type { PlaygroundItem } from '@/types/playground';

export const hookItems: PlaygroundItem[] = [
  {
    id: 'use-state-effect',
    title: 'useState + useEffect',
    tags: ['Hooks', 'State'],
    description: '기본 패턴',
    categories: ['hooks'],
    demo: <UseStateEffectDemo />,
    code: `const [count, setCount] = useState(0);

useEffect(() => {
  // side effect
}, [count]);

<Button onClick={() => setCount((c) => c + 1)} />`,
  },
  {
    id: 'use-query',
    title: 'useQuery 패턴',
    tags: ['Hooks', 'Query'],
    description: 'queryKey / select / staleTime 기본 예시',
    categories: ['hooks'],
    demo: <UseQueryDemo />,
    code: `const { data, isPending, isFetching, error, refetch } = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos, // Promise 리턴
  staleTime: 1000 * 30,
  select: (todos) => ({
    todo: todos.filter((t) => !t.done),
    done: todos.filter((t) => t.done),
  }),
});

if (isPending) return <Spinner />;
if (error) return <Error />;
return (
  <div>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <Button onClick={() => refetch()}>refetch</Button>
  </div>
);`,
  },
  {
    id: 'use-toggle',
    title: 'useToggle 훅',
    tags: ['Hook', 'State'],
    description: '불리언 상태를 간단히 토글/설정',
    categories: ['hooks'],
    demo: <ToggleHookDemo />,
    code: `function useToggle(initial = false) {
  const [value, setValue] = useState(initial);
  const toggle = useCallback((next?: boolean) => {
    if (typeof next === 'boolean') return setValue(next);
    setValue((v) => !v);
  }, []);
  return { value, toggle, setValue };
}`,
  },
];
