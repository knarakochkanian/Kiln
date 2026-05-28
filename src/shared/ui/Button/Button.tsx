'use client';

import { cn } from '@/shared/lib/cn';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
  children,
  disabled = false,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'font-medium rounded-md transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-kiln-clay text-kiln-cream hover:bg-kiln-clay-dark active:bg-kiln-clay-dark',
    secondary: 'bg-kiln-cream-dark text-kiln-ink border border-kiln-muted hover:bg-kiln-muted-light',
    danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
  };

  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
