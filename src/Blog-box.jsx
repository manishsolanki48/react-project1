import React from "react";
import imagefoloder1 from './images/blog-image-1.jpg';
import imagefoloder2 from './images/blog-image-2.jpg';
import imagefoloder3 from './images/blog-image-3.jpg';

function blogwrapper(){
    return(
        <div className="blog">
            <div className="blog-box">
                <img src={imagefoloder1}/>
                <h2>Lorem ipsum dolor amet, 
                    consectetur.
                </h2>
                <p>Lorem ipsum dolor sit amet, consec
                    tetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labor
                </p>
                <a href="#" className="blog-btn">READ MORE</a>
            </div>
            <div className="blog-box">
                <img src={imagefoloder2}/>
                <h2>Lorem ipsum dolor amet, 
                    consectetur.
                </h2>
                <p>Lorem ipsum dolor sit amet, consec
                    tetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labor
                </p>
                <a href="#" className="blog-btn">READ MORE</a>
            </div>
            <div className="blog-box">
                <img src={imagefoloder3}/>
                <h2>Lorem ipsum dolor amet, 
                    consectetur.
                </h2>
                <p>Lorem ipsum dolor sit amet, consec
                    tetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labor
                </p>
                <a href="#" className="blog-btn">READ MORE</a>
            </div>
        </div>
        )
};

export default blogwrapper;