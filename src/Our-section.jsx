import React from "react";
import ourimage1 from './images/our-term-image.png';
import ourimage2 from './images/star-1.png';
import ourimage3 from './images/star-2.png';
import ourimage4 from './images/circle-3.png';

function Oursection(){
    return(
        <div className="our-term-section">
            <div className="out-term">
                <div className="our-term-left-section">
                    <img src={ourimage1}/>
                </div>
                <div className="our-term-right-section">
                    <img className="star-5" src={ourimage2}/>
                    <img className="star-6" src={ourimage3}/>
                    <img className="our-term-circle" src={ourimage4}/>
                    <div className="our-term-taital">
                        <h2>Our Story</h2>
                     </div>
                    <span className="our-term-text">Lorem ipsum dolor amet, 
                        consectetur.
                    </span>
                    <p>Lorem ipsum dolor sit amet, consec
                        tetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labor
                    </p>
                    <a href="#" className="our-term-btn">READ MORE</a>
                </div>
            </div>
        </div>
        )
};

export default Oursection;