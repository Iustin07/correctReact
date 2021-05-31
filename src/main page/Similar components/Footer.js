import React, { useState, useEffect } from 'react'
import iFacebook from '../../Images/iFacebook.svg'
import iInstagram from '../../Images/iInstagram.svg'
import iYouTube from '../../Images/iYouTube.svg'
import iGitHub from '../../Images/iGitHub.svg'
import './MainPage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ENG } from '../../locales/en/engTran'
import { RO } from '../../locales/ro/roTran'


function Footer(){
    const [language, setLanguage] = useState(sessionStorage.getItem('language') ? sessionStorage.getItem('language') : 1)

    let languageText = language == 1 ? ENG : RO
    useEffect(() => {
        languageText = language == 1 ? ENG : RO
        console.log(languageText)
        sessionStorage.setItem('language', language);
     // refresh(){()=>{window.location.reload();}};
        
    });
     function refresh(){
         window.location.reload();

     }
    return(
        <div className="foot mx-5"> 
                <div className="FooterIcons">
                    <a href="https://github.com/QuothR/ElectroWay"><img className="Icon img-fluid" src={iGitHub} alt="Icon" /> </a>
                </div>
                <div className="FooterIcons">
                    <a href="https://www.youtube.com/"><img className="Icon img-fluid" src={iYouTube} alt="Icon" /> </a>
                </div>
                <div className="FooterIcons">
                    <a href="https://www.facebook.com/"><img className="Icon img-fluid" src={iFacebook} alt="Icon" /> </a>
                </div>
                <div className = "FooterIcons">
                <a href="https://www.instagram.com/"><img className="Icon img-fluid" src={iInstagram} alt="Icon" /> </a>
                </div>  
                <select className="selectpicker" data-width="fit" defaultValue={language}
             onChange={(e) => {
                    setLanguage(e.target.value);
                    refresh();
                }}>
                    <option value='1'>English</option>
                    <option value='0'>Romana</option>
                </select> 
                <div class="copyright"> 
                &copy; Copyright 2021 Correct Address 
                </div> 
            </div>
    
    );
}

export default Footer;