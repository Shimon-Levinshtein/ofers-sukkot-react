import React from 'react';
import './SelectionStages.css';
import priceOffer from './PriceOffer.jpg';

import {isMobile} from 'react-device-detect';


const SelectionStages = props => {

    if (isMobile) return false

    return (
        <div className='selectionStages-continer-div'>
                <img src={priceOffer}  alt=""></img>
        </div>
    );
};

export default SelectionStages;