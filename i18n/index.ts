import { AppDictionary, DictionaryMap } from "@interfaces/i18n";
import { en } from "./en";
import { Language } from "@enums";
import { ar } from "./ar";

export const appDictionary: DictionaryMap = {
  [Language.EN]: en,
  [Language.AR]: ar,
};
