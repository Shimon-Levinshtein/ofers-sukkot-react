import React from 'react';
import './SelectedSukkah.css';
import { connect } from 'react-redux';

const SelectedSukkah = props => {

    if (props.sukkotsData.typeOfSukkahTemporary === '?') {

    } else {
        return (
            <div className='selectedSukkah-continer-div'>
                <b>הסוכה שבחרת: </b>
                {props.sukkotsData.typeOfSukkahTemporary}
            </div>
        );
    };
    if (props.sukkotsData.typeOfSukkah === '?') {
        return (
            <div className='selectedSukkah-continer-div'>
                <b>הסוכה שבחרת: </b>
                בחר סוג סוכה!
            </div>
        );
    } else {
        return (
            <div className='selectedSukkah-continer-div'>
                <b>הסוכה שבחרת: </b>
                {props.sukkotsData.typeOfSukkah}
            </div>
        );
    };
};


const mapStateToProps = state => {
    return {
        sukkotsData: state.filterDataSukkah,
    }
}
export default connect(mapStateToProps, {})(SelectedSukkah);