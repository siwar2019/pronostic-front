import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import EN from './en/en.json';
import FR from './fr/fr.json'
import AR from './ar/ar.json'
export const availableLanguages = Object.keys({EN, FR , AR})

i18n.use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: {
          translations: EN,
        },
        fr: {
          translations: FR,
        },
        ar: {
          translations: AR,
        },
    },
    ns: ['translations'],
    defaultNS: 'translations',
    fallbackLng: 'fr',
    interpolation: {
        escapeValue: false
    },
})
export function changeLanguage(language) {
  i18n.changeLanguage(language);
}

export default i18n;