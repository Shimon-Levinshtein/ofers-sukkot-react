import React from 'react';
import './SizeSelection.css';
import { connect } from 'react-redux';

import picSize from './PicSize.jpg';
import picPNumber from './PicPNumber.jpg';

import { changeTheControlDataSukkah } from '../../../actions/filterDataSukkah';

const SizeSelection = props => {

    const numberSittingChange = (e) => {
        props.changeTheControlDataSukkah('numberSitting', e.currentTarget.value);
    };

    const sizeChange = (e) => {
        props.changeTheControlDataSukkah('size', e.currentTarget.value);
    };

    const hendlerSelectSize = () => {
        const obj = props.sukkotsData.filterSukkotsDataOriginal;
        if (!obj) {
            return <option disabled >אין גודל לבחירה</option>
        }
        const objKeys = {};
        for (const property in obj) {
            objKeys[obj[property].size] = obj[property].size;
        };
        return Object.keys(objKeys).map((item, i) => (
            <option key={i} >{objKeys[item]}</option>
        ))
    };

    const hendlerSelectnumberSitting = () => {
        const obj = props.sukkotsData.filterSukkotsData;
        if (!obj ) {
            return <option disabled >אין מספא יושבים לבחירה</option>
        }
        const objKeys = {};
        for (const property in obj) {
            objKeys[obj[property].numberSitting] = obj[property].numberSitting;
        };
        const newKeysArr = [];
        if (props.sukkotsData.numberSitting === '?') {
            newKeysArr.push('בחר יושבים');
        };
        Object.keys(objKeys).map((item, i) => {
            newKeysArr.push(objKeys[item]);
            return false;
        });
        console.log(newKeysArr);
        return newKeysArr.map((item, i) => (
            <option key={i} value={item} >{item}</option>
        ))
        // return Object.keys(objKeys).map((item, i) => (
        //     <option key={i} value={objKeys[item]} >{objKeys[item]}</option>
        // ))
        // return Object.keys(objKeys).map((item, i) => (
        //     <option key={i} >{objKeys[item]}</option>
        // ))
    };

    return (
        <div className='SizeSelection-continer-div'>
            <div>
                <img src={picSize} alt=""></img>
            </div>
            <div className='select-default-style' >
                <select className='sizeSelection-select' defaultValue={'DEFAULT'} onChange={sizeChange}>
                    <option value="DEFAULT" disabled >בחר גודל</option>
                    {hendlerSelectSize()}
                </select>
            </div>
            <div className='primery-color sizeSelection-big-text'>
                או
            </div>
            <div>
                <img src={picPNumber} alt=""></img>
            </div>
            <div>
                <select className='sizeSelection-select' name='fruit' value={'DEFAULT'} onChange={numberSittingChange}>
                    {/* <option value="DEFAULT" disabled >בחר יושבים</option> */}
                    {hendlerSelectnumberSitting()}
                </select>
                {/* <select className='sizeSelection-select' defaultValue={'DEFAULT'} onChange={numberSittingChange}>
                    <option value="DEFAULT" disabled >בחר יושבים</option>
                    {hendlerSelectnumberSitting()}
                </select> */}
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return {
        sukkotsData: state.filterDataSukkah,
        filterSukkotsDataOriginal: state.filterSukkotsDataOriginal
    }
}
export default connect(mapStateToProps, { changeTheControlDataSukkah })(SizeSelection);