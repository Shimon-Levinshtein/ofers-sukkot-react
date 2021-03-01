import React from 'react';
import './SizeImage.css';
import image from './4_61.png';


const SizeImage = props => {
    return (
        <div className="SizeImage-continer-div"> 
                <img src={image} alt=""></img>

        </div>
    );
};

export default SizeImage;