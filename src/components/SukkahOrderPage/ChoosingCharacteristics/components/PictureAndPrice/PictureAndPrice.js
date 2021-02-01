import React from 'react';
import './PictureAndPrice.css';
import suka from './Suka.jpg'

const PictureAndPrice = props => {
    return (
        <div className='pictureAndPrice-continer-div'>
            <div className='pictureAndPrice-contining-img'>
                <img src={suka}></img>
            </div>
            <div className='pictureAndPrice-contining-price'>
                מחיר: 900$
            </div>
        </div>
    );
};

export default PictureAndPrice;