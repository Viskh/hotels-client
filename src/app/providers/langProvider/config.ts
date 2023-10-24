import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';

import { resources } from './resources';

export const defaultNS = 'general';
export const supportedLngs = ['ru', 'en'] as const;

void i18n.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    fallbackLng: 'ru',
    defaultNS,
    resources,
    supportedLngs,
    lowerCaseLng: true,
    cleanCode: true,
    load: 'languageOnly',
});

export { i18n };
