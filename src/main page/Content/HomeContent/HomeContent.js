import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './HomeContent.css'
import { ENG } from '../../../locales/en/engTran'
import { RO } from '../../../locales/ro/roTran'
import Show from './Show'
import axios from "axios";

function HomeContent() {
    const [formImput, setFormInput] = useState({});

    const [addresa, getAddress] = useState({});
    const [language, setLanguage] = useState(
        sessionStorage.getItem("language") ? sessionStorage.getItem("language") : 1 );
    let languageText = language == 1 ? ENG : RO;
function handleDataFlow(){
    const dataBackend = {
        countryName: formImput.country,
        stateName: formImput.state,
        cityName: formImput.city
    }
    // console.log(dataBackend);
        axios
            .post("https://calm-dawn-95673.herokuapp.com/addresses/correctAddress",dataBackend)
            .then((response) => {
                console.log(response.data);
                getAddress(response.data);
            }); 
            // console.log(addresa.cityName);
            // console.log(addresa.countryName);
            // console.log(addresa.stateName);
}
    return (

        <div className="HomeContent">
        <div className="LeftForm">
            <div className="CenterALignForm">
<form className="FormularLeft" onSubmit={(e)=>{
    e.preventDefault();
    handleDataFlow();
}
}>
    <label>{languageText.home.label1}</label>
    <input className="input-field" placeholder={languageText.home.label1}
      onChange={(e) => {
        const country = e.target.value;
        //console.log(model);
        setFormInput({ ...formImput, ...{ country } });
    }}
     ></input>
    <label>{languageText.home.label2}</label>
    <input className="input-field"placeholder={languageText.home.label2}
       onChange={(e) => {
        const state = e.target.value;
        //console.log(model);
        setFormInput({ ...formImput, ...{ state } });
    }}
    ></input>
    <label>{languageText.home.label3}</label>
    <input className="input-field" placeholder={languageText.home.label3}
     onChange={(e) => {
        const city = e.target.value;
        //console.log(model);
        setFormInput({ ...formImput, ...{ city } });
     }}
    ></input>
    <br/>
    <button className="ButonAdaug" type="submit">{languageText.home.buton}</button>
</form>
</div>
</div >

<Show   countryName={addresa.countryName}  stateName={addresa.stateName} cityName={addresa.cityName}/>    

      

        </div>

    );
    }

export default HomeContent;