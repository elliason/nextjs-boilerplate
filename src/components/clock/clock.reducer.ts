import { clockActionTypes } from './clock.actions';

export interface IClockState {
    lastUpdate: number;
    light: boolean;
}

const clockInitialState: IClockState = {
    lastUpdate: 0,
    light: false,
};

export const reducer = (state = clockInitialState, action) => {
    switch (action.type) {
        case clockActionTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light,
            });

        default:
            return state;
    }
};
