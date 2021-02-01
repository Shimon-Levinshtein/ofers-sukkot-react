import React from 'react';
import './SubmitForm.css';
import fcbutton from './fcbutton.png';

const SubmitForm = props => {
    return (
        <div className='submitForm-continer-div flex-space-around'>
            <div className='submitForm-text-instructions-form'>
                <strong>סיימתם לבחור סוכה?</strong>
                {/* <br /> */}
                כעת נותר לכם למלא את הטופס ונחזור אליכם
           </div>
            <div className='submitForm-contined-imputs flex-space-around'>
                <div className='submitForm-contined-Half-imputs'>
                    <div>
                        <input type="text" placeholder="* שם מלא" />
                    </div>
                    <div>
                        <input type="text" placeholder="* טלפון" />
                    </div>
                </div>
                <div className='submitForm-contined-Half-imputs'>
                    <div>
                        <input type="text" placeholder="דואר אלקטרוני" />
                    </div>
                    <div>
                        <input type="text" placeholder="עיר" />
                    </div>
                </div>
            </div>
            <div className='submitForm-contined-img-send'>
                <img src={fcbutton} />
            </div>
        </div>
    );
};

export default SubmitForm;