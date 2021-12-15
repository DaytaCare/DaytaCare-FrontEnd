import { Nav, Navbar, NavItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';
import Login from '../../Auth/Login';

function Header() {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand href="#" className="navbar-brand">
          <img
            alt=""
            src="/DaytaCare.png"
            width="100"
            height="100"
          />
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavItem className="tab1">
              <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
            </NavItem>

            <NavItem className="tab2">
              <Nav.Link as={Link} to="/AboutUs" className="navbar-link">About Us</Nav.Link>
            </NavItem>
            <Nav.Link as={Link} to="/DaycareSearch" className="navbar-link">Find a Daycare</Nav.Link>

            <NavItem className="tab2">
              <Nav.Link as={Link} to="/DaycareDashboard" className="navbar-link">Daycare Dashboard</Nav.Link>
            </NavItem>


            <NavDropdown title="Log In" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Login />
              </NavDropdown.Item>
            </NavDropdown>

            {!user && <Nav.Link as={Link} to='/Login' className="login-link" >Login</Nav.Link>}
            {user &&
              <>
                Welcome back, {user.username}
                <button className="logout" onClick={() => logout()}>Log Out</button>
              </>
            }

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header;
