import React from 'react';
import './ChoosingCharacteristics.css';
import Muffins from './components/Muffins/Muffins';
import PictureAndPrice from './components/PictureAndPrice/PictureAndPrice';
const ChoosingCharacteristics = props => {
    return (
        <div className='choosingCharacteristics-comntiner-div'>
            <div className='choosingCharacteristics-right-div'>
                <Muffins />
            </div>
            <div className='choosingCharacteristics-left-div'>
                <PictureAndPrice />
            </div>
        </div>
    );
};

export default ChoosingCharacteristics;