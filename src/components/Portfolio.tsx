import { portfolioCases, contactLinks } from "@/config/site";
import Reveal from "./Reveal";

export default function Portfolio() {
  return (
    <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/50">Сайты</p>
          <h1 className="section-heading font-display font-semibold tracking-tight">
            Портфолио
          </h1>
        </Reveal>

        {portfolioCases.length > 0 ? (
          <>
            <Reveal>
              <p className="mt-4 max-w-xl text-white/60">
                Проекты, над которыми мы работаем.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {portfolioCases.map((item, i) => (
                <Reveal key={item.id} delay={i * 0.1} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 transition-colors hover:border-white/30">
                    <div
                      className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${item.gradient}`}
                    >
                      <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/0" />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-lg font-semibold">{item.title}</h2>
                      <p className="mt-3 text-sm text-white/55">
                        <span className="text-white/70">Задача: </span>
                        {item.task}
                      </p>
                      <p className="mt-3 text-sm text-white/55">
                        <span className="text-white/70">Результат: </span>
                        {item.result}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </>
        ) : (
          <>
            <Reveal>
              <p className="mt-4 max-w-xl text-white/60">
                Первые проекты скоро появятся здесь. Пока список пуст — загляните
                позже или напишите напрямую, если хотите обсудить свою задачу.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12 rounded-2xl border border-white/10 p-10 text-center text-white/50">
                Первые кейсы в разработке.
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href={contactLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-base text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                Написать в Telegram
              </a>
            </Reveal>
          </>
        )}
      </div>
    </section>
  );
}
