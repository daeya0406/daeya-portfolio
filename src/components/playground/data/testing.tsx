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
    code: `1.	map
    이름만 뽑은 배열 만들기 → ["A", "B", "C"]

    {users.map((user) => user.name).join(', ')}

2.	filter
    25살 이상만 남기기

    {users
      .filter((user) => user.age >= 25)
      .map((user) => user.name)
      .join(', ')}
  
3.	find
    id가 2인 유저 찾기

    {users.find((user) => user.age >= 25)?.name}

4.	추가
    새 유저 하나 추가한 새 배열 만들기

    {[...users, { id: 4, name: 'D', age: 35 }].map((user) => user.name).join(', ')}

5.	수정
    id가 2인 유저의 나이만 26으로 바꾼 새 배열 만들기

    {users
      .map((user) => (user.id === 2 ? { ...user, name: 'Z', age: 40 } : user))
      .map((user) => user.name)
      .join(', ')}
  
6.	삭제
    id가 1인 유저 삭제한 새 배열 만들기
    
    {users
      .filter((user) => user.id !== 1)
      .map((user) => user.name)
      .join(', ')}`,
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
