import { Star } from 'lucide-react'
import { getLocalizedPath, getTranslations, type Locale } from '../i18n'

/**
 * Three player voices right before the shop. The full page with the
 * review form lives at /reviews; the home page only needs the proof,
 * placed where a visitor decides.
 */
export function ReviewsStrip({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).reviews

  return (
    <section className="w-full py-16 md:py-24 bg-zinc-950 border-t border-zinc-900 text-zinc-50">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="inline-block rounded-lg bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400 border border-emerald-500/20">
            {t.badge}
          </div>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {t.items.map(
            (review: {
              name: string
              sport: string
              rating: number
              text: string
            }) => (
              <li
                key={review.name}
                className="flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
              >
                <div className="flex gap-0.5" aria-label={`${review.rating}/5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-zinc-700 text-zinc-700'
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="flex-1 text-zinc-300 leading-relaxed">
                  “{review.text}”
                </blockquote>
                <p className="text-sm text-zinc-500">
                  <span className="font-semibold text-zinc-300">
                    {review.name}
                  </span>{' '}
                  · {review.sport}
                </p>
              </li>
            )
          )}
        </ul>

        <div className="mt-8 text-center">
          <a
            href={getLocalizedPath('/reviews', lang)}
            className="text-emerald-400 underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-sm"
          >
            {t.allLink}
          </a>
        </div>
      </div>
    </section>
  )
}
