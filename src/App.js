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
import Home from './Components/Home/Home'
import AboutUs from './Components/AboutUs/AboutUs.js';
import DaycareSearch from './Components/DaycareSearch';
import Footer from './Components/Home/Footer';
import Login from './Components/Auth/Login';
import useAuth from '../src/Components/Hooks/useAuth';
import DaycareAdd from './Components/Daycare/DaycareAdd';



function App() {
  const { user, logout } = useAuth();

    return (
      <>
          <Router>
          <Navbar>
          <Navbar.Brand href="#">DaytaCare</Navbar.Brand>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs">About Us</Nav.Link>
            <Nav.Link as={Link} to="/DaycareSearch">Find a Daycare</Nav.Link>
            {!user && <Nav.Link as={Link} to='/Login'>Login</Nav.Link>}
            {user &&
            <>
            Welcome back, {user.username}
            <button onClick={() => logout()}>Log Out</button>
            <Nav.Link as={Link} to="/DaycareDashboard">Daycare Dashboard</Nav.Link>
            </>
            }
          </Navbar>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/AboutUs">
            <h1>About Us</h1>
              <AboutUs />
            </Route>
            <Route path="/Login">
            <Login />
          </Route>
          <Route path="/DaycareDashboard">
            <DaycareAdd />
          </Route>
            <Route exact path="/DaycareSearch">
              <DaycareSearch />
            </Route>
          </Switch>
          <Footer/>
        </Router>

      </>

    );
  }


export default App;
