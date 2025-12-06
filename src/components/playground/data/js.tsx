import NullishPatternDemo from '../examples/js/NullishPatternDemo';
import TryCatchDemo from '../examples/js/TryCatchDemo';
import ThrottleDebounceDemo from '../examples/js/ThrottleDebounceDemo';
import ShallowDeepCopyDemo from '../examples/js/ShallowDeepCopyDemo';
import { InfoBlock } from '../examples/InfoBlock';
import type { PlaygroundItem } from '@/types/playground';

export const jsItems: PlaygroundItem[] = [
  {
    id: 'nullish-pattern',
    title: 'nullish / or / 삼항 연산자',
    tags: ['??', '||', '? :'],
    description: 'nullish / or / 삼항 연산자로 안전한 fallback',
    categories: ['js'],
    demo: <NullishPatternDemo />,
    code: `const role = user.role ?? 'guest'; // null/undefined면 'guest'
const city = user.city || 'Unknown'; // falsy면 'Unknown'
const greeting = user.name ? \`Hello, \${user.name}!\` : 'None!';`,
  },
  {
    id: 'async-loop',
    title: '비동기 흐름 / 이벤트 루프',
    tags: ['JS', 'Async'],
    description: '마이크로태스크/매크로태스크 흐름 정리',
    categories: ['js'],
    demo: (
      <InfoBlock
        title="이벤트 루프 핵심"
        points={[
          '마이크로태스크 (Promise.then) → 매크로태스크 (setTimeout) 순서',
          '비동기 반복은 await + for...of (Promise.all 병렬 시 주의)',
          '브라우저 렌더는 태스크 사이에 수행',
        ]}
      />
    ),
    code: `queueMicrotask(() => console.log('micro'));
setTimeout(() => console.log('macro'), 0);
Promise.resolve().then(() => console.log('promise'));`,
  },
  {
    id: 'closure',
    title: '클로저 실전',
    tags: ['JS', 'Closure'],
    description: '함수 스코프에 값 캡처하기',
    categories: ['js'],
    demo: (
      <InfoBlock
        title="클로저 활용"
        points={[
          '카운터/메모이제이션/이벤트 핸들러에 상태 보존',
          'var → 블록 스코프 주의, let/const 사용',
          '참조를 공유하므로 불변 패턴과 함께 사용',
        ]}
      />
    ),
    code: `function createCounter() {
  let count = 0;
  return () => ++count;
}
const next = createCounter();
next(); // 1`,
  },
  {
    id: 'immutability',
    title: '불변성',
    tags: ['JS', 'State'],
    description: '불변 업데이트 패턴',
    categories: ['js'],
    demo: (
      <InfoBlock
        title="불변 업데이트"
        points={[
          '배열: [...arr, newItem], map/filter로 새 배열 생성',
          '객체: {...obj, key: value}로 얕은 복사',
          '깊은 중첩은 immer/zod 등 도구 고려',
        ]}
      />
    ),
    code: `const next = { ...prev, todos: prev.todos.map(...) };`,
  },
  {
    id: 'this-binding',
    title: 'this 정리',
    tags: ['JS', 'this'],
    description: 'this 바인딩 규칙 정리',
    categories: ['js'],
    demo: (
      <InfoBlock
        title="this 바인딩"
        points={[
          '메서드 호출: obj.fn() → obj',
          '화살표 함수: 상위 스코프 this를 캡처',
          'bind/apply/call로 명시적 바인딩',
        ]}
      />
    ),
    code: `const fn = obj.fn.bind(obj);
fn(); // obj를 this로 사용`,
  },
  {
    id: 'try-catch',
    title: 'try ... catch',
    tags: ['JS', 'Error'],
    description: 'try/catch/finally 기본 패턴',
    categories: ['js'],
    demo: <TryCatchDemo />,
    code: `try {
  const result = JSON.parse('{ "ok": true }');
  console.log('성공', result);
} catch (err) {
  console.error('에러', err);
} finally {
  // 정리 작업
}`,
  },
  {
    id: 'debounce',
    title: 'Throttle vs Debounce',
    tags: ['JS', 'Utility'],
    description: '입력 지연 vs 주기적 실행 비교',
    categories: ['js'],
    demo: <ThrottleDebounceDemo />,
    code: `// debounce
const debounced = debounce(fn, 400);
// throttle
const throttled = throttle(fn, 400);`,
  },
  {
    id: 'promise-pattern',
    title: 'Promise 패턴',
    tags: ['JS', 'Promise'],
    description: '병렬/직렬 처리 정리',
    categories: ['js'],
    demo: (
      <InfoBlock
        title="Promise 패턴"
        points={[
          '병렬: Promise.all (allSettled로 부분 실패 처리)',
          '직렬: for...of + await, 필요 시 reduce 체인',
          'timeout/race로 타임아웃 제어',
        ]}
      />
    ),
    code: `const [a,b] = await Promise.all([fetchA(), fetchB()]);

for (const item of items) await process(item);

await Promise.race([task(), timeout(5000)]);`,
  },
  {
    id: 'shallow-deep',
    title: '얕은 복사 vs 깊은 복사',
    tags: ['JS', 'Copy'],
    description: '참조 공유 여부 확인',
    categories: ['js'],
    demo: <ShallowDeepCopyDemo />,
    code: `const shallow = { ...obj };              // 중첩 참조 공유
const deep = structuredClone(obj);       // 중첩까지 새로 생성
 
// 얕은 복사 예시
const [shallow, setShallow] = useState({ ...base });
const pushShallow = () => {
    shallow.tags.push('next');
    setShallow({ ...shallow });
  };

// 깊은 복사 예시
const [deep, setDeep] = useState(structuredClone(base));
const pushDeep = () => {
  const next = structuredClone(deep);
  next.tags.push('next');
  setDeep(next);
};`,
  },
];
