'use client';

import { cn } from '@/shared/lib/cn';
import { ReactNode } from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'caption';

interface TypographyProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

export const Typography = ({ children, variant = 'body', className }: TypographyProps) => {
  const variantStyles = {
    h1: 'text-3xl lg:text-4xl font-bold text-kiln-ink',
    h2: 'text-2xl lg:text-3xl font-bold text-kiln-ink',
    h3: 'text-xl lg:text-2xl font-semibold text-kiln-ink',
    h4: 'text-lg font-semibold text-kiln-ink',
    body: 'text-base text-kiln-ink',
    caption: 'text-sm text-kiln-muted',
  };

  const Element: keyof JSX.IntrinsicElements = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'h3' ? 'h3' : variant === 'h4' ? 'h4' : variant === 'caption' ? 'span' : 'p';

  return (
    <Element className={cn(variantStyles[variant], className)}>
      {children}
    </Element>
  );
};
