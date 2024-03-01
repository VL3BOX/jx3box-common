import Vue from "vue";
import VueI18n from "vue-i18n";
import { $cms } from "../js/https";
import moment from "moment";
import dayjs from "dayjs";
import { zhcnDateTimeFormat } from "./datetime";

Vue.use(VueI18n);

// default language that is preloaded
const loadedLanguages = ["zh-CN"];

const translationWarn = ~~sessionStorage.getItem("translationWarn");
const i18n = new VueI18n({
  locale: "zh-CN",
  fallbackLocale: "zh-CN",
  formatFallbackMessages: true,
  messages: {},
  silentTranslationWarn: !translationWarn, // process.env.NODE_ENV === "production",
});

const currentLang = sessionStorage.getItem("lang") || "zh-CN";
console.log("currentLang", currentLang);

export function changeLocale(lang) {
  if (currentLang === "zh-CN") {
    // momment or dayjs locale
    moment.locale("zh-cn", zhcnDateTimeFormat);
    dayjs.locale("zh-cn", zhcnDateTimeFormat);
  } else {
    // momment or dayjs locale
    moment.locale("vi");
    dayjs.locale("vi");
  }
  sessionStorage.setItem("lang", lang);
  loadLanguageAsync(lang);
  // window.location.reload();
}

function setI18nLanguage(lang) {
  i18n.locale = lang;
  // axios.defaults.headers.common['Accept-Language'] = lang
  document.querySelector("html").setAttribute("lang", lang);
  return lang;
}

export function loadLanguageAsync(lang) {
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  async function importOffline(lang) {
    console.log("OFFLINE", lang);
    const messages = await import(
      /* webpackChunkName: "[request]" */ `./locales/${lang}.json`
    );
    console.log("messages", JSON.stringify(messages.default));
    sessionStorage.setItem("locale", JSON.stringify(messages.default));
    i18n.setLocaleMessage(lang, messages.default);
    loadedLanguages.push(lang);
    return setI18nLanguage(lang);
  }

  async function importOnline(lang) {
    console.log("ONLINE", lang);

    return $cms()
      .get(`/locales/${lang}.json`)
      .then((res) => {
        sessionStorage.setItem("locale", JSON.stringify(res.data));
        loadedLanguages.push(lang);

        i18n.setLocaleMessage(lang, res.data);
        return setI18nLanguage(lang);
      })
      .catch(() => {
        return importOffline(lang);
      });
  }

  const langData = sessionStorage.getItem("locale");
  if (langData) {
    loadedLanguages.push(lang);
    i18n.setLocaleMessage(lang, JSON.parse(langData));
    return setI18nLanguage(lang);
  }
  return process.env.OFFLINE ? importOffline(lang) : importOnline(lang);
}

changeLocale("vi");

export default i18n;
