import { useForm, type UseFormProps, type UseFormReturn, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type z } from 'zod';

type FormValues<TSchema extends z.ZodTypeAny> = z.infer<TSchema> & FieldValues;

export function useZodForm<TSchema extends z.ZodTypeAny>(
  props: { schema: TSchema } & Omit<UseFormProps<FormValues<TSchema>>, 'resolver'>
): UseFormReturn<FormValues<TSchema>> {
  const { schema, ...rest } = props;

  return useForm<FormValues<TSchema>>({
    ...rest,
    resolver: zodResolver(schema as any) as any,
  });
}
