import React from 'react';
import './PrintQuote.css';
import printIt from './PrintIt.jpg';
import total from './total.png';

const PrintQuote = props => {
    return (
        <div className='printQuote-continer-div flex-space-around'>
            <div className='printQuote-continerd-img-sum'>
                <img src={total} />
            </div>
            <div className='printQuote-summary-all-order'>
                189 ש''ח
            </div>
            <div  className='printQuote-print-button' >
                <img src={printIt} />
            </div>
        </div>
    );
};

export default PrintQuote;