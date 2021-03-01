import React from 'react';
import './PrintQuote.css';
import printIt from './PrintIt.jpg';
import total from './total.png';


const PrintQuote = props => {
    return (
        <div className='printQuote-continer-div'>
            <div className='printQuote-continerd-img-sum'>
                    <img src={total} alt="" />
            </div>
            <div className='printQuote-summary-all-order'>
                189 ש''ח
            </div>
            <div className='printQuote-print-button' >
                <img src={printIt} alt="" />
            </div>
        </div>
    );
};

export default PrintQuote;