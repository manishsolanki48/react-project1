import React from "react";
import productimage1 from './images/star-1.png';
import productimage2 from './images/product-image.jpg';
import productimage3 from './images/product-circle.png';
import productimage4 from './images/product-star-image.png';


function Product(){
    return(
        <div className="product-gallery-section">
        <div className="prodectwrapper">
            <div className="special-offer-saection">
                <div className="specail-offer-box">
                    <p>SPECIAL OFFER</p>
                    <img className="product-image" src={productimage1}/>
                </div>
                <div className="specail-offer-box">
                    <p>SPECIAL OFFER</p>
                    <img className="product-image" src={productimage1}/>
                </div>
                <div className="specail-offer-box">
                    <p>SPECIAL OFFER</p>
                    <img className="product-image" src={productimage1}/>
                </div>
                <div className="specail-offer-box">
                    <p>SPECIAL OFFER</p>
                    <img className="product-image" src={productimage1}/>
                </div>
                <div className="specail-offer-box">
                    <p>SPECIAL OFFER</p>
                </div>
            </div>
            <div className="producet-section">
                <div className="product-left">
                    <img className="product-big-image" src={productimage2}/>
                </div>
                <div className="product-right">
                    <img className="product-circle" src={productimage3}/>
                    <span>Special
                          offer
                    </span>
                    <p>Lorem ipsum dolor sit amet, consec
                       tetur adipiscing elit, sed do eiusmod
                       tempor incididunt
                    </p>
                    <a href="#" className="product-btn">SHOP</a>
                    <img className="product-star-1" src={productimage4}/>
                    <img className="product-star-2" src={productimage4}/>
                </div>
            </div>
            <div className="special-offer-saection">
                <div className="specail-offer-box">
                    <p>SPECIAL OFFER</p>
                    <img className="product-image" src={productimage1}/>
                </div>
                <div className="specail-offer-box">
                    <p>SPECIAL OFFER</p>
                    <img className="product-image" src={productimage1}/>
                </div>
                <div className="specail-offer-box">
                    <p>SPECIAL OFFER</p>
                    <img className="product-image" src={productimage1}/>
                </div>
                <div className="specail-offer-box">
                    <p>SPECIAL OFFER</p>
                    <img className="product-image" src={productimage1}/>
                </div>
                <div className="specail-offer-box">
                    <p>SPECIAL OFFER</p>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Product;