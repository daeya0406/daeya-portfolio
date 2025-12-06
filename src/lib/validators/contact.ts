import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, '이름을 2자 이상 입력하세요.'),
  email: z.string().email('올바른 이메일 형식이 아니에요.'),
  message: z.string().min(10, '문의 내용을 10자 이상 작성해주세요.'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
