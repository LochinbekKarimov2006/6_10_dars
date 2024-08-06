import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./json/languont.json"
i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "in", 
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;