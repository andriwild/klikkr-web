import { getTranslations, type Locale } from '../i18n'

/**
 * How to score with the smartwatch, on the how-it-works page.
 *
 * The home page only says that a watch can be a Klikkr and links here;
 * the gestures themselves are instructions, and instructions live on
 * this page next to the game modes. The game modes show phone
 * screenshots step by step, which a watch has none of, so the watch
 * gets its own block with the same picture as the home page.
 */
export function SmartwatchGestures({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).smartwatch

  return (
    <section
      id="smartwatch"
      className="w-full py-20 md:py-28 bg-zinc-900 border-t border-zinc-800 text-zinc-50"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase leading-tight">
            {t.howTitle}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {t.howTitleAccent}
            </span>
          </h2>
          <p className="max-w-[650px] text-zinc-400 md:text-lg font-medium">
            {t.howDescription}
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <img
            src={`/app/${lang}/watch.webp`}
            alt={t.imageAlt}
            width={1300}
            height={1000}
            loading="lazy"
            className="w-full h-auto"
          />

          <ol className="space-y-4">
            {t.gestures.map(
              (gesture: { title: string; description: string }, i: number) => (
                <li
                  key={gesture.title}
                  className="flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-700/30 bg-zinc-800/50 text-lg font-extrabold text-zinc-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-100">
                      {gesture.title}
                    </h3>
                    <p className="text-zinc-400">{gesture.description}</p>
                  </div>
                </li>
              )
            )}
          </ol>
        </div>
      </div>
    </section>
  )
}
