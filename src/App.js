<<<<<<< HEAD
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {

  render() {

    return (
      <>
        <Router>
          <Navbar>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutUs">About Us</Nav.Link>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <h1>Home</h1>
            </Route>
            {/* <Route path="/aboutUs">
            <h1>About Us</h1>
              <AboutUs />
            </Route> */}
          </Switch>
        </Router>

      </>

    );
  }


}

export default App;
