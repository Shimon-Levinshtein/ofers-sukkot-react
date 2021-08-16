import { FILTER_CONTROL_DATA_SUKKOT } from '../actions/filterDataSukkah';
import { UPDAT_ALL_FILTER_DATA } from '../actions/RequestData';


const defaultState = {
    fabricType: '?',
    id: '?',
    imageFabricType: '?',
    numberSitting: '?',
    priceSukka: '?',
    size: '?',
    sukkahPicture: '?',
    sukkahPictureId: '?',
    sukkahSizeImage: '?',
    sukkahSizeImageId: '?',
    thatchType: '?',
    typeOfSukkah: '?',
    typeOfSukkahTemporary: '?',
    filterSukkotsDataOriginal: {},
    filterSukkotsData: {},
}
const filterDataSukkah = (state = defaultState, action) => {
    switch (action.type) {
        case FILTER_CONTROL_DATA_SUKKOT:
            const key = action.payload.key;
            const value = action.payload.value;
            let oldState = { ...state };
            if (key === 'size') {
                oldState = clineAllParams(oldState);
            };
            oldState[key] = value;
            oldState.filterSukkotsData = funFilterParams(key, value, oldState.filterSukkotsData, oldState.filterSukkotsDataOriginal);
            return oldState;
        case UPDAT_ALL_FILTER_DATA:
            const oldStateB = { ...state };
            oldStateB.filterSukkotsData = action.payload;
            oldStateB.filterSukkotsDataOriginal = action.payload;
            return oldStateB;
        default:
            return state;

    }
}

const funFilterParams = (key, value, obj, originalObj) => {
    const filteringOBJ = {};
    if (key === 'typeOfSukkahTemporary') {
        return obj;
    }
    if (key === 'size') {
        for (const property in originalObj) {
            if (originalObj[property][key] === value) {
                filteringOBJ[property] = originalObj[property];
            };
        };
    } else {
        for (const property in obj) {
            if (obj[property][key] === value) {
                filteringOBJ[property] = obj[property];
            };
        };
    };
    return filteringOBJ;
};
 const clineAllParams = (obj) => {
    obj.fabricType = '?';
    obj.id = '?';
    obj.imageFabricType = '?';
    obj.numberSitting = '?';
    obj.priceSukka = '?';
    obj.size = '?';
    obj.sukkahPicture = '?';
    obj.sukkahPictureId = '?';
    obj.sukkahSizeImage = '?';
    obj.sukkahSizeImageId = '?';
    obj.thatchType = '?';
    obj.typeOfSukkah = '?';
    obj.typeOfSukkahTemporary = '?';
    return obj;
 };

 export default filterDataSukkah;