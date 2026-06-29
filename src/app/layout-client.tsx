"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangProvider, useLang } from "@/lib/lang-context";
import type { ReactNode } from "react";

function Nav() {
  const { t, l, toggle } = useLang();
  const path = usePathname();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/order", label: t("nav.order") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
    { href: "/delivery", label: t("nav.delivery") },
    { href: "/blog", label: t("nav.blog") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-light/50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌸</span>
          <span className="font-semibold text-lg text-foreground hidden sm:inline">
            Flower Corner
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-600">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-rose-dark transition-colors ${
                path === link.href ? "text-rose-dark font-medium" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="text-xs px-3 py-1.5 rounded-full border border-rose-light text-rose-dark hover:bg-rose-light/30 transition-colors"
          >
            {t("lang.switch")}
          </button>

          <MobileMenu links={links} path={path} l={l} toggle={toggle} t={t} />
        </div>
      </div>
    </header>
  );
}

function MobileMenu({
  links,
  path,
  l,
  toggle,
  t,
}: {
  links: { href: string; label: string }[];
  path: string;
  l: string;
  toggle: () => void;
  t: (k: string) => string;
}) {
  return (
    <details className="md:hidden group">
      <summary className="list-none cursor-pointer p-2 text-zinc-600 hover:text-rose-dark">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </summary>
      <div className="absolute top-16 left-0 right-0 bg-white border-b border-rose-light/50 shadow-lg p-4 flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded-lg text-sm ${
              path === link.href
                ? "bg-rose-light text-rose-dark font-medium"
                : "text-zinc-600 hover:bg-warm"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={toggle}
          className="mt-2 text-sm px-4 py-2 rounded-lg border border-rose-light text-rose-dark hover:bg-rose-light/30"
        >
          {t("lang.switch")} ({l === "en" ? "TH" : "EN"})
        </button>
      </div>
    </details>
  );
}

function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-white border-t border-rose-light/50 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-3">🌸 Flower Corner Phuket</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Handcrafted floral arrangements made with love in Phuket, Thailand.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">{t("nav.gallery")}</h3>
            <div className="flex flex-col gap-2 text-sm text-zinc-500">
              <Link href="/gallery" className="hover:text-rose-dark transition-colors">
                {t("nav.gallery")}
              </Link>
              <Link href="/order" className="hover:text-rose-dark transition-colors">
                {t("nav.order")}
              </Link>
              <Link href="/delivery" className="hover:text-rose-dark transition-colors">
                {t("nav.delivery")}
              </Link>
              <Link href="/blog" className="hover:text-rose-dark transition-colors">
                {t("nav.blog")}
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-3">{t("nav.contact")}</h3>
            <div className="flex flex-col gap-2 text-sm text-zinc-500">
              <a href="tel:+66950514071" className="hover:text-rose-dark transition-colors">
                +66 095-071-4071
              </a>
              <a
                href="https://wa.me/66950514071"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-dark transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/flowercorner.hkt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose-dark transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-rose-light/30 pt-6 text-center text-xs text-zinc-400">
          <p>{t("footer.copyright")}</p>
          <p className="mt-1">{t("footer.made")}</p>
        </div>
      </div>
    </footer>
  );
}

export function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </LangProvider>
  );
}
