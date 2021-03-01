export const REQUEST_ALL_DATA = 'REQUEST_ALL_DATA';


export const requestAllData = () => {
    return async (dispatch, getState) => {
        fetch('https://ofers-sukkot-data-default-rtdb.firebaseio.com/sukkots.json/')
            .then(obj => {
                const promise = obj.json();
                promise.then(objSukkots => {
                    fetch('https://ofers-sukkot-data-default-rtdb.firebaseio.com/extras.json/')
                        .then(obj => {
                            const promise = obj.json();
                            promise.then(objExtras => {
                                console.log(objSukkots);
                                dispatch({ type: REQUEST_ALL_DATA, payload: {
                                    sukkotsData: objSukkots,
                                    extrasData: objExtras,
                                } });
                            })
                        })
                })
            })
    };
};
