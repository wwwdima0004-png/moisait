/*
 * Атмосферный фон hero-секции: едва заметная сетка, "волна" из точек
 * (инженерный ландшафт) и рассеянные фрагменты кода — строго в ч/б
 * палитре. Тёмный градиент поверх гарантирует читаемость текста.
 */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMax slice"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          <pattern id="hero-dots" width="7" height="7" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="white" />
          </pattern>
        </defs>
        <path
          d="M0 370 C 140 300, 300 430, 460 350 S 680 280, 800 330 L800 600 L0 600 Z"
          fill="url(#hero-dots)"
          opacity="0.22"
        />
        <path
          d="M0 430 C 180 380, 340 470, 520 410 S 700 370, 800 400 L800 600 L0 600 Z"
          fill="url(#hero-dots)"
          opacity="0.14"
        />
      </svg>

      <div className="absolute right-6 top-8 hidden font-mono text-[11px] leading-relaxed text-white/10 lg:block">
        <div>function solve(problem) {"{"}</div>
        <div className="pl-4">// focus on impact</div>
        <div className="pl-4">let solution = iterate(problem);</div>
        <div className="pl-4">return solution;</div>
        <div>{"}"}</div>
      </div>

      <div className="absolute bottom-28 left-6 hidden font-mono text-[11px] leading-relaxed text-white/10 lg:block">
        <div>const dev = {"{"}</div>
        <div className="pl-4">code: true,</div>
        <div className="pl-4">repeat: () =&gt; dev,</div>
        <div>{"}"}</div>
      </div>

      <div className="absolute bottom-10 right-6 hidden text-right font-mono text-[11px] leading-relaxed text-white/10 lg:block">
        <div># Build</div>
        <div># Deploy</div>
        <div># Scale</div>
      </div>

      <span className="absolute left-10 top-1/3 hidden font-mono text-lg text-white/10 lg:block">{"</>"}</span>
      <span className="absolute right-[38%] top-20 hidden font-mono text-lg text-white/10 lg:block">{"{}"}</span>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
    </div>
  );
}
