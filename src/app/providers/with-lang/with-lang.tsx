import { type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

import { i18n } from "./config";

export const withLang = (component: () => ReactNode) => () => {
  return <I18nextProvider i18n={i18n}>{component()}</I18nextProvider>;
};
