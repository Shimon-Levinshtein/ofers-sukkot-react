import React, { useRef } from 'react';
import './SelectExtension.css';
import { connect } from 'react-redux';

import stepFour from './sukot_site_mhiron_15_8_13_10.png';


const SelectExtension = props => {

    const extrasImgesRef = useRef()
    const hendlerExtraImage = () => {

        const obj = props.sukkotsData.extrasData;
        if (!obj) {
            return <option disabled >אין גודל לבחירה</option>
        }
        return Object.keys(obj).map((item, i) => (
            <div className='selectExtension-div-extra-holder' key={i}>
                <img src={obj[item].extrasPicture} alt="" />
                <div className='selectExtension-text-of-img'>{obj[item].nameExtra}</div>
            </div>
        ))
    };

    return (
        <div className='selectExtension-continer-div'>
            <div className="selectExtension-continer-img">
                <div>
                    <img src={stepFour} alt=""></img>
                </div>
                <div className="selectExtension-continer-text">
                    בחרו תוספת
            </div>
            </div>
            <div className='selectExtension-extras-continer background-gray-for-all' id='selectExtension-contining-items-style-15' ref={extrasImgesRef}>
                {hendlerExtraImage()}
            </div>
            <div className="selectExtension-extras-arrow selectExtension-extras-arrow-right" onClick={() => {
                extrasImgesRef.current.scrollBy(300, 10);
            }}>▶</div>
            <div className="selectExtension-extras-arrow selectExtension-extras-arrow-left" onClick={() => {
                extrasImgesRef.current.scrollBy(-300, 10);
            }}>◀</div>
            <div className='primery-color selectExtension-continer-text-recommendation'>
                כמות האביזרים שבתוספת נבחרו בהתאם לגודל הסוכה ועל פי המלצה בלבד!
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { sukkotsData: state.allDataSukko }
}
export default connect(mapStateToProps, {})(SelectExtension);