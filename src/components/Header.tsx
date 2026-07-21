"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { brand, contactLinks } from "@/config/site";

const navLinks = [
  { href: "/#about", label: "Обо мне" },
  { href: "/#portfolio", label: "Портфолио" },
  { href: "/#services", label: "Услуги" },
  { href: "/#contact", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-semibold tracking-tight text-lg">
          {brand.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={contactLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
          >
            Написать в Telegram
          </a>
        </div>

        <button
          aria-label="Открыть меню"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black px-6 py-6 flex flex-col gap-5 text-white/80">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base">
              {link.label}
            </Link>
          ))}
          <a
            href={contactLinks.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-fit items-center rounded-full border border-white/20 px-4 py-2 text-sm"
          >
            Написать в Telegram
          </a>
        </div>
      )}
    </header>
  );
}
