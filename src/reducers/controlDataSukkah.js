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
export default (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_CONTROL_DATA_SUKKOT:
            const oldState = {...state};
            oldState[action.payload.key] = action.payload.value;
            console.log(oldState);
            return oldState;
        default:
            return state;

    }
}

