import './Similar components/MainPage.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContent from './Content/HomeContent/HomeContent'
import Footer from './Similar components/Footer'
import { Link } from 'react-router-dom'
import { ENG } from '../locales/en/engTran'
import { RO } from '../locales/ro/roTran'
import React, { useState, useEffect } from 'react'

function MainPage() {

    const [language, setLanguage] = useState(
        sessionStorage.getItem("language") ? sessionStorage.getItem("language") : 1 );
    let languageText = language == 1 ? ENG : RO;
    return (
        <div className="MainPage">
            <div className="ContentMainPage">
                <ul>
                    <Link to="/"> <li><a href="">{languageText.mainContent.Home}</a></li></Link>
                    <li><a className="active" href="">{languageText.mainContent.Find}</a></li>
                    <li><a href="#contact">{languageText.mainContent.Contact}</a></li>
                    <li><a href="#about">{languageText.mainContent.About}</a></li>
                </ul>

                <Router>
                    <div className="divDreapta">
                        <Switch>

                            <Route path="/home" exact component={HomeContent} />

                        </Switch>
                    </div>
                </Router>
            </div>
            <footer> <Footer /> </footer>
        </div>
    );
}

export default MainPage;