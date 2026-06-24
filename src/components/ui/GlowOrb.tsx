export function GlowOrb({
  className = "",
  color = "brand",
}: {
  className?: string;
  color?: "brand" | "accent";
}) {
  const colors = {
    brand: "bg-brand-500/20",
    accent: "bg-accent-500/20",
  };
  return (
    <div
      aria-hidden
      className={`absolute rounded-full blur-[120px] pointer-events-none ${colors[color]} ${className}`}
    />
  );
}
