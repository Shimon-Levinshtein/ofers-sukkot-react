import React from 'react';
import { connect } from 'react-redux';
import { changeTheControlDataSukkah } from '../../../actions/filterDataSukkah';

import './ChoosingSukkahType.css';
import sukkotJerusalem1 from './SukkotJerusalem1.jpg';
import sukkotKingDavid from './SukkotKingDavid.jpg';


const ChoosingSukkahType = props => {
    const obj = props.sukkotsData.filterSukkotsData;
    const hendlerClikImg = (imgName) => {
        props.changeTheControlDataSukkah('typeOfSukkahTemporary', imgName);
    };

    const objKeys = {};
    for (const property in obj) {
        objKeys[obj[property].typeOfSukkah] = obj[property].typeOfSukkah;
    };

    if (!obj) {
        return <h3>אין סוג סוכה לבחירה</h3>
    };
    if (props.sukkotsData.typeOfSukkah === '?' && props.sukkotsData.typeOfSukkahTemporary === '?') {
        if (Object.keys(objKeys).length > 1) {
            return (
                <div className='choosingSukkahType-continer-div flex-space-around '>
                    <div onClick={() => hendlerClikImg('סוכות ירושלים')} className='choosingSukkahType-contint-img'>
                        <img className='choosingSukkahType-grayscale-img' src={sukkotJerusalem1} alt=""></img>
                    </div>
                    <div onClick={() => hendlerClikImg('סוכות דוד המלך')} className='choosingSukkahType-contint-img'>
                        <img className='choosingSukkahType-grayscale-img' src={sukkotKingDavid} alt=""></img>
                    </div>
                </div>
            )
        };
        if (Object.keys(objKeys).length === 1) {
            if (Object.keys(objKeys)[0] === 'סוכות ירושלים') {
                props.changeTheControlDataSukkah('typeOfSukkah', 'סוכות ירושלים');
                return (
                    <div className='choosingSukkahType-continer-div flex-space-around '>
                        <div className='choosingSukkahType-contint-img'>
                            <img src={sukkotJerusalem1} alt=""></img>
                        </div>
                        <div className='choosingSukkahType-contint-img'>
                            <img className='choosingSukkahType-grayscale-img' src={sukkotKingDavid} alt=""></img>
                            <h3 className='choosingSukkahType-contint-img-can-not-select' >אין סוג זה לפי הפרמטרים שבחרתם!</h3>
                        </div>
                    </div>
                );
            }
            if (Object.keys(objKeys)[0] === 'סוכות דוד המלך') {
                props.changeTheControlDataSukkah('typeOfSukkah', 'סוכות דוד המלך');
                return (
                    <div className='choosingSukkahType-continer-div flex-space-around '>
                        <div className='choosingSukkahType-contint-img'>
                            <img className='choosingSukkahType-grayscale-img' src={sukkotJerusalem1} alt=""></img>
                            <h3 className='choosingSukkahType-contint-img-can-not-select' >אין סוג זה לפי הפרמטרים שבחרתם!</h3>
                        </div>
                        <div className='choosingSukkahType-contint-img'>
                            <img src={sukkotKingDavid} alt=""></img>
                        </div>
                    </div>
                );
            }
        };
    } else {
        // typeOfSukkahTemporary
        if (Object.keys(objKeys).length > 1) {
            if (props.sukkotsData.typeOfSukkah === 'סוכות ירושלים' || props.sukkotsData.typeOfSukkahTemporary === 'סוכות ירושלים') {
                return (
                    <div className='choosingSukkahType-continer-div flex-space-around '>
                        <div className='choosingSukkahType-contint-img'>
                            <img src={sukkotJerusalem1} alt=""></img>
                        </div>
                        <div onClick={() => props.changeTheControlDataSukkah('typeOfSukkahTemporary', 'סוכות דוד המלך')} className='choosingSukkahType-contint-img'>
                            <img className='choosingSukkahType-grayscale-img' src={sukkotKingDavid} alt=""></img>
                        </div>
                    </div>
                );
            }
            if (props.sukkotsData.typeOfSukkah === 'סוכות דוד המלך'  || props.sukkotsData.typeOfSukkahTemporary === 'סוכות דוד המלך') {
                return (
                    <div className='choosingSukkahType-continer-div flex-space-around '>
                        <div onClick={() => props.changeTheControlDataSukkah('typeOfSukkahTemporary', 'סוכות ירושלים')} className='choosingSukkahType-contint-img'>
                            <img className='choosingSukkahType-grayscale-img' src={sukkotJerusalem1} alt=""></img>
                        </div>
                        <div  className='choosingSukkahType-contint-img'>
                            <img src={sukkotKingDavid} alt=""></img>
                        </div>
                    </div>
                );
            }
        };
        if (Object.keys(objKeys).length === 1) {
            if (Object.keys(objKeys)[0] === 'סוכות ירושלים') {
                return (
                    <div className='choosingSukkahType-continer-div flex-space-around '>
                        <div className='choosingSukkahType-contint-img'>
                            <img src={sukkotJerusalem1} alt=""></img>
                        </div>
                        <div className='choosingSukkahType-contint-img'>
                            <img className='choosingSukkahType-grayscale-img' src={sukkotKingDavid} alt=""></img>
                            <h3 className='choosingSukkahType-contint-img-can-not-select' >אין סוג זה לפי הפרמטרים שבחרתם!</h3>
                        </div>
                    </div>
                );
            }
            if (Object.keys(objKeys)[0] === 'סוכות דוד המלך') {
                return (
                    <div className='choosingSukkahType-continer-div flex-space-around '>
                        <div className='choosingSukkahType-contint-img'>
                            <img className='choosingSukkahType-grayscale-img' src={sukkotJerusalem1} alt=""></img>
                            <h3 className='choosingSukkahType-contint-img-can-not-select' >אין סוג זה לפי הפרמטרים שבחרתם!</h3>
                        </div>
                        <div className='choosingSukkahType-contint-img'>
                            <img src={sukkotKingDavid} alt=""></img>
                        </div>
                    </div>
                );
            }
        };
    };
    return <h3>טוען</h3>
};


const mapStateToProps = state => {
    return {
        sukkotsData: state.filterDataSukkah,
    }
}
export default connect(mapStateToProps, { changeTheControlDataSukkah })(ChoosingSukkahType);