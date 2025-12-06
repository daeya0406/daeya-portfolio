import FormPatternDemo from '../examples/templates/FormPatternDemo';
import TableFilterDemo from '../examples/templates/TableFilterDemo';
import DataBoundaryDemo from '../examples/templates/DataBoundaryDemo';
import CompoundPatternDemo from '../examples/react/CompoundPatternDemo';
import { InfoBlock } from '../examples/InfoBlock';
import type { PlaygroundItem } from '@/types/playground';

export const templateItems: PlaygroundItem[] = [
  {
    id: 'form-pattern',
    title: 'Form',
    tags: ['RHF', 'Zod', 'Pattern'],
    description: 'RHF + ZOD (폼 상태/검증 패턴)',
    categories: ['templates'],
    demo: <FormPatternDemo />,
    code: `const schema = z.object({ email: z.string().email() })
const form = useZodForm({ schema })

<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField control={form.control} name="email" render={({ field }) => (
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )} />
    <Button type="submit">Submit</Button>
  </form>
</Form>`,
  },
  {
    id: 'data-boundary',
    title: 'Data 처리',
    tags: ['Boundary', 'Skeleton'],
    description: '로딩/빈/에러/성공 상태를 한곳에서 처리',
    categories: ['templates'],
    demo: <DataBoundaryDemo />,
    code: `if (state === 'loading') return <Skeleton />;
if (state === 'error') return <Error />;
if (state === 'empty') return <Empty />;
return <List data={data} />;`,
  },
  {
    id: 'table-filter',
    title: 'Table 필터•정렬',
    tags: ['Table', 'Filter', 'UI'],
    description: '필터/정렬/빈 상태 패턴',
    categories: ['templates'],
    demo: <TableFilterDemo />,
    code: `const filtered = items
  .filter((i) => i.status === filter)
  .sort((a,b) => {
    const aTime = dayjs(a.date, 'YYYY.MM.DD').valueOf();
    const bTime = dayjs(b.date, 'YYYY.MM.DD').valueOf();
    return sort === 'desc' ? bTime - aTime : aTime - bTime;
  });`,
  },
  {
    id: 'compoundpattern',
    title: '컴파운드 패턴',
    tags: ['React', 'Compound Pattern'],
    description: '부모 컴포넌트가 하위 컴포넌트를 노출해 조립하는 패턴',
    categories: ['templates'],
    demo: <CompoundPatternDemo />,
    code: `function CompoundList({ children }) {
  return <div>{children}</div>;
}
function CompoundItem({ title }) {
  return <div>{title}</div>;
}
CompoundList.Item = CompoundItem;

<CompoundList>
  <CompoundList.Item title="Item 1" active />
  <CompoundList.Item title="Item 2" />
  <CompoundList.Item title="Item 3" />
</CompoundList>;`,
  },
  {
    id: 'eslint-prettier',
    title: 'ESLint + Prettier 세팅',
    tags: ['Template', 'Lint'],
    description: '코드 품질/포매팅 템플릿',
    categories: ['templates'],
    demo: (
      <InfoBlock
        title="ESLint + Prettier"
        points={[
          'eslint-config-next + @typescript-eslint 기본 설정',
          'prettier / prettier-plugin-tailwindcss 적용',
          'lint 스크립트와 pre-push 훅에 연결 권장',
        ]}
      />
    ),
    code: `// package.json
"lint": "eslint",
"format": "prettier --write ."`,
  },
  {
    id: 'tailwind-ui',
    title: 'Tailwind UI 템플릿',
    tags: ['Template', 'Tailwind'],
    description: '레이아웃/카드/폼 베이스 템플릿',
    categories: ['templates'],
    demo: (
      <InfoBlock
        title="Tailwind UI Base"
        points={[
          'section-card, button, input 등 기본 유틸 클래스',
          '라이트/다크 모드 색상 토큰 정리',
          '레이아웃(max-width, grid) 기본 프리셋',
        ]}
      />
    ),
    code: `<div className="section-card">...</div>`,
  },
  {
    id: 'query-template',
    title: 'React Query 템플릿',
    tags: ['Template', 'Query'],
    description: '쿼리/뮤테이션 기본 패턴',
    categories: ['templates'],
    demo: (
      <InfoBlock
        title="Query 템플릿"
        points={[
          'queryKey, staleTime, select로 데이터 정제',
          'mutateAsync + onSuccess refetch 패턴',
          'Suspense/ErrorBoundary와 함께 사용',
        ]}
      />
    ),
    code: `const query = useQuery({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  staleTime: 1000 * 60,
});`,
  },
  {
    id: 'zustand-template',
    title: 'Zustand 템플릿',
    tags: ['Template', 'State'],
    description: '경량 전역 상태 예제',
    categories: ['templates'],
    demo: (
      <InfoBlock
        title="Zustand 패턴"
        points={[
          'slice 분리, persist 미들웨어로 저장소 유지',
          'selector로 불필요 렌더 방지',
          'immer와 함께 쓰면 불변 업데이트 간결',
        ]}
      />
    ),
    code: `const useStore = create((set) => ({
  count: 0,
  inc: () => set((s) => ({ count: s.count + 1 })),
}));`,
  },
];
