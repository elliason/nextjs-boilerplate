// ACTION TYPES
export const counterActionTypes = {
    DECREMENT: 'DECREMENT',
    INCREMENT: 'INCREMENT'
};

// ACTION CREATORS
export const incrementCounter = () => (dispatch) => {
    return dispatch({ type: counterActionTypes.INCREMENT });
};

export const decrementCounter = () => (dispatch) => {
    return dispatch({ type: counterActionTypes.DECREMENT });
};
