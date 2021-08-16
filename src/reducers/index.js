import { combineReducers } from 'redux';

import allData from './allData';
import controlDataSukkah from './controlDataSukkah';
import filterDataSukkah from './filterDataSukkah';

export default combineReducers({
    allDataSukko: allData,
    controlDataSukkah: controlDataSukkah,
    filterDataSukkah: filterDataSukkah,
});