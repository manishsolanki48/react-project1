import React from "react";
import bannerImage from './images/banner-image.jpg';
import bannerstar1 from './images/star-1.png';
import bannerstar2 from './images/star-1.png';
import bannercircleimage from './images/circle.png';
import bannerbackground from './images/banner-background-2.png';

function Banner(){      
    return(
        <div className="bannerwrapper">
            <div className="banner-left-taital">
                <img className="banner-background-image2" src={bannerbackground}/>
                <img className="star-image-1" src={bannerstar1}/>
                <img className="star-image-2" src={bannerstar2}/>
                <img className="circle" src={bannercircleimage}/>
                <h2>MAKE EVERYTHING
                    FEEL EASIER
                </h2>
                <span className="text">keep your house under
                     your control.
                </span>
                <p>Lorem ipsum dolor sit amet, consec
               tetur adipiscing elit, sed do eiusmod
               tempor incididunt ut labore.
                </p>
                <div className="banner-btn">
                    <a href="#" className="sign-in">SIGN IN</a>
                    <a href="#" className="read-more">READ MORE</a>
                </div>
            </div>
            <div className="banner-right-image">
            <img src={bannerImage}/>
            </div>
        </div>
     )
};

export default Banner;