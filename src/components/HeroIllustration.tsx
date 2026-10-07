import { Database, MessageCircle } from "lucide-react";

const codeLines: { text: string; tone: string }[] = [
  { text: "const bot = new Pulse();", tone: "text-white/85" },
  { text: "await bot.connect('whatsapp');", tone: "text-white/65" },
  { text: "bot.on('order', crm.create);", tone: "text-white/65" },
  { text: "// готово к запуску", tone: "text-white/55" },
  { text: "export default bot.deploy();", tone: "text-white/85" },
];

// Декоративная иллюстрация hero: окно редактора и «плавающие» метки.
// Анимации — CSS keyframes, отключаются при prefers-reduced-motion.
export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-md select-none lg:max-w-lg" aria-hidden="true">
      <div className="pointer-events-none absolute inset-[10%] -z-10 rounded-full bg-white/[0.06] blur-[80px]" />

      <svg viewBox="0 0 400 300" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        {["M 200 150 C 130 110, 90 90, 60 60", "M 220 130 C 280 90, 320 70, 345 45", "M 230 190 C 290 210, 320 225, 350 245"].map(
          (d) => (
            <path key={d} d={d} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="6 8" className="flow-line" />
          ),
        )}
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] rounded-xl border border-white/12 bg-[#0d0d0d] p-4 shadow-[0_30px_80px_-30px_rgba(255,255,255,0.18)]">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="ml-auto font-mono text-[10px] tracking-wide text-white/60">bot.ts</span>
          </div>
          <div className="space-y-1.5 font-mono text-[11px] leading-relaxed sm:text-xs">
            {codeLines.map((line) => (
              <div key={line.text} className={line.tone}>
                {line.text}
              </div>
            ))}
            <span className="caret inline-block h-3 w-1.5 bg-white/70 align-middle" />
          </div>
        </div>
      </div>

      <div className="float-a absolute left-[2%] top-[8%] flex items-center gap-2 rounded-lg border border-white/12 bg-[#0d0d0d] px-3 py-2 font-mono text-xs text-white/75">
        <span className="text-white">{"</>"}</span> API
      </div>

      <div className="float-b absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-lg border border-white/12 bg-[#0d0d0d] text-white/75">
        <Database size={18} />
      </div>

      <div className="float-a absolute bottom-[6%] right-[4%] flex items-center gap-2 rounded-lg border border-white/12 bg-[#0d0d0d] px-3 py-2 text-white/80 [animation-delay:-2s]">
        <MessageCircle size={16} className="text-white" />
        <span className="font-mono text-xs">+1 заявка</span>
      </div>
    </div>
  );
}
