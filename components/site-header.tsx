"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#occasions", label: "Occasions" },
  { href: "/#lookbook", label: "Lookbook" },
  { href: "/#reels", label: "Reels" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/order", label: "Order" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-sand/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/cakes/logo.webp"
            alt="LittleBakes logo"
            width={320}
            height={320}
            className="h-11 w-11 rounded-full object-cover ring-1 ring-sand"
            priority
          />
          <span className="font-display text-xl tracking-tight text-ink">LittleBakes</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/order"
            className="rounded-full bg-rose px-4 py-2 text-sm font-medium text-foam hover:bg-ink"
          >
            Order by DM
          </Link>
          <button
            type="button"
            className="rounded-full border border-sand px-3 py-2 text-sm md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-nav" className="border-t border-sand px-5 py-4 md:hidden" aria-label="Mobile">
          <ul className="grid gap-3 text-lg">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="block py-1">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
