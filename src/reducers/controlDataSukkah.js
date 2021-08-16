import { CHANGE_CONTROL_DATA_SUKKOT } from '../actions/controlDataSukkah';


const defaultState = {
    fabricType: '',
    id: '',
    imageFabricType: '',
    numberSitting: '',
    priceSukka: '',
    size: '',
    sukkahPicture: '',
    sukkahPictureId: '',
    sukkahSizeImage: '',
    sukkahSizeImageId: '',
    thatchType: '',
    typeOfSukkah: '',
}
const controlDataSukkah = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CONTROL_DATA_SUKKOT:
            const oldState = {...state};
            oldState[action.payload.key] = action.payload.value;
            return oldState;
        default:
            return state;

    }
};

export default controlDataSukkah;

