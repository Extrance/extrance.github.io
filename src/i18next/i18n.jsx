import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";

i18next
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: "it",
    debug: process.env.NODE_ENV === "development",
    detection: {
      order: ["path", "localStorage", "htmlTag", "cookie"],
      caches: ["localStorage", "cookie"], // cache user language on
    },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
      // eslint-disable-next-line no-unused-vars
      format: function (value, format, lng) {
        if (format === "uppercase") return value.toUpperCase();
        if (format === "lowercase") return value.toLowerCase();
        if (format === "capitalize")
          return `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`;
        return value;
      },
    },
    resources: {
      it: {
        //translations: require("./locales/it/translation.json"),
        translations: require("./locales/it.json"),
      },
      en: {
        //translations: require("./locales/en/translation.json"),
        translations: require("./locales/en.json"),
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
    // react i18next special options (optional)
    // override if needed - omit if ok with defaults
    /*
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: true,
    }
    */
  });
i18n.languages = ["it", "en"];
export default i18n;
