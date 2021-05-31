import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styling.css'
import AOS from 'aos'
import Logo from '../../Images/map.png'
import './styling.css'
import { ENG } from '../../locales/en/engTran'
import { RO } from '../../locales/ro/roTran'
import Footer from '../../main page/Similar components/Footer'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css';
function MainContent() {
    // const [language, setLanguage] = useState(sessionStorage.getItem('language') ? sessionStorage.getItem('language') : 1)

    // let languageText = language == 1 ? ENG : RO
    // useEffect(() => {
    //     languageText = language == 1 ? ENG : RO
    //     console.log(languageText)
    //     sessionStorage.setItem('language', language);
    // });
    const [language, setLanguage] = useState(
        sessionStorage.getItem("language") ? sessionStorage.getItem("language") : 1 );
    let languageText = language == 1 ? ENG : RO;

Aos.init();
    return (
        <div className="page">
            <ul>
  <li><a className="active" href="#home">{languageText.mainContent.Home}</a></li>
  <Link to="/home"><li><a href="">{languageText.mainContent.Find}</a></li></Link>
  <li><a href="#contact">{languageText.mainContent.Contact}</a></li>
  <li><a href="#about">{languageText.mainContent.About}</a></li>             
</ul>
            {/* <select className="selectpicker" data-width="fit" defaultValue={language}
             onChange={(e) => {
                    setLanguage(e.target.value);
                }}>
                    <option value='1'>English</option>
                    <option value='0'>Romana</option>
                </select>
                <div className="asider">
                    <div className="col-md6 mx-5 my-2">
                        <img src={Logo} className="img-fluid img" alt="LogoMainPage" /></div>


                    <button className="btn-class" onClick={() => { window.location.pathname = "/home" }}>Sign in</button>
                </div> */}
        <main className="main">
     <div className="introPart">
    <img src={Logo} className="intro-image" data-aos="fade-down" data-aos-offset="400" data-aos-duration="2000"/>
    <p  data-aos="fade-down" data-aos-offset="400" data-aos-duration="2000" >{languageText.mainContent.title}</p>
    </div>
        </main>

    
            <footer><Footer/></footer>
        </div>

    );
}
export default MainContent;