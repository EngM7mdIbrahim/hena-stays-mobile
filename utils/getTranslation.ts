import { getI18n } from "@initializers/i18n";
import { AppDictionaryKeyPaths } from "@interfaces/i18n";

export const getTranslation = (key: AppDictionaryKeyPaths, args?: Record<string, string>) => {
  const i18n = getI18n();
  if (!i18n) {
    throw new Error("i18n not initialized");
  }
  return i18n.t<AppDictionaryKeyPaths>(key, args);
};
