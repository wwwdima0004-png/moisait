"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Globe, Send, Grid2x2, Zap } from "lucide-react";
import { contactLinks } from "@/config/site";
import HeroIllustration from "./HeroIllustration";

const chips = [
  { icon: Globe, label: "Сайты" },
  { icon: Send, label: "Telegram-боты" },
  { icon: Grid2x2, label: "Мини-приложения" },
  { icon: Zap, label: "Автоматизация" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grain-overlay" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-12">
        <div className="lg:w-[54%]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 text-sm text-white/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="uppercase tracking-[0.25em]">На связи</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hero-heading font-display font-semibold tracking-tight"
          >
            <span className="block">Создаём цифровые решения,</span>
            <span className="block text-white/40">которые ускоряют ваш бизнес</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-lede mt-8 max-w-xl text-white/60"
          >
            Разрабатываем сайты, Telegram-ботов и мини-приложения, автоматизируем
            процессы и увеличиваем прибыль.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {chips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-white/70"
              >
                <Icon size={15} className="text-accent" />
                {label}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={contactLinks.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-medium text-black transition-transform hover:scale-105"
            >
              Обсудить проект в Telegram
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base text-white/80 transition-colors hover:border-white/50 hover:text-white"
            >
              Смотреть портфолио
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-[46%]"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
