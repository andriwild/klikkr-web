import type { getTranslations } from '../i18n'
import { track } from '../lib/analytics'

/**
 * App Store and Google Play badges, and the QR code on wide screens.
 * Shared by the app section and the smartwatch section, so the links
 * and the click tracking exist once.
 */
const APP_STORE_URL = 'https://apps.apple.com/ch/app/klikkr/id6761069158'
const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=ch.wild.klikkr'

export function StoreBadges({
  t,
}: {
  t: ReturnType<typeof getTranslations>['appFeatures']
}) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mt-8 mb-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('store-click-ios')}
          className="transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-lg"
          aria-label={t.downloadAppStore}
        >
          <img
            src="/badges/app-store-badge.svg"
            alt={t.downloadAppStore}
            className="h-12 w-auto"
            width={160}
            height={48}
            loading="lazy"
          />
        </a>
        <a
          href={GOOGLE_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('store-click-android')}
          className="transition-transform hover:scale-[1.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-lg"
          aria-label={t.downloadGooglePlay}
        >
          <img
            src="/badges/google-play-badge.png"
            alt={t.downloadGooglePlay}
            className="h-[72px] w-auto -my-3"
            width={186}
            height={72}
            loading="lazy"
          />
        </a>
      </div>
      <div className="hidden md:flex items-center gap-3 pl-6 border-l border-zinc-800">
        <img
          src="/badges/klikkr_app_qr.png"
          alt={t.scanQrAlt}
          className="h-20 w-20 rounded-md bg-white p-1"
          width={80}
          height={80}
          loading="lazy"
        />
        <span className="text-xs text-zinc-400 max-w-[8rem] text-left leading-snug">
          {t.scanQrLabel}
        </span>
      </div>
    </div>
  )
}
