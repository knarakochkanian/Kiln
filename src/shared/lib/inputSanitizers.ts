export const sanitizeDigits = (value: string, maxLength?: number): string => {
  const digits = value.replace(/\D/g, '');
  return typeof maxLength === 'number' ? digits.slice(0, maxLength) : digits;
};

export const sanitizeExpirationDate = (value: string): string => {
  const digits = sanitizeDigits(value, 4);

  if (digits.length <= 2) {
    return digits;
  }

  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};
