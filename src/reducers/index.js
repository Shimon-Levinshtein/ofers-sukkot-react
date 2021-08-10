import { combineReducers } from 'redux';

import allData from './allData';
import controlDataSukkah from './controlDataSukkah';

export default combineReducers({
    allDataSukko: allData,
    controlDataSukkah: controlDataSukkah,
});