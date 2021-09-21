import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import langEN from "./localization/en/translate.json";
import langTR from "./localization/tr/translate.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: langEN,
      tr: langTR,
    },
    lng: "tr",
    fallbackLng: "tr",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      wait: true,
      bindI18n: "languageChanged loaded",
      bindI18nStore: "added removed",
      nsMode: "default",
    },
    returnObjects: true,
    joinArrays: true,
  });

export default i18n;
