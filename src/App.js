import React from 'react'
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './main page/Similar components/MainPage.css'
import MainPage from './main page/MainPage'
import MainContent from './MainPageLanding/compForMain/MainContent'
import axios from "axios"



axios.defaults.baseURL = 'http://localhost:443';


function App() {




  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={MainContent}  />
          <Route path="/home" component={MainPage} />

        </Switch>
      </div>
    </Router>
  );

}



export default App;
