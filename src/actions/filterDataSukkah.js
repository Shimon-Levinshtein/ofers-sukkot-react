export const FILTER_CONTROL_DATA_SUKKOT = 'FILTER_CONTROL_DATA_SUKKOT';


export const changeTheControlDataSukkah = (key, value) => {
    return async (dispatch, getState) => {
        dispatch({ type: FILTER_CONTROL_DATA_SUKKOT, payload: {key: key, value: value} });
    };
};
