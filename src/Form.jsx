import React from "react";

function Form(){

    function closeformClick(e) {
        e.preventDefault();
        var element = document.getElementById("contactForm");
        element.classList.remove("openForm");
    }
    
    return(
        <div  id="contactForm" className="form">
            <a href="#" className="close-btn" onClick={closeformClick}><i className="fa-solid fa-xmark"></i></a> 
            <form className="formholder">
                <h2>FORM</h2>
                <input type="name" className="input" placeholder="NAME"/>
                <input type="name" className="input" placeholder="MAIL"/>
                <textarea type="message" className="text-area-section" cols="30" rows="10" placeholder="MESSAGE"></textarea>
                <a href="#" className="submit-btn">submit</a>
            </form>
        </div>
        )
};

export default Form;