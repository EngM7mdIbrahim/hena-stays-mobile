import { initiateI18n } from "./i18n";
import { initiateTheme } from "./theme";

export const initiateInitializers = () => {
  initiateI18n();
  initiateTheme();
};
