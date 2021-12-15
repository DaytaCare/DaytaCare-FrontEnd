import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Home/Header/Header.js';
import Home from './Components/Home/Home.js'
import AboutUs from './Components/AboutUs/AboutUs.js';
import DaycareSearch from './Components/DaycareSearch';
import Footer from './Components/Home/Footer/Footer.js';
import Login from './Components/Auth/Login';
import DaycareAdd from './Components/Daycare/DaycareAdd';

function App() {

    return (
      <>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/AboutUs">
            <AboutUs />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/DaycareSearch">
            <DaycareSearch />
          </Route>
          <Route path="/DaycareDashboard">
            <DaycareAdd />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }

export default App;
