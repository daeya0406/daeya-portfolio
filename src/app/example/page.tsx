import { Heading } from '@/components/common/Heading';
import { supabase } from '@/lib/supabase';

export default async function Example() {
  const { data, error } = await supabase.from('cards').select('*');

  if (error) return <div>에러: {error.message}</div>;

  return (
    <div className="section-card">
      <Heading>Cards</Heading>

      <div className="flex flex-col gap-4">
        {data?.map((card) => (
          <div key={card.id} className="rounded-lg border bg-slate-100 p-4">
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm opacity-80">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
