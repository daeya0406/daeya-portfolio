import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

type ElementTag = React.ElementType;
type PolymorphicRef<C extends ElementTag> = React.ComponentPropsWithRef<C>['ref'];

const textVariants = cva('text-slate-900 dark:text-slate-100', {
  variants: {
    variant: {
      muted: 'text-muted-foreground',
      success: 'text-emerald-600 dark:text-emerald-400',
      danger: 'text-red-600 dark:text-red-400',
      primary: 'text-blue-600 dark:text-blue-400',
      strong: 'font-semibold',
      default: '',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'base',
    variant: 'default',
  },
});

type TextProps<C extends ElementTag = 'p'> = {
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'ref'> &
  VariantProps<typeof textVariants>;

type TextComponent = (<C extends ElementTag = 'p'>(
  props: TextProps<C> & { ref?: PolymorphicRef<C> }
) => React.ReactElement | null) & { displayName?: string };

const TextInner = <C extends ElementTag = 'p'>(
  { as, className, variant, size, ...props }: TextProps<C>,
  ref: PolymorphicRef<C>
) => {
  const Comp = (as ?? 'p') as ElementTag;
  return <Comp ref={ref} className={cn(textVariants({ variant, size }), className)} {...props} />;
};

const Text = React.forwardRef(
  TextInner as React.ForwardRefRenderFunction<HTMLElement, TextProps<ElementTag>>
) as TextComponent;

Text.displayName = 'Text';

type BaseTypoProps = TextProps<ElementTag>;

const createTypo = (defaultTag: ElementTag, defaultClass: string) => {
  const Comp = React.forwardRef<HTMLElement, BaseTypoProps>(({ className, as, ...props }, ref) => (
    <Text
      ref={ref as PolymorphicRef<ElementTag>}
      as={as ?? (defaultTag as never)}
      className={cn(defaultClass, className)}
      {...props}
    />
  ));

  Comp.displayName = `Typo.${typeof defaultTag === 'string' ? defaultTag : 'Custom'}`;
  return Comp;
};

export const Typo = {
  h1: createTypo('h1', 'typo-h1'),
  h2: createTypo('h2', 'typo-h2'),
  h3: createTypo('h3', 'typo-h3'),
  h4: createTypo('h4', 'typo-h4'),
  h5: createTypo('h5', 'typo-h5'),
  h6: createTypo('h6', 'typo-h6'),
  bodyXl: createTypo('p', 'typo-body-xl'),
  bodyLg: createTypo('p', 'typo-body-lg'),
  bodyMd: createTypo('p', 'typo-body-md'),
  bodySm: createTypo('p', 'typo-body-sm'),
  bodyXs: createTypo('p', 'typo-body-xs'),
  body: createTypo('p', 'typo-body-md'),
  caption: createTypo('span', 'typo-caption'),
  overline: createTypo('span', 'typo-overline'),
};

export { Text, textVariants };
