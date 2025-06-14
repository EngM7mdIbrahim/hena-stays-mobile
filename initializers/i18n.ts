import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import { appDictionary } from "@i18n";
import { Language } from "@enums";
import { I18nManager } from "react-native";

let i18n: I18n | null = null;

export const initiateI18n = () => {
  const locale = getLocales()[0].languageCode ?? Language.EN;
  // const locale = Language.AR;
  const isRTLLanguage = locale === Language.AR;
  I18nManager.allowRTL(true);
  I18nManager.forceRTL(isRTLLanguage);

  i18n = new I18n(appDictionary);
  i18n.locale = locale;
  i18n.enableFallback = true;
};

export const getI18n = () => {
  return i18n;
};

export const getTextDirection = () => {
  return I18nManager.isRTL ? "rtl" : "ltr";
};
