"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { contactLinks } from "@/config/site";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grain-overlay" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-white/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-3 text-sm text-white/50"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="uppercase tracking-[0.25em]">
            На связи · Telegram-боты · Mini Apps · Сайты
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hero-heading font-display max-w-4xl font-semibold tracking-tight"
        >
          Создаю Telegram-ботов, мини-приложения и сайты,
          <span className="text-white/40"> которые реально работают на бизнес</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hero-lede mt-8 max-w-xl text-white/60"
        >
          Быстро запускаю продукты под ключ — от идеи до рабочего бота, мини-приложения
          или сайта. Без шаблонов и лишних затягиваний.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
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
    </section>
  );
}
