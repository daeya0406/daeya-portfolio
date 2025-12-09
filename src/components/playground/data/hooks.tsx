import ToggleHookDemo from '../examples/hooks/ToggleHookDemo';
import UseEffectDependencyDemo from '../examples/hooks/UseEffectDependencyDemo';
import UseQueryDemo from '../examples/hooks/UseQueryDemo';
import UseStateEffectDemo from '../examples/hooks/UseStateEffectDemo';
import type { PlaygroundItem } from '@/types/playground';

export const hookItems: PlaygroundItem[] = [
  {
    id: 'use-effect-deps',
    title: 'useEffect',
    tags: ['Hooks', 'Effect'],
    description: 'deps 없음 / 특정 deps / [] 비교 + 타이머 cleanup',
    categories: ['hooks'],
    demo: <UseEffectDependencyDemo />,
    code: `//요약 정리

useEffect(() => {
  //코드 내용
});
// 렌더(마운트 + 업데이트) 될 때마다 실행됨

useEffect(() => {
  //코드 내용
}, []);
// 처음 마운트 될 때 1 번만 실행됨 + 매번 실행되기 전에 이전 effect의 cleanup 실행

useEffect(() => {
  //코드 내용
}, [name]);
// 처음 마운트 될 때 1번 실행 + name 값이 바뀔 때마다 실행 + 매번 실행되기 전에 이전 effect의 cleanup 실행


// 렌더링 내용

const [count, setCount] = useState(0);
const [text, setText] = useState('');

useEffect(() => {
  console.log('deps 없음: 렌더마다 실행');
});

useEffect(() => {
  console.log('count 변경 시만');
}, [count]);

useEffect(() => {
  console.log('text 변경 시만');
}, [text]);

// [running]: 마운트 때 1회 설정 후, cleanup에서 clearInterval
useEffect(() => {
  if (!running) return;
  const timer = setInterval(() => {
    setSeconds((s) => s + 1);
  }, 1000);
  return () => {
    clearInterval(timer);
  };
}, [running]);`,
  },
  {
    id: 'use-state-effect',
    title: 'useState + useEffect',
    tags: ['Hooks', 'State'],
    description: '기본 패턴',
    categories: ['hooks'],
    demo: <UseStateEffectDemo />,
    code: `const [count, setCount] = useState(0);

useEffect(() => {
  const timer = setTimeout(() => setStatus('대기'), 500);
  requestAnimationFrame(() => setStatus('변경 감지됨'));
  return () => clearTimeout(timer);
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
