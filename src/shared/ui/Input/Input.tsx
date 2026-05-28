'use client';

import { cn } from '@/shared/lib/cn';
import { forwardRef, InputHTMLAttributes, useId } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-kiln-ink">
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={cn(
            'px-3 py-2 border border-kiln-muted-light rounded-md',
            'bg-white text-kiln-ink placeholder-kiln-muted',
            'focus:border-kiln-clay focus:ring-2 focus:ring-kiln-clay focus:ring-opacity-20',
            'transition-colors duration-200',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
            className
          )}
          {...props}
        />
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
