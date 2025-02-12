import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enLang from "./locales/en.json";
import ruLang from "./locales/ru.json";
import uzLang from "./locales/uz.json";

const resources = {
  en: {
    translation: enLang,
  },
  ru: {
    translation: ruLang,
  },
  uz: {
    translation: uzLang,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },

    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"], // Order of detection methods
      caches: ["cookie", "localStorage"], // Cache the detected language
    },
  });

export default i18n;
