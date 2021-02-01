import React from 'react';
import './SizeSelection.css';
import picSize from './PicSize.jpg';
import picPNumber from './PicPNumber.jpg';
import {isMobile} from 'react-device-detect';

const SizeSelection = props => {
    return (
        <div className='SizeSelection-continer-div'>
            <div>
                <img src={picSize}></img>
            </div>
            <div className='select-default-style' >
                <select className='sizeSelection-select' onChange={() => { }}>
                    <option value="" disabled selected hidden>בחר גודל</option>
                    <option>5/5</option>
                    <option>6/6</option>
                    <option >7/7</option>
                </select>
            </div>
            <div className='primery-color sizeSelection-big-text'>
                או
            </div>
            <div>
                <img src={picPNumber}></img>
            </div>
            <div>
                <select className='sizeSelection-select' placeholder="Search product" onChange={() => { }}>
                    <option value="" disabled selected hidden>בחר יושבים</option>
                    <option>5</option>
                    <option>6</option>
                    <option >10</option>
                </select>
            </div>
        </div>
    );
};

export default SizeSelection;