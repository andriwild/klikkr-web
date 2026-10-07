import { getLocalizedPath, getTranslations, type Locale } from '../i18n'
import { StoreBadges } from './AppFeaturesSection'

/**
 * The smartwatch as a Klikkr, on Apple Watch and Wear OS.
 *
 * It sits right after the system section, where a visitor has just read
 * "band, app, scoreboard" and wonders whether they need the band. The
 * answer here is: not if you already wear a smartwatch. The bands stay
 * in the last line, for doubles and for everyone without a watch. How
 * to score on the watch is an instruction, so it lives on the
 * how-it-works page (SmartwatchGestures) and this section links there.
 *
 * The picture comes from the app repo's mokkr pipeline
 * (`store_assets/story/web/watch.json`, exported by `export_web.ts`) and
 * is localised like the other app pictures. Its background is
 * transparent, so the section supplies its own.
 */
export function SmartwatchSection({ lang = 'de' }: { lang?: Locale }) {
  const all = getTranslations(lang)
  const t = all.smartwatch

  return (
    <section
      id="smartwatch"
      className="w-full py-24 md:py-32 bg-zinc-900 border-t border-zinc-800 text-zinc-50"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <img
              src={`/app/${lang}/watch.webp`}
              alt={t.imageAlt}
              width={1300}
              height={1000}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 border border-emerald-500/20">
                {t.badge}
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tighter md:text-4xl lg:text-5xl">
                {t.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  {t.titleAccent}
                </span>
              </h2>
              <p className="max-w-md text-zinc-400 md:text-lg">
                {t.description}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-zinc-400">
                {t.faces}{' '}
                <a
                  href={`${getLocalizedPath('/how-it-works', lang)}#smartwatch`}
                  className="text-emerald-400 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-sm"
                >
                  {t.howLink}
                </a>
              </p>
              <p className="text-lg font-semibold text-zinc-100">{t.pricing}</p>
              <p className="text-sm text-zinc-500">{t.compatibility}</p>
            </div>

            <div className="[&>div]:justify-start [&>div]:mt-0 [&>div>div]:justify-start">
              <StoreBadges t={all.appFeatures} />
            </div>

            <p className="text-sm text-zinc-400">
              {t.bandsHint}{' '}
              <a
                href="#checkout"
                className="text-emerald-400 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-sm"
              >
                {t.bandsLink}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
