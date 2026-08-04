"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Database, MessageCircle } from "lucide-react";

const codeLines: { text: string; tone: "kw" | "str" | "fn" | "muted" }[] = [
  { text: "const bot = new Pulse();", tone: "kw" },
  { text: "await bot.connect('telegram');", tone: "fn" },
  { text: "bot.on('order', notify);", tone: "fn" },
  { text: "// готов к продакшену", tone: "muted" },
  { text: "export default bot.deploy();", tone: "kw" },
];

const toneClass: Record<(typeof codeLines)[number]["tone"], string> = {
  kw: "text-white/80",
  fn: "text-accent/80",
  str: "text-white/50",
  muted: "text-white/30",
};

export default function HeroIllustration() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [40, -40]);
  const rotate = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-2, 2]);

  const floatA = reduceMotion ? {} : { y: [0, -10, 0] };
  const floatB = reduceMotion ? {} : { y: [0, 8, 0] };

  return (
    <div ref={ref} className="relative mx-auto aspect-[4/3] w-full max-w-lg select-none">
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-accent/10 blur-[90px]"
        aria-hidden="true"
      />

      <svg
        viewBox="0 0 400 300"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <path
          d="M 200 150 C 130 110, 90 90, 60 60"
          fill="none"
          stroke="rgba(var(--accent-rgb), 0.35)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="flow-line"
        />
        <path
          d="M 220 130 C 280 90, 320 70, 345 45"
          fill="none"
          stroke="rgba(var(--accent-rgb), 0.35)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="flow-line"
        />
        <path
          d="M 230 190 C 290 210, 320 225, 350 245"
          fill="none"
          stroke="rgba(var(--accent-rgb), 0.35)"
          strokeWidth="1.5"
          strokeDasharray="6 8"
          className="flow-line"
        />
      </svg>

      <motion.div style={{ y, rotate }} className="absolute inset-0 flex items-center justify-center">
        <div className="w-[78%] rounded-xl border border-white/10 bg-[#0d0d10] p-4 shadow-[0_0_60px_-15px_rgba(var(--accent-rgb),0.25)]">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="h-2 w-2 rounded-full bg-white/15" />
            <span className="ml-auto font-mono text-[10px] tracking-wide text-white/25">
              bot.ts
            </span>
          </div>
          <div className="space-y-1.5 font-mono text-[11px] leading-relaxed sm:text-xs">
            {codeLines.map((line) => (
              <div key={line.text} className={toneClass[line.tone]}>
                {line.text}
              </div>
            ))}
            <span className="inline-block h-3 w-1.5 animate-pulse bg-accent/70 align-middle" />
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={floatA}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[2%] top-[10%] flex items-center gap-2 rounded-lg border border-white/10 bg-[#0d0d10] px-3 py-2 font-mono text-xs text-white/70 shadow-[0_0_30px_-10px_rgba(var(--accent-rgb),0.3)]"
      >
        <span className="text-accent">{"</>"}</span> API
      </motion.div>

      <motion.div
        animate={floatB}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-[#0d0d10] text-white/70 shadow-[0_0_30px_-10px_rgba(var(--accent-rgb),0.3)]"
      >
        <Database size={18} />
      </motion.div>

      <motion.div
        animate={floatA}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-[6%] right-[4%] flex items-center gap-2 rounded-lg border border-white/10 bg-[#0d0d10] px-3 py-2 text-white/70 shadow-[0_0_30px_-10px_rgba(var(--accent-rgb),0.3)]"
      >
        <MessageCircle size={16} className="text-accent" />
        <span className="font-mono text-xs">+1 заказ</span>
      </motion.div>
    </div>
  );
}
