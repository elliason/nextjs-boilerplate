import NextI18Next from 'next-i18next';

export const defaultLanguage = 'cs';

const NextI18NextInstance = new NextI18Next({
    browserLanguageDetection: true,
    defaultLanguage,
    defaultNS: 'common',
    fallbackLng: defaultLanguage,
    /* localeSubpaths: {
        cz: 'cz',
        en: 'eng'
    }, */
    otherLanguages: ['en'],
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation, Link, Router, i18n } = NextI18NextInstance;
