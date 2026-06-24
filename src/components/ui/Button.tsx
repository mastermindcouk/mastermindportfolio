import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
}

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  size = "md",
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 active:scale-[0.97]";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-brand-500 hover:bg-brand-600 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40",
    secondary:
      "bg-surface-300 hover:bg-surface-400 text-white border border-white/10",
    ghost: "text-gray-400 hover:text-white hover:bg-surface-300",
  };
  const classes = cn(base, sizes[size], variants[variant], className);
  if (href)
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  return (
    <button onClick={onClick} className={classes} type={type}>
      {children}
    </button>
  );
}
