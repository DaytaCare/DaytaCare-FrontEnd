import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './TopNav.css';

function TopNav() {
  const { user, logout } = useAuth();
  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand href="/" className="navbar-brand">
          <img
            alt="DaytaCare Logo"
            src="DaytaCare2.png"
            width="80"
            height="80"
          />
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="me-auto">
          <NavItem className="tab1">
            <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
          </NavItem>
          <NavItem className="tab2">
            <Nav.Link as={Link} to="/AboutUs" className="navbar-link">About Us</Nav.Link>
          </NavItem>
          <Nav.Link as={Link} to="/DaycareSearch" className="navbar-link">Find a Daycare</Nav.Link>
          <NavItem className="tab2">
            {user && <Nav.Link as={Link} to="/DaycareDashboard" className="navbar-link">Daycare Dashboard</Nav.Link>}
          </NavItem>
        </Nav>
        <Nav>
          <NavItem>
            {!user && <Nav.Link as={Link} to='/Login' className="navbar-link">Log In</Nav.Link>}
            {user &&
              <div className="welcomeMsg">
                Welcome back, {user.username}!
                <button className="logout" onClick={() => logout()}>Log Out</button>
              </div>
            }
          </NavItem>
          <NavItem>
            {!user && <Nav.Link as={Link} to="/Registration" className="navbar-link">Sign Up!</Nav.Link>}
          </NavItem>
        </Nav>
      </Navbar>
    </>
  )
}
export default TopNav;
