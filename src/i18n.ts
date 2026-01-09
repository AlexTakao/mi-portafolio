import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

const base = import.meta.env.BASE_URL;

i18n
    .use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "es",
        supportedLngs: ["es", "en"],
        nonExplicitSupportedLngs: true,

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: `${base}locales/{{lng}}/{{ns}}.json`,
        },

        ns: ["translation"],
        defaultNS: "translation",

        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
        },
    });

export default i18n;
