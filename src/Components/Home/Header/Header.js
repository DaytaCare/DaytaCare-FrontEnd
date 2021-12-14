import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

function Header() {
  const { user, logout } = useAuth();

  return (
    <>
      <Navbar bg="light" variant="light" className="navbar">
        <Navbar.Brand href="#" className="navbar-brand">
          <img
            alt=""
            src="/DaytaCare.png"
            width="70"
            height="70"
          />
          {' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" className="navbar-link" >About Us</Nav.Link>
            <Nav.Link as={Link} to="/DaycareSearch" className="navbar-link" >Find a Daycare</Nav.Link>
            <Nav.Link as={Link} to="/DaycareDashboard">Daycare Dashboard</Nav.Link>
          </Nav>

          <NavDropdown title="Log In" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>

          {!user && <Nav.Link as={Link} to='/Login' className="login-link" >Login</Nav.Link>}
          {user &&
            <>
              Welcome back, {user.username}
              <button onClick={() => logout()}>Log Out</button>
            </>
          }

        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header;
