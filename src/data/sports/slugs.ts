/**
 * Slugs and paths of the sport pages, without their texts. Small enough to
 * import in client components (hero, footer) without shipping the content.
 */
import { getLocalizedPath, type Locale } from '../../i18n'
import type { SportId } from './types'

export type { SportId } from './types'

/** Order of the sports in links and navigation. */
export const sportOrder: SportId[] = [
  'padel',
  'tennis',
  'squash',
  'badminton',
  'tableTennis',
  'pickleball',
]

/**
 * URL slug per sport and language. Only table tennis has a different name
 * in each language; the other sports keep the same slug everywhere.
 */
export const sportSlugs: Record<SportId, Record<Locale, string>> = {
  padel: { de: 'padel', en: 'padel', fr: 'padel', it: 'padel' },
  tennis: { de: 'tennis', en: 'tennis', fr: 'tennis', it: 'tennis' },
  squash: { de: 'squash', en: 'squash', fr: 'squash', it: 'squash' },
  badminton: {
    de: 'badminton',
    en: 'badminton',
    fr: 'badminton',
    it: 'badminton',
  },
  tableTennis: {
    de: 'tischtennis',
    en: 'table-tennis',
    fr: 'tennis-de-table',
    it: 'tennistavolo',
  },
  pickleball: {
    de: 'pickleball',
    en: 'pickleball',
    fr: 'pickleball',
    it: 'pickleball',
  },
}

/** Path of a sport page, with trailing slash, e.g. "/en/table-tennis/". */
export function sportPath(id: SportId, lang: Locale): string {
  return getLocalizedPath(`/${sportSlugs[id][lang]}`, lang)
}
