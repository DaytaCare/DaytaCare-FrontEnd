import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import AboutUs from './components/AboutUs/AboutUs.js';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import DaycareSearch from './Components/DaycareSearch';

class App extends React.Component {

  render() {

    return (
      <>
        <Router>
          <Navbar>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            <Nav.Link as={Link} to="/DaycareSearch">Find a Daycare</Nav.Link>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            <Route path="/AboutUs">
            <h1>About Us</h1>
              <AboutUs />
            </Route> 
            <Route exact path="/DaycareSearch">
              <h1>Find a Daycare</h1>
              <DaycareSearch />
            </Route>
          </Switch>
        </Router>

      </>

    );
  }


}

export default App;
