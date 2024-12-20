import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import translationEN from './languages/en.json';
import translationFR from './languages/fr.json';
import translationIS from './languages/is.json';
import translationTR from './languages/tr.json';

// the translations
const resources = {
  eng: {
    translation: translationEN,
  },
  fran: {
    translation: translationFR,
  },
  isp: {
    translation: translationIS,
  },
  turk: {
    translation: translationTR,
  },
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'eng', // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });
export default i18n;
