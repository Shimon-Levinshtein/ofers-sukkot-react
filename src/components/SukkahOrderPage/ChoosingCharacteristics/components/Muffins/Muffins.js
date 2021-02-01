import React from 'react';
import './Muffins.css';
import selectedSukkahA from './selectedSukkah_Page_1.jpg'
import selectedSukkahB from './selectedSukkah_Page_2.jpg'
import selectedSukkahC from './selectedSukkah_Page_3.jpg'
import selectedSukkahD from './selectedSukkah_Page_4.jpg'

const Muffins = props => {
    return (
        <div className='muffins-continer-div'>
            <div className='muffins-containing-img'>
                <img src={selectedSukkahA}></img>
            </div>
            <div>
                <select className='muffins-selects' onChange={() => { }}>
                    <option value="" disabled selected hidden>בחר גודל</option>
                    <option>5/5</option>
                    <option>6/6</option>
                    <option >7/7</option>
                </select>
            </div>
            <div className='muffins-containing-img'>
                <img src={selectedSukkahB}></img>
            </div>
            <div>
                <select className='muffins-selects' onChange={() => { }}>
                    <option value="" disabled selected hidden>בחר בד תמונה</option>
                    <option>5/5</option>
                    <option>6/6</option>
                    <option >7/7</option>
                </select>
            </div>
            <div className='muffins-containing-img'>
                <img src={selectedSukkahC}></img>
            </div>
            <div>
                <select className='muffins-selects' onChange={() => { }}>
                    <option value="" disabled selected hidden>בחר סכך</option>
                    <option>5/5</option>
                    <option>6/6</option>
                    <option >7/7</option>
                </select>
            </div>
            <div className='muffins-containing-img'>
                <img src={selectedSukkahD}></img>
            </div>
            <div className='muffins-everything-selected'>
               כל מה שנבחר
            </div>
        </div>
    );
};

export default Muffins;