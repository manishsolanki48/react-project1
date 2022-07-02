import React from "react";
import image1 from './images/circle-2.png';
import image2 from './images/circle-3.png';
import image3 from './images/circle-4.png'; 

function Bannertextholder(){
    return(
        <div className="banner-text-section">   
            <p>smart technology</p>
            <p>accesories</p>
            <p>software</p>
            <img className="circle-2" src={image1}/>
            <img className="circle-3" src={image2}/>
            <img className="circle-4" src={image3}/>
        </div>
        )
};
export default Bannertextholder;