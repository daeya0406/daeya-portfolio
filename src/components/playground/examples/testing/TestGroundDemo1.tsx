'use client';

import { Typo } from '@/components/ui/Text';

const users = [
  { id: 1, name: 'A', age: 20 },
  { id: 2, name: 'B', age: 25 },
  { id: 3, name: 'C', age: 30 },
];

export default function TestGroundDemo1() {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      <section className="section-component">
        <Typo.h6>1. map</Typo.h6>
        <div>{users.map((user) => user.name).join(', ')}</div>
      </section>
      <section className="section-component">
        <Typo.h6>2. filter</Typo.h6>
        <div>
          {users
            .filter((user) => user.age >= 25)
            .map((user) => user.name)
            .join(', ')}
        </div>
      </section>
      <section className="section-component">
        <Typo.h6>3. find</Typo.h6>
        <div>{users.find((user) => user.age >= 25)?.name}</div>
      </section>
      <section className="section-component">
        <Typo.h6>4. 추가</Typo.h6>
        <div>{[...users, { id: 4, name: 'D', age: 35 }].map((user) => user.name).join(', ')}</div>
      </section>
      <section className="section-component">
        <Typo.h6>5. 수정</Typo.h6>
        <div>
          {users
            .map((user) => (user.id === 2 ? { ...user, name: 'Z', age: 40 } : user))
            .map((user) => user.name)
            .join(', ')}
        </div>
      </section>
      <section className="section-component">
        <Typo.h6>6. 삭제</Typo.h6>
        <div>
          {users
            .filter((user) => user.id !== 1)
            .map((user) => user.name)
            .join(', ')}
        </div>
      </section>
    </div>
  );
}
