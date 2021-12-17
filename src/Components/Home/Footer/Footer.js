import { Navbar } from 'react-bootstrap';
import './Footer.css';


function Footer() {
  return (
    <>
        <hr className="bottom-stripe"/>

      <Navbar>
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


    </>
  )
}

export default Footer;
