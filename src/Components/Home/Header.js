import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './css/Header.css';

function Header()
{
  const { user, logout } = useAuth();

  return(
    <>
    <div>
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
          </>
        }
      </Navbar>
    </div>
    </>
  )
}

export default Header;
