import { i18n } from '@utils/i18n';

// ACTION TYPES
export const languageActionTypes = {
    CHANGE: 'CHANGE',
    GETLANGS: 'GETLANGS',
};

// ACTION CREATORS
export const changeLanguage = (language) => (dispatch) => {
    i18n.changeLanguage(language);
    return dispatch({ type: languageActionTypes.CHANGE, language });
};

export const getLanguages = () => (dispatch) => {
    return dispatch({ type: languageActionTypes.GETLANGS, languages: i18n.languages });
};
