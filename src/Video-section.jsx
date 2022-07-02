import React from "react";
import videoimage1 from './images/banner-image-2.jpg'; 
import videoimage2 from './images/circle-big-image.png';
import videoimage3 from './images/big-image-btn.png';


function Videogellary(){
    return(
            <div className="video-gallery-section">
            <div className="video-section">
                <h2>the new era is here</h2>
                <img src={videoimage1}/>
                <img className="video-btn" src={videoimage2} />
                <h2>the new era is here</h2>
                <img className="circle-big-image" src={videoimage3} />
            </div>
        </div>
        )
};

export default Videogellary;
