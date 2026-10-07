"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site, contactLinks, navLinks } from "@/config/site";
import { TelegramIcon, InstagramIcon, WhatsAppIcon, PulseMark } from "./icons";

const secondaryIcons = [
  { href: contactLinks.telegram, label: "Telegram", Icon: TelegramIcon },
  { href: contactLinks.instagram, label: "Instagram", Icon: InstagramIcon },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && pathname.startsWith(href);
  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-white/10 bg-black/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-brand text-lg font-semibold tracking-tight"
          aria-label={`${site.name} — на главную`}
        >
          <PulseMark className="h-7 w-7 text-white" />
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Основное меню">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`transition-colors hover:text-white ${
                isActive(link.href) ? "text-white" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {secondaryIcons.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-colors hover:text-white"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex h-10 items-center gap-2 rounded-full bg-white pl-3 pr-4 text-sm font-medium text-black transition-colors hover:bg-white/90"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Написать в WhatsApp
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <a
            href={contactLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написать в WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black active:scale-95"
          >
            <WhatsAppIcon className="h-[22px] w-[22px]" />
          </a>
          <button
            type="button"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-black px-4 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col" aria-label="Мобильное меню">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex h-14 items-center border-b border-white/10 font-display text-lg text-white/90"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 flex-1 items-center justify-center gap-2.5 rounded-full bg-white text-[15px] font-medium text-black"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Написать в WhatsApp
            </a>
            {secondaryIcons.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white/80"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
