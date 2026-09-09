type SectionProps = {
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
};

export default function Section({
  children,
  eyebrow,
  title,
  description,
  className = "",
}: SectionProps) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-5xl">{title}</h2>
          )}
          {description && <p className="mt-5 text-lg leading-8 text-ink-muted">{description}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
