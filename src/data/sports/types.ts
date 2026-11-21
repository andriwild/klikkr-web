/**
 * Content of the sport pages (/padel, /tennis, …). One file per language
 * holds the texts of all sports; the page template only renders them.
 *
 * Rules on these pages describe the official rules first and the common
 * hobby variants second. They must agree with klikkr-app/docs/sport-regeln.md.
 */

export type SportId =
  'padel' | 'tennis' | 'squash' | 'badminton' | 'tableTennis' | 'pickleball'

/** One rule topic, rendered as an h3 with paragraphs and/or a list. */
export interface RuleBlock {
  title: string
  paragraphs?: string[]
  bullets?: string[]
}

export interface SportContent {
  /** Sport name as used in running text, e.g. "Padel". */
  name: string
  seoTitle: string
  seoDescription: string
  h1: string
  lead: string
  /** How Klikkr counts this sport: wristband, smartwatch, phone. */
  klikkrTitle: string
  klikkrIntro: string
  klikkrPoints: { title: string; text: string }[]
  rulesTitle: string
  rulesIntro: string
  rules: RuleBlock[]
  variantsTitle: string
  variantsIntro: string
  variants: { title: string; text: string }[]
  faq: { q: string; a: string }[]
  /** Official rule book the rules section is based on. */
  source: { label: string; url: string }
}

/** Labels shared by all sport pages of one language. */
export interface SportUi {
  breadcrumbHome: string
  ctaOrder: string
  appFree: string
  sourceLabel: string
  rulesAsOf: string
  rulesScreenshotAlt: string
  faqTitle: string
  otherSportsTitle: string
  ctaBandTitle: string
  ctaBandText: string
  /** Heading of the sport links in the footer. */
  sportsNav: string
}

export interface SportsLocale {
  ui: SportUi
  sports: Record<SportId, SportContent>
}
