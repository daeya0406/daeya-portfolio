import { createClient } from '@supabase/supabase-js';

export const supabaseServer = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // 무조건 서버에서만 사용
    {
      auth: {
        persistSession: false, // 서버는 세션 저장 필요 없음
      },
    }
  );
