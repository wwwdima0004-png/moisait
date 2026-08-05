"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Globe, Send, Grid2x2, Zap } from "lucide-react";
import { contactLinks } from "@/config/site";
import HeroIllustration from "./HeroIllustration";
import HeroBackground from "./HeroBackground";

const chips = [
  { icon: Globe, label: "Сайты" },
  { icon: Send, label: "Telegram-боты" },
  { icon: Grid2x2, label: "Мини-приложения" },
  { icon: Zap, label: "Автоматизация" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <HeroBackground />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:gap-12">
        <div className="lg:w-[54%]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 text-sm text-white/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-mono uppercase tracking-[0.25em]">На связи</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="hero-heading font-display inline-block rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 font-semibold tracking-tight sm:px-8 sm:py-6">
              <span className="block">Создаём IT-решения,</span>
              <span className="block text-white/45">которые приносят результат</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="hero-lede mt-8 max-w-xl text-white/60"
          >
            Разрабатываем сайты, Telegram-ботов и мини-приложения, автоматизируем
            процессы и увеличиваем прибыль.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {chips.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex h-16 min-w-0 items-center justify-center gap-1.5 overflow-hidden rounded-2xl border border-white/15 px-2 text-center text-xs leading-tight text-white/70"
              >
                <Icon size={14} className="shrink-0 text-white/70" />
                <span className="line-clamp-2 min-w-0 break-words">{label}</span>
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
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
