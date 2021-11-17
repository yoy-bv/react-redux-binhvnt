import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import EN from './en.json'
import JP from './jp.json'
import VI from './vi.json'

const resources = {
  vi: {
    translation: VI
  },
  en: {
    translation: EN
  },
  jp: {
    translation: JP
  }
}

const INIT_LANGUAGE = window.localStorage.getItem('LANGUAGE') || 'vi'

i18next
  .use(initReactI18next)
  .init({
    resources,
    backend: {
      loadPath: './{{lng}}.json'
    },
    react: {
      useSuspense: true
    },
    lng: INIT_LANGUAGE,
    fallbackLng: INIT_LANGUAGE,
    preload: [INIT_LANGUAGE],
    keySeparator: false,
    interpolation: { escapeValue: false }
  })

i18next.off('languageChanged')
i18next.on('languageChanged', (language) => {
  window.localStorage.setItem('LANGUAGE', language)
})

export default i18next
