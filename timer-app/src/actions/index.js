export const NEW_TIMER = 'NEW_TIMER';
export const addTimer = (name) => {
    return {
        type: NEW_TIMER,
        payload: { name }
    };
};

export const TOGGLE_TIMER = 'TOGGLE_TIMER';
export const toggleTimer = (index) => {
    return {
        type: TOGGLE_TIMER,
        payload: { index }
    };
};

export const SELECT_TIMER = 'SELECT_TIMER';
export const selectTimer = (index) => {
    return {
        type: SELECT_TIMER,
        payload: { index }
    };
};

export const UPDATE = 'UPDATE';
export const update = (deltaTime) => {
    return {
        type: UPDATE,
        payload: { deltaTime }
    };
};

// By defining the variable, the value appears only in a single location and can easily be changed. Exporting the variable from this file allows the code editor to catch errors and prevents us from making spelling mistakes.