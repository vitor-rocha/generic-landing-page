import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-10">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
        <li>
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span
                aria-current={index === items.length - 1 ? "page" : undefined}
                className={index === items.length - 1 ? "font-medium text-ink" : ""}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
