import React from 'react';
import './SizeImage.css';
import { connect } from 'react-redux';


const SizeImage = props => {

    const obj = props.sukkotsData.filterSukkotsData;
    if (!obj) {
        return <h3>אין גודל לבחירה</h3>
    }
    if (props.sukkotsData.size === '?') {
        return (
            <div className="SizeImage-continer-div">
                <h3>בחר גודל סוכה!!!</h3>
            </div>
        )
    };
    if (props.sukkotsData.numberSitting === '?') {
        return (
            <div className="SizeImage-continer-div">
                <h3>בחר מספר יושבים!!!</h3>
            </div>
        )
    };
    return (
        <div className="SizeImage-continer-div">
            <img src={obj[Object.keys(obj)[0]].sukkahSizeImage} alt=""></img>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        sukkotsData: state.filterDataSukkah,
    }
}
export default connect(mapStateToProps, {})(SizeImage);