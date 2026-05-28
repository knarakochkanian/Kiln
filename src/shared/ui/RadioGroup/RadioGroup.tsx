'use client';

import { cn } from '@/shared/lib/cn';

export interface RadioOption<TValue extends string> {
  value: TValue;
  label: string;
}

interface RadioGroupProps<TValue extends string> {
  options: readonly RadioOption<TValue>[];
  value: TValue;
  onChange: (value: TValue) => void;
  name: string;
}

export const RadioGroup = <TValue extends string,>({
  options,
  value,
  onChange,
  name,
}: RadioGroupProps<TValue>) => {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className={cn(
            'flex items-center gap-3 p-3 rounded-md cursor-pointer',
            'border-2 transition-all duration-200',
            value === option.value
              ? 'border-kiln-clay bg-kiln-clay bg-opacity-5'
              : 'border-kiln-muted-light hover:border-kiln-muted'
          )}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className="w-4 h-4 cursor-pointer accent-kiln-clay"
          />
          <span className="text-base font-medium text-kiln-ink">{option.label}</span>
        </label>
      ))}
    </div>
  );
};
