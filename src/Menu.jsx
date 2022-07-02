import React from "react";
import logo from './images/logo.png';
import bannerbackground from './images/banner-background-1.png';

function Topheader(){
    function openformClick(e) {
        e.preventDefault();
        var element = document.getElementById("contactForm");
        element.classList.add("openForm");
    }

    return(
        <div className="top-header" id="topHeader">
            <img className="banner-background-image1" src={bannerbackground}/>
            <div className="top-header-logo"><img src={logo}/></div>
            <ul className="menu">
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">PRODUCT</a></li>
                <li><a href="#">BLOG</a></li>
            </ul>
            <div className="btn">
                <a href="#" className="top-btn" onClick={openformClick}>SIGN IN</a>
            </div>
        </div>
        )   
};

export default Topheader;