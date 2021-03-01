import { REQUEST_ALL_DATA } from '../actions/RequestData';

const defaultState = {
    sukkotsData: null,
    extrasData: null,
}
export default (state = defaultState, action) => {
    switch (action.type) {
        case REQUEST_ALL_DATA:
                return action.payload;
        default:
            return state;

    }
}