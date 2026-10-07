import Link from "next/link";
import { site, contactLinks } from "@/config/site";
import { getServices } from "@/lib/content";
import { TelegramIcon, WhatsAppIcon, InstagramIcon, PulseMark } from "./icons";

const social = [
  { href: contactLinks.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon },
  { href: contactLinks.telegram, label: "Telegram", Icon: TelegramIcon },
  { href: contactLinks.instagram, label: "Instagram", Icon: InstagramIcon },
];

export default function Footer() {
  const services = getServices();

  return (
    <footer className="border-t border-white/10 pb-10 pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2.5 font-brand text-lg font-semibold">
            <PulseMark className="h-7 w-7 text-white" />
            {site.name}
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{site.tagline}.</p>
          <div className="mt-6 flex gap-2">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Услуги" className="col-span-2 md:col-span-1">
          {services.map((s) => (
            <FooterLink key={s.slug} href={`/uslugi/${s.slug}`}>
              {s.name}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title="Компания">
          <FooterLink href="/uslugi">Все услуги</FooterLink>
          <FooterLink href="/blog">Блог</FooterLink>
          <FooterLink href="/portfolio">Портфолио</FooterLink>
          <FooterLink href="/#contact">Контакты</FooterLink>
        </FooterColumn>

        <FooterColumn title="Контакты">
          <FooterLink href={contactLinks.whatsapp} external>
            WhatsApp
          </FooterLink>
          <FooterLink href={contactLinks.phone}>{site.phoneDisplay}</FooterLink>
          <li className="py-1.5 text-sm text-white/60">
            {site.city}, {site.country}
          </li>
        </FooterColumn>
      </div>

      <div className="mx-auto mt-14 flex max-w-6xl flex-col gap-2 border-t border-white/10 px-4 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between sm:px-6">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Разработка сайтов, Telegram-ботов и приложений в Бишкеке</span>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">{title}</p>
      <ul className="mt-4">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const cls = "inline-flex min-h-9 items-center text-sm text-white/70 transition-colors hover:text-white";
  return (
    <li>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      ) : (
        <Link href={href} className={cls}>
          {children}
        </Link>
      )}
    </li>
  );
}
