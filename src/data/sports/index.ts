import { locales, type Locale } from '../../i18n'
import type { SportsLocale } from './types'
import { sportOrder, sportPath, sportSlugs, type SportId } from './slugs'
import { de } from './de'
import { en } from './en'
import { fr } from './fr'
import { it } from './it'

export type { SportId, SportContent, SportsLocale } from './types'
export { sportOrder, sportPath, sportSlugs } from './slugs'

const content: Record<Locale, SportsLocale> = { de, en, fr, it }

export function getSports(lang: Locale): SportsLocale {
  return content[lang]
}

/** Path of the same sport page in every language (hreflang, switcher). */
export function sportAlternatePaths(id: SportId): Record<Locale, string> {
  return Object.fromEntries(
    locales.map((loc) => [loc, sportPath(id, loc)])
  ) as Record<Locale, string>
}

/** getStaticPaths entries for the sport pages of one language. */
export function sportStaticPaths(lang: Locale) {
  return sportOrder.map((id) => ({
    params: { sport: sportSlugs[id][lang] },
    props: { id },
  }))
}
