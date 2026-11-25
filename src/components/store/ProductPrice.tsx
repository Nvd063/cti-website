interface ProductPriceProps {
  price?: number | null;
  showPrice?: boolean;
  currency?: string;
}

export default function ProductPrice({
  price,
  showPrice = false,
  currency = "PKR",
}: ProductPriceProps) {
  const canDisplayPrice =
    showPrice &&
    typeof price === "number" &&
    Number.isFinite(price) &&
    price >= 0;

  if (!canDisplayPrice) {
    return (
      <p className="text-[11px] font-semibold text-[#203164] sm:text-sm">
        Price on Request
      </p>
    );
  }

  return (
    <p className="flex flex-wrap items-baseline gap-1 font-bold tracking-tight text-[#0b162c]">
      <span className="text-[10px] font-semibold sm:text-xs">
        {currency}
      </span>

      <span className="text-sm sm:text-xl">
        {price.toLocaleString("en-PK")}
      </span>
    </p>
  );
}