import React from 'react';
import './OneStep.css';
import oneStepImg from './sukot_site_mhiron_15_8_13_03.png';
const OneStep = props => {
    return (
        <div className="OneStep-continer-div">
            <div>
                <img src={oneStepImg} alt=""></img>
            </div>
            <div className="OneStep-continer-text">
                בחרו דגם סוכה מבין שני דגמי הסוכות של "סוכות ירושלים"
            </div>
        </div>
    );
};

export default OneStep;