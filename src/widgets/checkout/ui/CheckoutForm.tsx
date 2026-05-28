'use client';

import { ChangeEvent, HTMLInputTypeAttribute, ReactNode, useEffect } from 'react';
import { UseFormRegister, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence } from 'framer-motion';
import { checkoutSchema, CheckoutFormInput } from '@/entities/checkout';
import { Button } from '@/shared/ui/Button/Button';
import { CardDetailsFields } from './CardDetailsFields';
import { useAppSelector } from '@/app/hooks';
import { selectPaymentMethod } from '@/entities/checkout';
import { cn } from '@/shared/lib/cn';
import { sanitizeDigits } from '@/shared/lib/inputSanitizers';

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormInput) => void;
  variant?: 'desktop' | 'mobile';
  cartSlot?: ReactNode;
  paymentMethodsSlot: ReactNode;
  summarySlot?: ReactNode;
}

export const CheckoutForm = ({
  onSubmit,
  variant = 'desktop',
  cartSlot,
  paymentMethodsSlot,
  summarySlot,
}: CheckoutFormProps) => {
  const paymentMethod = useAppSelector(selectPaymentMethod);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CheckoutFormInput>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod,
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zipCode: '',
      projectNotes: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    },
  });

  useEffect(() => {
    setValue('paymentMethod', paymentMethod, { shouldValidate: true });
  }, [paymentMethod, setValue]);

  const isMobile = variant === 'mobile';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn('font-display text-kiln-ink', isMobile ? 'space-y-5' : 'space-y-4')}
    >
      <input type="hidden" {...register('paymentMethod')} />

      <div className={cn('space-y-2', isMobile && 'mx-auto max-w-[650px] px-2')}>
        <LineInput
          label="Customer Name"
          register={register}
          name="fullName"
          error={errors.fullName?.message}
          labelClassName={isMobile ? 'text-base sm:text-xl' : undefined}
        />

        <div
          className={cn(
            'grid gap-3',
            isMobile ? 'grid-cols-1 sm:grid-cols-[0.75fr_1fr]' : 'grid-cols-1'
          )}
        >
          <LineInput
            label="Phone"
            register={register}
            name="phone"
            error={errors.phone?.message}
            labelClassName={isMobile ? 'text-base sm:text-xl' : undefined}
            inputMode="numeric"
            maxLength={15}
            sanitizer={(value) => sanitizeDigits(value, 15)}
          />
          <LineInput
            label="Email"
            register={register}
            name="email"
            error={errors.email?.message}
            labelClassName={isMobile ? 'text-base sm:text-xl' : undefined}
          />
        </div>

        <LineInput
          label="Shipping Address"
          register={register}
          name="address"
          error={errors.address?.message}
          labelClassName={isMobile ? 'text-base sm:text-xl' : undefined}
        />

        <div className="grid grid-cols-[minmax(0,1fr)_120px] gap-3">
          <LineInput
            label="City"
            register={register}
            name="city"
            error={errors.city?.message}
            compact
          />
          <LineInput
            label="ZIP"
            register={register}
            name="zipCode"
            error={errors.zipCode?.message}
            compact
            inputMode="numeric"
            maxLength={5}
            sanitizer={(value) => sanitizeDigits(value, 5)}
          />
        </div>

        {!isMobile && (
          <LineInput
            label="Project Notes"
            register={register}
            name="projectNotes"
            error={errors.projectNotes?.message}
          />
        )}
      </div>

      {isMobile && cartSlot}

      {summarySlot && <div className="border-t-2 border-kiln-ink pt-4">{summarySlot}</div>}

      <div className={cn(isMobile ? 'mx-auto max-w-[650px] px-2' : '')}>{paymentMethodsSlot}</div>

      <AnimatePresence initial={false}>
        {paymentMethod === 'credit-card' && (
          <div className={cn(isMobile ? 'mx-auto max-w-[650px] px-2' : '')}>
            <CardDetailsFields key="card-details" register={register} errors={errors} />
          </div>
        )}
      </AnimatePresence>

      {isMobile && (
        <div className="mx-auto max-w-[650px] px-2">
          <LineInput
            label="Project Name / Notes"
            register={register}
            name="projectNotes"
            error={errors.projectNotes?.message}
            labelClassName="text-base sm:text-xl"
          />
        </div>
      )}

      <Button
        type="submit"
        variant="primary"
        className={cn(
          'w-full rounded-md border-2 border-kiln-ink bg-[#40598F] font-display font-black uppercase text-kiln-cream shadow-[2px_2px_0_#2E2A27] hover:bg-[#334977]',
          isMobile && 'mx-auto block max-w-[650px]'
        )}
      >
        Place Secure Order
      </Button>
    </form>
  );
};

type LineInputName = keyof Pick<
  CheckoutFormInput,
  'fullName' | 'email' | 'address' | 'city' | 'zipCode' | 'phone' | 'projectNotes'
>;

interface LineInputProps {
  label: string;
  name: LineInputName;
  register: UseFormRegister<CheckoutFormInput>;
  error?: string;
  compact?: boolean;
  labelClassName?: string;
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  maxLength?: number;
  sanitizer?: (value: string) => string;
  type?: HTMLInputTypeAttribute;
}

const LineInput = ({
  label,
  name,
  register,
  error,
  compact = false,
  labelClassName,
  inputMode,
  maxLength,
  sanitizer,
  type = 'text',
}: LineInputProps) => {
  const registration = register(name);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (sanitizer) {
      event.currentTarget.value = sanitizer(event.currentTarget.value);
    }

    void registration.onChange(event);
  };

  return (
    <label className="block">
      <span className="flex items-end gap-2">
        <span
          className={cn(
            'whitespace-nowrap font-display text-sm font-black uppercase leading-none text-kiln-ink',
            compact && 'text-xs',
            labelClassName
          )}
        >
          {label}:
        </span>
        <input
          type={type}
          inputMode={inputMode}
          maxLength={maxLength}
          className={cn(
            'h-7 min-w-0 flex-1 border-0 border-b-2 border-kiln-ink bg-transparent px-1 font-display text-base font-black text-kiln-ink focus:ring-0',
            compact ? 'w-full' : 'w-full'
          )}
          {...registration}
          onChange={handleChange}
        />
      </span>
      {error && (
        <span className="mt-1 block text-xs font-semibold text-red-700">
          {error}
        </span>
      )}
    </label>
  );
};
