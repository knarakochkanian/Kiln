'use client';

import { cn } from '@/shared/lib/cn';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md p-6 border border-kiln-cream-dark',
        className
      )}
    >
      {children}
    </div>
  );
};
