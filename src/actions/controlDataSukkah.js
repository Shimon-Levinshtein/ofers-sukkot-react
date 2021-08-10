export const CHANGE_CONTROL_DATA_SUKKOT = 'CHANGE_CONTROL_DATA_SUKKOT';


export const changeTheControlDataSukkah = (key, value) => {
    return async (dispatch, getState) => {
        dispatch({ type: CHANGE_CONTROL_DATA_SUKKOT, payload: {key: key, value: value} });
    };
};
