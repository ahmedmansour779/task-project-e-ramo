export type FlagCode = "ar" | "en";

export function Flag({ code, className }: { code: FlagCode; className?: string }) {
  if (code === "ar") {
    return (
      <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
        <rect width="24" height="16" rx="2" fill="#006C35" />
        <rect x="6" y="4.5" width="12" height="2.2" rx="1.1" fill="#fff" />
        <rect x="6.5" y="10.5" width="11" height="1.1" rx="0.55" fill="#fff" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 16" className={className} aria-hidden="true">
      <rect width="24" height="16" rx="2" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="3" />
    </svg>
  );
}
