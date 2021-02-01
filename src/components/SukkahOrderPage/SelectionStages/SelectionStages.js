import React from 'react';
import './SelectionStages.css';
import priceOffer from './PriceOffer.jpg';

const SelectionStages = props => {
    return (
        <div className='selectionStages-continer-div'>
                <img src={priceOffer}></img>
        </div>
    );
};

export default SelectionStages;