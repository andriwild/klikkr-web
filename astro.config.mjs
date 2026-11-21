import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// The table tennis page has a different slug in each language, so the i18n
// option of the sitemap cannot pair them by path. Keep in sync with
// src/data/sports/slugs.ts.
const tableTennisPaths = {
  'de-CH': '/tischtennis/',
  en: '/en/table-tennis/',
  'fr-CH': '/fr/tennis-de-table/',
  'it-CH': '/it/tennistavolo/',
};

// https://astro.build/config
export default defineConfig({
  site: 'https://klikkr.ch',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      // Pages rendered with noindex must not be listed, otherwise Search
      // Console reports "Submitted URL marked noindex".
      filter: (page) =>
        !/\/(thanks|newsletter-bestaetigt|newsletter-confirmed)\/$/.test(page),
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (Object.values(tableTennisPaths).includes(path)) {
          item.links = Object.entries(tableTennisPaths).map(([lang, p]) => ({
            lang,
            url: `https://klikkr.ch${p}`,
          }));
        }
        return item;
      },
      i18n: {
        defaultLocale: 'de',
        locales: {
          de: 'de-CH',
          en: 'en',
          fr: 'fr-CH',
          it: 'it-CH',
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'fr', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});