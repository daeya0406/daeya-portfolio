'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function Practice() {
  const [number, setNumber] = useState(0);

  const increaceCount = () => {
    setNumber((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(number);
  }, [number]);

  return (
    <>
      <h2>카운터</h2>
      <Button onClick={increaceCount}>{number}</Button>
    </>
  );
}
