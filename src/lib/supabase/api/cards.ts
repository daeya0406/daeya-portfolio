import { supabase } from '@/lib/supabase';

export async function getCards() {
  const { data, error } = await supabase.from('cards').select('*');

  if (error) throw new Error(error.message);
  return data;
}

export async function getCard(id: string) {
  const { data, error } = await supabase.from('cards').select('*').eq('id', id).single();

  if (error) throw new Error(error.message);
  return data;
}
