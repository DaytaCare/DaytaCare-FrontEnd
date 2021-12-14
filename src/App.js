import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Home/Header';
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs.js';
import DaycareSearch from './Components/DaycareSearch';
import Footer from './Components/Home/Footer';
import Login from './Components/Auth/Login';

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
          <Route exact path="/DaycareSearch">
            <DaycareSearch />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }

export default App;
