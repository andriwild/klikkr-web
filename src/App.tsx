import { HeroSection } from './components/HeroSection'
import { SystemSection } from './components/SystemSection'
import { SmartwatchSection } from './components/SmartwatchSection'
import { CheckoutSection } from './components/CheckoutSection'
import { AppStorySections } from './components/AppStorySections'
import { ReviewsStrip } from './components/ReviewsStrip'
import { NewsletterSection } from './components/NewsletterForm'
import type { Locale } from './i18n'

// The app leads, the wristband is the backup: what the app does, that a
// smartwatch already is a Klikkr, then how the pieces fit, proof from
// players, and the shop for everyone without a watch or for doubles.
function App({ lang = 'de' }: { lang?: Locale }) {
  return (
    <>
      <HeroSection lang={lang} />
      <AppStorySections lang={lang} />
      <SmartwatchSection lang={lang} />
      <SystemSection lang={lang} />
      <ReviewsStrip lang={lang} />
      <CheckoutSection lang={lang} />
      <NewsletterSection lang={lang} />
    </>
  )
}

export default App
