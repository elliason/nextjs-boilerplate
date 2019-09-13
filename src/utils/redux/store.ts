import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer as clock } from '@components/clock/clock.reducer';

// Get or Create the store with `undefined` as initialState
// This allows you to set a custom default initialState
export const initialState = undefined;

const rootReducer = combineReducers({ clock });

export function initializeStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}
