export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-500/10 text-brand-400 border border-brand-500/20">
      <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse-slow" />
      {children}
    </span>
  );
}
