interface QuantityControlsProps {
  quantity: number;
  onChangeQuantity?: (value: number) => void;
}

export const QuantityControls = ({
  quantity,
  onChangeQuantity,
}: QuantityControlsProps) => {
  return (
    <label className="flex items-center justify-center gap-1 font-display text-[22px] font-black leading-none text-kiln-ink sm:text-[24px]">
      <span aria-hidden="true">[</span>
      <input
        type="number"
        aria-label="Quantity"
        value={quantity}
        onChange={(e) => {
          const value = Math.max(1, parseInt(e.target.value) || 1);
          onChangeQuantity?.(value);
        }}
        className="h-8 w-14 border-0 bg-transparent p-0 text-center font-display text-lg font-black leading-none text-kiln-ink [appearance:textfield] focus:ring-0 sm:w-16 sm:text-xl [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        min="1"
      />
      <span aria-hidden="true">]</span>
    </label>
  );
};
