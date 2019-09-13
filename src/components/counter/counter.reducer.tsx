import { counterActionTypes } from '@components/counter/counter.actions';

export interface ICounter {
    count: number;
}

// INITIAL STATE
const counterInitialState: ICounter = {
    count: 0
};

// REDUCER
export const counter = (state = counterInitialState, action) => {
    switch (action.type) {
        case counterActionTypes.INCREMENT:
            return { ...state, count: state.count + 1 };
        case counterActionTypes.DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};
