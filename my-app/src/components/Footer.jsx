import React from "react";
import face from '../img/face.png'
import insta from '../img/insta.png'
import linkedin from '../img/linkedin.png'
import twitter from '../img/twitter.png'

import { Component } from "react";

import "../componentsStyle/FooterStyle.css";

class Footer extends Component{
    render(){
        return(
            <div className="footer__container">
                <div className="footer__txt__container">
                    <p className="footer__txt"> @2021 Digital Booking </p>    
                </div>    

                <div className="footer__img__container">
                        <img className="footer__img" src={face} alt="logo"/>
                        <img className="footer__img" src={insta} alt="logo"/>
                        <img className="footer__img" src={linkedin} alt="logo"/>
                        <img className="footer__img" src={twitter} alt="logo"/>
                        
                </div>
                    
            </div>

        );
    }


}


export default Footer;