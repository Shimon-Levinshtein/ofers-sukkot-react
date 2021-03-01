import React from 'react';
import './ChoosingSukkahType.css';
import sukkotJerusalem1 from './SukkotJerusalem1.jpg';
import sukkotKingDavid from './SukkotKingDavid.jpg';

const ChoosingSukkahType = props => {
    return (
        <div className='choosingSukkahType-continer-div flex-space-around '>
            <div className='choosingSukkahType-contint-img'>
                <img className='choosingSukkahType-grayscale-img' src={sukkotJerusalem1} alt=""></img>
            </div>
            <div className='choosingSukkahType-contint-img'>
                <img src={sukkotKingDavid} alt=""></img>
            </div>
        </div>
    );
};

export default ChoosingSukkahType;