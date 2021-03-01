import React from 'react';
import './SizeSelection.css';
import { connect } from 'react-redux';

import picSize from './PicSize.jpg';
import picPNumber from './PicPNumber.jpg';

const SizeSelection = props => {

    const hendlerSelectSize = () => {
        const obj = props.sukkotsData.sukkotsData;
        if (!obj) {
            return <option disabled >אין גודל לבחירה</option>
        }
        return Object.keys(obj).map((item, i) => (
            <option key={i} >{obj[item].size}</option>
        ))
    };

    const hendlerSelectnumberSitting = () => {
        const obj = props.sukkotsData.sukkotsData;
        if (!obj) {
            return <option disabled >אין מספא יושבים לבחירה</option>
        }
        return Object.keys(obj).map((item, i) => (
            <option key={i} >{obj[item].numberSitting}</option>
        ))
    };

    return (
        <div className='SizeSelection-continer-div'>
            <div>
                <img src={picSize} alt=""></img>
            </div>
            <div className='select-default-style' >
                <select className='sizeSelection-select' defaultValue={'DEFAULT'} onChange={() => { }}>
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
                <select className='sizeSelection-select' defaultValue={'DEFAULT'} onChange={() => { }}>
                    <option value="DEFAULT" disabled >בחר יושבים</option>
                    {hendlerSelectnumberSitting()}
                </select>
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return { sukkotsData: state.allDataSukko }
}
export default connect(mapStateToProps, {})(SizeSelection);