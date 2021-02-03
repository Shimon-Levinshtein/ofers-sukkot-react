import React from 'react';
import './SelectExtension.css';
import stepFour from './sukot_site_mhiron_15_8_13_10.png';
import extrasA from './bambook.png';
import extrasB from './ets.png';
import extrasC from './tefeskal.png';
import extrasD from './tomechkora.png';


const SelectExtension = props => {
    return (
        <div className='selectExtension-continer-div'>
            <div className="selectExtension-continer-img">
                <div>
                    <img src={stepFour}></img>
                </div>
                <div className="selectExtension-continer-text">
                    בחרו תוספת
            </div>
            </div>
            <div className='selectExtension-extras-continer background-gray-for-all'>
                <div>
                    <img src={extrasA} />
                </div>
                <div>
                    <img src={extrasB} />
                </div>
                <div>
                    <img src={extrasC} />
                </div>
                <div>
                    <img src={extrasD} />
                </div>
            </div>
            <div className='primery-color selectExtension-continer-text-recommendation'>
                כמות האביזרים שבתוספת נבחרו בהתאם לגודל הסוכה ועל פי המלצה בלבד!
            </div>
        </div>
    );
};

export default SelectExtension;