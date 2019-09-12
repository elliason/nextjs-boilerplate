import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
    browserLanguageDetection: false,
    defaultLanguage: 'cz',
    defaultNS: 'common',
    fallbackLng: 'cz',
    /* localeSubpaths: {
        en: 'english',
        cz: 'czech'
    }, */
    otherLanguages: ['en'],
    preload: ['cz']
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation, Link, Router, i18n } = NextI18NextInstance;
