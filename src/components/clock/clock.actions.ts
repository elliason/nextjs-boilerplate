// ACTION TYPES
export const clockActionTypes = {
    TICK: 'TICK'
};

// ACTION CREATORS
export const serverRenderClock = (isServer) => (dispatch) => {
    return dispatch({ type: clockActionTypes.TICK, light: !isServer, ts: Date.now() });
};

export const startClock = (dispatch) => {
    return setInterval(() => {
        // Dispatch `TICK` every 1 second
        dispatch({ type: clockActionTypes.TICK, light: true, ts: Date.now() });
    }, 1000);
};
