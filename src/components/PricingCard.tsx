interface PricingCardProps {
  icon: string;
  name: string;
  descriptor: string;
  price: string;
  bullets: string[];
  popular?: boolean;
  vehicle?: boolean;
}

export default function PricingCard({
  icon,
  name,
  descriptor,
  price,
  bullets,
  popular,
  vehicle,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl border p-6 flex flex-col gap-4 transition-shadow hover:shadow-lg ${
        vehicle
          ? "border-[#0D1F5C] bg-white"
          : popular
          ? "border-[#D42B2B] bg-white shadow-md"
          : "border-gray-200 bg-white"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D42B2B] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
          Most Popular
        </span>
      )}

      {/* Vehicle header bar */}
      {vehicle && (
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-[#0D1F5C]" />
      )}

      <div className="flex items-start justify-between">
        <div>
          <div className="text-3xl mb-2">{icon}</div>
          <h3 className="text-base font-bold text-[#0D1F5C]">{name}</h3>
          <p className="text-xs text-[#6B7280] mt-0.5">{descriptor}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-extrabold text-[#0D1F5C]">{price}</div>
          <div className="text-xs text-[#6B7280] mt-0.5">One Way</div>
        </div>
      </div>

      <ul className="space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#1A1410]">
            <span className="text-[#D42B2B] mt-0.5 shrink-0">✓</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
