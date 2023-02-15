import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Edit src/App.js and save to reload.",
            part2: "Learn React",
          },
        },
      },
      es: {
        translation: {
          description: {
            part1:
              "Edite src/App.js y guarde para recargar.",
            part2: "Aprende React",
          },
        },
      },
      fr: {
        translation: {
          description: {
            part1:
              "Modifiez src/App.js et enregistrez pour recharger.",
            part2: "Apprendre React",
          },
        },
      },
    },
  });

export default i18n;
