import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { CircleDot, Hand, Watch, Trophy } from 'lucide-react'
import { getTranslations, type Locale } from '../i18n'
import { track } from '../lib/analytics'

// Order matters: the app leads and the smartwatch is the first way to
// score with it, the wristband modes follow as the backup, and swipe is
// the fallback for when you have neither, so it closes the row.
const modeKeys = [
  'smartwatch',
  'oneBeacon',
  'twoBeacons',
  'tournament',
  'swipe',
] as const
type ModeKey = (typeof modeKeys)[number]

// The watch icon belongs to the smartwatch; a Klikkr wristband is a
// round puck, which CircleDot draws.
const modeIcons: Record<ModeKey, typeof Hand> = {
  smartwatch: Watch,
  swipe: Hand,
  oneBeacon: CircleDot,
  twoBeacons: CircleDot,
  tournament: Trophy,
}

const modeColors: Record<
  ModeKey,
  { active: string; card: string; tab: string; glow: string; accent: string }
> = {
  // `active` tints the mode tabs, which sit on the page background and
  // can afford to be barely there. `card` is for the step card, which
  // floats over a screenshot: it needs an opaque base or the text
  // underneath bleeds through and neither layer can be read. The accent
  // survives as the border and a faint wash.
  smartwatch: {
    active: 'border-violet-500/40 bg-violet-500/10 text-violet-400',
    card: 'border-violet-500/50 bg-zinc-950/90 ring-1 ring-violet-500/20',
    tab: 'border-violet-400 text-zinc-50',
    glow: 'from-violet-500/10 to-fuchsia-500/10',
    accent: 'bg-violet-500',
  },
  swipe: {
    active: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400',
    card: 'border-cyan-500/50 bg-zinc-950/90 ring-1 ring-cyan-500/20',
    tab: 'border-cyan-400 text-zinc-50',
    glow: 'from-cyan-500/10 to-blue-500/10',
    accent: 'bg-cyan-500',
  },
  oneBeacon: {
    active: 'border-blue-500/40 bg-blue-500/10 text-blue-400',
    card: 'border-blue-500/50 bg-zinc-950/90 ring-1 ring-blue-500/20',
    tab: 'border-blue-400 text-zinc-50',
    glow: 'from-blue-500/10 to-indigo-500/10',
    accent: 'bg-blue-500',
  },
  twoBeacons: {
    active: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400',
    card: 'border-emerald-500/50 bg-zinc-950/90 ring-1 ring-emerald-500/20',
    tab: 'border-emerald-400 text-zinc-50',
    glow: 'from-emerald-500/10 to-cyan-500/10',
    accent: 'bg-emerald-500',
  },
  tournament: {
    active: 'border-yellow-500/40 bg-yellow-500/10 text-yellow-400',
    card: 'border-yellow-500/50 bg-zinc-950/90 ring-1 ring-yellow-500/20',
    tab: 'border-yellow-400 text-zinc-50',
    glow: 'from-yellow-500/10 to-orange-500/10',
    accent: 'bg-yellow-500',
  },
}

const WIDE = '(min-width: 1024px)'
function subscribeWide(onChange: () => void) {
  const query = window.matchMedia(WIDE)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}
function isWide() {
  return window.matchMedia(WIDE).matches
}

/**
 * The picture of one step on a narrow screen, above its card: a phone
 * screenshot in a plain frame, or a device picture as it is. From lg on
 * the sticky device shows the pictures instead.
 */
function StepPicture({ image, alt }: { image?: StepImage; alt: string }) {
  if (!image) return null
  if (typeof image !== 'string') {
    return (
      <img
        src={image.src}
        alt={alt}
        loading="lazy"
        className="lg:hidden w-56 h-auto"
      />
    )
  }
  return (
    <div className="lg:hidden w-48 rounded-[1.6rem] bg-[#17171b] p-[5px] ring-1 ring-zinc-700 shadow-2xl shadow-black/60">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="w-full aspect-[9/16] object-cover rounded-[1.3rem]"
      />
    </div>
  )
}

/**
 * A step's picture: a phone screenshot, drawn inside the CSS phone, or
 * a picture that already is a device (a framed smartwatch), drawn on
 * its own while the phone steps aside.
 */
type StepImage = string | { src: string; bare: true }

