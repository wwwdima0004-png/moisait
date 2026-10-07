import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/config/site";
import type { Service } from "@/lib/content";
import HeroIllustration from "./HeroIllustration";
import HeroBackground from "./HeroBackground";
import ServiceIcon from "./ServiceIcon";
import WhatsAppButton from "./WhatsAppButton";

// Направления в hero: шесть ключевых услуг ровной сеткой 2×3 / 3×2.
const heroServices = [
  "razrabotka-saytov-bishkek",
  "telegram-boty-na-zakaz",
  "mini-prilozheniya-telegram",
  "razrabotka-prilozheniy",
  "crm-sistemy-na-zakaz",
  "avtomatizatsiya-biznesa",
];

export default function Hero({ services }: { services: Service[] }) {
  const chips = heroServices.flatMap((slug) => services.filter((s) => s.slug === slug));

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-20 sm:pb-24 sm:pt-32 lg:pt-36">
      <HeroBackground />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] lg:items-center lg:gap-10">
        <div>
          <p className="hero-in flex items-center gap-2.5 text-[13px] text-white/80 sm:inline-flex sm:rounded-full sm:border sm:border-white/15 sm:bg-black/40 sm:py-1.5 sm:pl-2.5 sm:pr-3.5 sm:text-sm sm:backdrop-blur-sm">
            <span className="pulse-dot" aria-hidden="true" />
            {site.tagline}
          </p>

          <div className="hero-frame mt-5 sm:mt-6">
            <span className="corner tl" aria-hidden="true" />
            <span className="corner tr" aria-hidden="true" />
            <span className="corner bl" aria-hidden="true" />
            <span className="corner br" aria-hidden="true" />
            <h1 className="hero-heading font-display font-bold tracking-tight">
              <span className="block">
                Создаём <span className="whitespace-nowrap">IT‑решения,</span>
              </span>
              <span className="block text-white/55">которые приносят</span>
              <span className="block">
                <span className="hero-mark">результат</span>
                <span className="hero-caret" aria-hidden="true" />
              </span>
            </h1>
          </div>

          <p className="hero-lede hero-in mt-7 max-w-xl text-white/70 [animation-delay:120ms]">
            Разрабатываем сайты, Telegram-ботов, мини-приложения, CRM-системы и веб-сервисы,
            автоматизируем процессы для бизнеса в Бишкеке и по всему Кыргызстану.
          </p>

          <div className="hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 [animation-delay:200ms]">
            <WhatsAppButton fullOnMobile />
            <Link
              href="/uslugi"
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-base text-white/85 transition-colors hover:border-white/50 hover:text-white"
            >
              Все услуги
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <ul className="hero-in mt-10 grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 [animation-delay:280ms]" aria-label="Направления">
            {chips.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/uslugi/${s.slug}`}
                  className="flex h-14 items-center gap-2.5 rounded-xl border border-white/15 bg-black/30 px-3 text-[13px] font-medium leading-tight text-white/85 transition-colors hover:border-white/45 hover:bg-white/[0.04] hover:text-white sm:text-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.07]">
                    <ServiceIcon name={s.icon} size={16} />
                  </span>
                  <span className="min-w-0">{s.short}</span>
                </Link>
              </li>
            ))}
          </ul>

        </div>

        <div className="hero-in [animation-delay:200ms]">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
