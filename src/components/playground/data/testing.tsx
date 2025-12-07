import TestGroundDemo1 from '../examples/testing/TestGroundDemo1';
import TestGroundDemo2 from '../examples/testing/TestGroundDemo2';
import type { PlaygroundItem } from '@/types/playground';

const CustomButton = () => {
  return <button>Custom Button</button>;
};

export { CustomButton };

export const testingItems: PlaygroundItem[] = [
  {
    id: 'testing-1',
    title: '테스트 1',
    tags: ['Testing', 'Practice'],
    description: '연습',
    categories: ['testing'],
    demo: <TestGroundDemo1 />,
    code: `코드 내용`,
  },
  {
    id: 'testing-2',
    title: '테스트 2',
    tags: ['Testing', 'Practice'],
    description: '연습',
    categories: ['testing'],
    demo: <TestGroundDemo2 />,
    code: `코드 내용`,
  },
];
