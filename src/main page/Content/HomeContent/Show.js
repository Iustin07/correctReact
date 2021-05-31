import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './HomeContent.css'
import { ENG } from '../../../locales/en/engTran'
import { RO } from '../../../locales/ro/roTran'

function Show(prop) {
    // console.log(prop.countryName);
    // console.log(prop.stateName);
    // console.log(prop.cityName);
    // const data=prop.data;
    var country=prop.countryName;
    var city=prop.cityName;
    var state=prop.stateName;
   var answer;
   const [language, setLanguage] = useState(
    sessionStorage.getItem("language") ? sessionStorage.getItem("language") : 1 );
let languageText = language == 1 ? ENG : RO;
    if(prop.countryName==null && prop.stateName==null && prop.cityName==null){
     answer=languageText.home.correct;
    country="";
     city="";
  state ="";
    }

return (
   
<div className="RightForm">
    <p>{languageText.home.title2}</p>
    <p className="attention">{answer}</p>
    <form className="FormularDreapta">
        <label>{languageText.home.label1}</label>
        <input className="input-field" value={country} readOnly></input>
        <label>{languageText.home.label2}</label>
        <input className="input-field" value={state} readOnly></input>
        <label>{languageText.home.label3}</label>
        <input className="input-field" value={city} readOnly></input>
   </form> 
</div>
);


}
export default Show