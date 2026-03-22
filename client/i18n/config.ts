import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import arTranslation from './locales/ar.json';
import ruTranslation from './locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
    },
    fallbackLng: 'en',
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Function to update document attributes
const updateDocumentAttributes = (lng: string) => {
  if (!lng) return;
  const dir = lng.startsWith('ar') ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
};

// Set HTML attributes on language change
i18n.on('languageChanged', updateDocumentAttributes);

// Initial attributes setup
if (i18n.isInitialized) {
  updateDocumentAttributes(i18n.language || 'en');
} else {
  i18n.on('initialized', () => {
    updateDocumentAttributes(i18n.language || 'en');
  });
}

export default i18n;