export function GameModes({ lang = 'de' }: { lang?: Locale }) {
  const t = getTranslations(lang).gameModes
  const [activeMode, setActiveMode] = useState<ModeKey>(modeKeys[0])
  const [activeStep, setActiveStep] = useState(0)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Only the side-by-side layout (lg) highlights the step in view; on a
  // narrow screen every card stands with its own picture and reads as
  // active.
  const wide = useSyncExternalStore(subscribeWide, isWide, () => true)

  const mode = t.modes[activeMode]
  const steps = mode.steps
  const images: StepImage[] = mode.images
  const colors = modeColors[activeMode]
  // A step whose picture is a device of its own (the smartwatch) shows
  // it instead of the phone, so the walkthrough can move between the
  // two the way a match does.
  const bareStep = typeof images[activeStep] !== 'string'

  // Scrollytelling: observe which step card is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stepsRef.current.forEach((el, i) => {
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [activeMode])

  // Reset refs when mode changes
  useEffect(() => {
    stepsRef.current = []
  }, [activeMode])

  // Left and right walk the tabs, Home and End jump to the ends. A
  // tablist that only answers clicks is a keyboard trap.
  function onTabKeyDown(event: React.KeyboardEvent) {
    const current = modeKeys.indexOf(activeMode)
    const delta =
      event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0
    let next = -1
    if (delta !== 0) {
      next = (current + delta + modeKeys.length) % modeKeys.length
    } else if (event.key === 'Home') {
      next = 0
    } else if (event.key === 'End') {
      next = modeKeys.length - 1
    }
    if (next === -1) return
    event.preventDefault()
    switchMode(modeKeys[next])
    tabRefs.current[next]?.focus()
  }

  function switchMode(key: ModeKey) {
    track('gamemode-switch', { mode: key })
    setActiveMode(key)
    setActiveStep(0)
    // Scroll back to the top of the section
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={sectionRef}
      // The home page links here as #smartwatch; the smartwatch is the
      // first mode, so the anchor lands on it without further help.
      id="smartwatch"
      className="relative w-full bg-zinc-950 text-zinc-50"
    >
      {/* Header */}
      <div className="container px-4 md:px-6 mx-auto max-w-6xl pt-12 md:pt-16 pb-4">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2" />
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter uppercase leading-tight">
            {t.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {t.titleAccent}
            </span>
          </h2>
          <p className="max-w-[650px] text-zinc-400 md:text-xl/relaxed font-medium">
            {t.description}
          </p>
        </div>

        {/* Mode tabs.
            Same underline pattern as the home page, so the site has one
            tab language instead of two. They were pills before, and the
            site uses that exact pill for non-clickable chips elsewhere,
            so the shape signalled nothing. The underline colour follows
            the mode, which is the identity the card and glow below
            already use. */}
        <div
          role="tablist"
          aria-label={t.badge}
          onKeyDown={onTabKeyDown}
          className="mt-8 flex gap-6 md:gap-10 overflow-x-auto border-b border-zinc-800 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center"
        >
          {modeKeys.map((key, i) => {
            const Icon = modeIcons[key]
            const isActive = key === activeMode
            const modeData = t.modes[key]
            return (
              <button
                key={key}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                role="tab"
                type="button"
                id={`mode-tab-${key}`}
                aria-selected={isActive}
                aria-controls="mode-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => switchMode(key)}
                className={`shrink-0 whitespace-nowrap flex items-center gap-2 pb-3 -mb-px border-b-2 text-base md:text-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-sm ${
                  isActive
                    ? `${modeColors[key].tab} font-semibold`
                    : 'border-transparent text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5" />
                {modeData.label}
              </button>
            )
          })}
        </div>

        {/* Mode description */}
        <p className="text-center text-zinc-400 font-medium mt-6 max-w-lg mx-auto">
          {mode.description}
        </p>
      </div>

      {/* Scrollytelling area */}
      <div
        className="relative"
        id="mode-panel"
        role="tabpanel"
        aria-labelledby={`mode-tab-${activeMode}`}
      >
        {/* Sticky device, from lg on only: the device on the right, the
            cards scrolling past on the left, so a card never covers the
            screen it explains. A narrow screen has no room beside the
            device, and a device on top of the cards hid their text, so
            there every card carries its own picture instead (below). */}
        <div className="hidden lg:flex sticky top-0 h-screen items-center justify-end lg:pr-[max(3rem,calc((100vw-72rem)/2+3rem))] pointer-events-none z-0">
          {/* The phone is drawn in CSS, in layers, because one bordered
              rounded rectangle reads as a rectangle: a metallic bevel
              catching light from the top left, a matte body, a screen
              recessed by an inset ring, one hard-edged glass glint and
              the side buttons. The screenshots inside carry no frame of
              their own. */}
          <div className="relative w-[360px]">
            {images.map((image, i) =>
              typeof image === 'string' ? null : (
                <img
                  key={`${activeMode}-bare-${i}`}
                  src={image.src}
                  alt={steps[i]?.title ?? ''}
                  className={`absolute inset-0 z-10 w-full h-full object-contain transition-all duration-500 ${
                    i === activeStep
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                />
              )
            )}
            <div
              className={`relative rounded-[2.6rem] transition-opacity duration-500 ${bareStep ? 'opacity-0' : 'opacity-100'} p-px bg-[linear-gradient(135deg,#7a7a86_0%,#0a0a0d_62%,#2b2b33_100%)] shadow-[0_1px_2px_rgba(0,0,0,0.18),0_4px_8px_rgba(0,0,0,0.13),0_16px_32px_rgba(0,0,0,0.09),0_32px_64px_16px_rgba(0,0,0,0.07)]`}
            >
              <div className="rounded-[2.55rem] bg-[#17171b] p-[7px]">
                <div className="relative rounded-[2.15rem] overflow-hidden bg-zinc-900">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#17171b] rounded-b-2xl z-20" />
                  <div className="relative aspect-[9/16]">
                    {images.map((src, i) =>
                      typeof src !== 'string' ? null : (
                        <img
                          key={`${activeMode}-${i}`}
                          src={src}
                          alt={steps[i]?.title ?? ''}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                            i === activeStep
                              ? 'opacity-100 scale-100'
                              : 'opacity-0 scale-105'
                          }`}
                        />
                      )
                    )}
                  </div>
                  {/* Depth ring: without it the screenshot sits on the
                      casing like a sticker instead of behind glass. */}
                  <div className="pointer-events-none absolute inset-0 rounded-[2.15rem] shadow-[inset_0_0_4px_1px_rgba(0,0,0,0.45)] z-10" />
                </div>
              </div>
              {/* The glint. The hard stop is the point: glass reflects
                  an edge, a soft gradient just looks washed out. */}
              <div className="pointer-events-none absolute inset-px rounded-[2.55rem] bg-[linear-gradient(157deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.13)_31%,rgba(255,255,255,0)_31.3%)] z-30" />
              <span className="absolute -left-[2px] top-[21%] h-[6%] w-[3px] rounded bg-[linear-gradient(180deg,#8e8e99,#34343c)]" />
              <span className="absolute -left-[2px] top-[29%] h-[6%] w-[3px] rounded bg-[linear-gradient(180deg,#8e8e99,#34343c)]" />
              <span className="absolute -right-[2px] top-[25%] h-[9%] w-[3px] rounded bg-[linear-gradient(180deg,#8e8e99,#34343c)]" />
            </div>
            {/* Dot indicator, right under the device, where the eye already is */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {steps.map((_: unknown, i: number) => (
                <div
                  key={`${activeMode}-dot-${i}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeStep
                      ? `w-8 h-3 ${colors.accent}`
                      : 'w-3 h-3 bg-zinc-700'
                  }`}
                />
              ))}
            </div>
            {/* Glow behind phone */}
            <div
              className={`absolute -inset-4 bg-gradient-to-b ${colors.glow} rounded-[4rem] blur-2xl -z-10 transition-all duration-700`}
            />
          </div>
        </div>

        {/* Scrollable text cards: beside the sticky device from lg on,
            one under the other with their own picture below that */}
        <div className="relative z-10 lg:-mt-[100vh] pb-16 lg:pb-0">
          <div className="hidden lg:block h-[10vh]" />

          {steps.map(
            (step: { title: string; description: string }, i: number) => (
              <div
                key={`${activeMode}-card-${i}`}
                ref={(el) => {
                  stepsRef.current[i] = el
                }}
                className="lg:min-h-[60vh] flex flex-col items-center lg:flex-row lg:justify-start gap-6 px-4 pt-12 lg:pt-0 lg:pl-[max(3rem,calc((100vw-72rem)/2+3rem))]"
              >
                <StepPicture image={images[i]} alt={step.title} />
                <div
                  className={`max-w-md w-full p-6 md:p-8 rounded-2xl border backdrop-blur-xl transition-all duration-500 ${
                    i === activeStep || !wide
                      ? `${colors.card} shadow-2xl shadow-black/60`
                      : 'border-zinc-800/50 bg-zinc-950/80'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-500 ${
                        i === activeStep || !wide
                          ? 'bg-white/10 border border-white/20'
                          : 'bg-zinc-800/50 border border-zinc-700/30'
                      }`}
                    >
                      <span
                        className={`text-lg font-extrabold transition-colors duration-500 ${
                          i === activeStep || !wide
                            ? 'text-white'
                            : 'text-zinc-500'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3
                        className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
                          i === activeStep || !wide
                            ? 'text-zinc-100'
                            : 'text-zinc-400'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`leading-relaxed font-medium transition-colors duration-500 ${
                          i === activeStep || !wide
                            ? 'text-zinc-300'
                            : 'text-zinc-500'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}

          <div className="h-[40vh]" />
        </div>
      </div>
    </section>
  )
}
