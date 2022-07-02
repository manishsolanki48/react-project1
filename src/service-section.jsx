import React from 'react';
import serviceimage1 from './images/star-1.png';
import serviceimage2 from './images/star-2.png';
import serviceimage3 from './images/circle-3.png';
import serviceimage4 from './images/service-image.jpg';

function Service(){
    return(
        <div className="service-section">
            <div className="servicewrapper">
                <div className="service-left">
                    <img className="star-7" src={serviceimage1}/>
                    <img className="star-8" src={serviceimage2}/>
                    <img className="service-circle" src={serviceimage3}/>
                    <div className="service-taital">
                        <h2>wHY US?</h2>
                    </div>
                    <span>Lorem ipsum dolor amet, consectetur.
                    </span>
                    <p>Lorem ipsum dolor sit amet, consec
                        tetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labor
                    </p>
                    <a href="#" className="serviec-btn">READ MORE</a>
                </div>
                <div className="service-right">
                    <img src={serviceimage4}/> 
                </div>
            </div>
        </div>
        )
};

export default Service;