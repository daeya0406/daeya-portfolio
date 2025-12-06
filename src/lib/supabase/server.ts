import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  const msg =
    'Supabase server env가 없습니다. NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY 를 설정하세요.';
  console.warn(msg + ' (placeholder 클라이언트로 계속 진행)');
}

export const supabaseServer = () =>
  createClient(
    supabaseUrl ?? 'https://placeholder.supabase.co',
    serviceRoleKey ?? 'service-role-key-placeholder', // 서버 전용 키
    {
      auth: {
        persistSession: false, // 서버는 세션 저장 필요 없음
      },
    }
  );
