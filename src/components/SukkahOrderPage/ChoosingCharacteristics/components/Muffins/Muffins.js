import React from 'react';
import './Muffins.css';
import { connect } from 'react-redux';

import selectedSukkahA from './selectedSukkah_Page_1.jpg'
import selectedSukkahB from './selectedSukkah_Page_2.jpg'
import selectedSukkahC from './selectedSukkah_Page_3.jpg'
import selectedSukkahD from './selectedSukkah_Page_4.jpg'

const Muffins = props => {

    const hendlerSelectFabricType = () => {
        const obj = props.sukkotsData.sukkotsData;
        console.log(obj);
        if (!obj) {
            return <option disabled >אין סוג בד לבחירה</option>
        }
        return Object.keys(obj).map((item, i) => (
            <option key={i} >{obj[item].fabricType}</option>
        ))
    };
    const hendlerSelectImageFabricType = () => {
        const obj = props.sukkotsData.sukkotsData;
        if (!obj) {
            return <option disabled >אין גודל לבחירה</option>
        }
        return Object.keys(obj).map((item, i) => (
            <option key={i} >{obj[item].imageFabricType}</option>
        ))
    };
    const hendlerSelectThatchType = () => {
        const obj = props.sukkotsData.sukkotsData;
        if (!obj) {
            return <option disabled >אין גודל לבחירה</option>
        }
        return Object.keys(obj).map((item, i) => (
            <option key={i} >{obj[item].thatchType}</option>
        ))
    };

    return (
        <div className='muffins-continer-div'>
            <div className='muffins-containing-img'>
                <img src={selectedSukkahA} alt=""></img>
            </div>
            <div>
                <select className='muffins-selects' defaultValue={'DEFAULT'} onChange={() => { }}>
                    <option value="DEFAULT" disabled>בחר סוג בד</option>
                    {hendlerSelectFabricType()}
                </select>
            </div>
            <div className='muffins-containing-img'>
                <img src={selectedSukkahB} alt=""></img>
            </div>
            <div>
                <select className='muffins-selects' defaultValue={'DEFAULT'} onChange={() => { }}>
                    <option value="DEFAULT" disabled>בחר בד תמונה</option>
                    {hendlerSelectImageFabricType()}
                </select>
            </div>
            <div className='muffins-containing-img'>
                <img src={selectedSukkahC} alt=""></img>
            </div>
            <div>
                <select className='muffins-selects' defaultValue={'DEFAULT'} onChange={() => { }}>
                    <option value="DEFAULT" disabled>בחר סכך</option>
                    {hendlerSelectThatchType()}
                </select>
            </div>
            <div className='muffins-containing-img'>
                <img src={selectedSukkahD} alt=""></img>
            </div>
            <div className='muffins-everything-selected'>
               כל מה שנבחר
            </div>
        </div>
    );
};


const mapStateToProps = state => {
    return { sukkotsData: state.allDataSukko }
}
export default connect(mapStateToProps, {})(Muffins);