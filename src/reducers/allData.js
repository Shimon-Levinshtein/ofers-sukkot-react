import { REQUEST_ALL_DATA } from '../actions/RequestData';

const defaultState = {
    sukkotsData: null,
    extrasData: null,
}
const allData = (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_ALL_DATA:
                return action.payload;
        default:
            return state;

    }
};

export default allData;