import { languageActionTypes } from './actions';
import { defaultLanguage, i18n } from '@utils/i18n';

// INITIAL STATE
const languageInitialState = {
    language: defaultLanguage,
    allLanguages: i18n.languages,
};

// REDUCER
export const reducer = (state = languageInitialState, action) => {
    switch (action.type) {
        case languageActionTypes.CHANGE:
            return { ...state, language: action.language };
        case languageActionTypes.GETLANGS:
            return { ...state, allLanguages: action.languages };
        default:
            return state;
    }
};
