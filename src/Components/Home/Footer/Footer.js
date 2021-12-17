import { Navbar } from 'react-bootstrap';
import './Footer.css';


function Footer() {
  return (
    <>
      <Navbar fixed="bottom" >
          <Navbar.Brand href="/">
          <img
            alt="DaytaCare Logo"
            src="/DaytaCare2.png"
            width="50"
            height="50"
          />
            {' '}
            &copy; DaytaCare
          </Navbar.Brand>
      </Navbar>

      <hr className="bottom-stripe"/>
    </>
  )
}

export default Footer;
