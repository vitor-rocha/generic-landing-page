import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Fieldwork
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-paper/60">
            A simple place for useful products, clear ideas, and a little more intention.
          </p>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/80">
            Explore
          </h2>
          <div className="mt-4 flex flex-col items-start gap-3 text-sm text-paper/70">
            <Link href="/products" className="transition-colors hover:text-paper">
              Products
            </Link>
            <Link href="/about" className="transition-colors hover:text-paper">
              About
            </Link>
            <Link href="/contact" className="transition-colors hover:text-paper">
              Contact
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/80">
            Contact
          </h2>
          <div className="mt-4 flex flex-col items-start gap-3 text-sm text-paper/70">
            <a href="mailto:hello@fieldwork.example" className="transition-colors hover:text-paper">
              hello@fieldwork.example
            </a>
            <a href="tel:+551140028922" className="transition-colors hover:text-paper">
              +55 11 4002-8922
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/80">
            Studio
          </h2>
          <p className="mt-4 max-w-[12rem] text-sm leading-6 text-paper/70">
            São Paulo, Brazil
            <br />
            Open Monday to Friday
          </p>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 border-t border-paper/15 px-6 py-5 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>© 2026 Fieldwork. Built for the everyday.</p>
        <p>Made with care in São Paulo.</p>
      </div>
    </footer>
  );
}
