"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

export default function MobileMenu({ items }: { items: NavigationItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
        className="flex size-11 items-center justify-center rounded-sm border border-line text-ink transition-colors hover:bg-surface-muted"
      >
        <span className="flex w-4 flex-col gap-1" aria-hidden="true">
          <span
            className={`h-px w-full bg-current transition-transform ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-full bg-current transition-opacity ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-px w-full bg-current transition-transform ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
          />
        </span>
      </button>
      {isOpen && (
        <nav
          id="mobile-navigation"
          className="absolute inset-x-0 top-20 border-b border-line bg-paper px-6 py-6 shadow-lg"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-sm px-4 py-3 text-base font-medium hover:bg-surface-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="mt-3 rounded-sm bg-accent px-4 py-3 text-center text-sm font-semibold text-paper hover:bg-accent-deep"
            >
              Explore products
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
