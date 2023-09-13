import en from './en/translation.json';
import id from './id/translation.json';

const i18nConfig = {
  resources: {
    en: {
      translation: {
        gre: en,
      },
    },
    id: {
      translation: {
        gre: id,
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
};

export default i18nConfig;
