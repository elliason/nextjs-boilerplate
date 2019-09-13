import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
// import { i18n } from '@utils/i18n';
import { reducer as clock } from '@components/clock/clock.reducer';

export const exampleInitialState = undefined;

const rootReducer = combineReducers({ clock });

export function initializeStore(initialState = exampleInitialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}
