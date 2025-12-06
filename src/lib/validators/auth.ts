import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email('올바른 이메일을 입력하세요.'),
  password: z.string().min(8, '비밀번호는 8자 이상 입력하세요.'),
});

export type AuthFormValues = z.infer<typeof authSchema>;

export const signUpSchema = authSchema.extend({
  confirmPassword: z.string().min(8, '비밀번호는 8자 이상 입력하세요.'),
}).refine((data) => data.password === data.confirmPassword, {
  message: '비밀번호가 일치하지 않습니다.',
  path: ['confirmPassword'],
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

export const forgotSchema = z.object({
  email: z.string().email('올바른 이메일을 입력하세요.'),
});

export type ForgotFormValues = z.infer<typeof forgotSchema>;

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, '비밀번호는 8자 이상 입력하세요.'),
    confirmPassword: z.string().min(8, '비밀번호는 8자 이상 입력하세요.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;
