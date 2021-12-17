import { Navbar } from 'react-bootstrap';
import './Footer.css';


function Footer() {
  return (
    <>
        {/* <hr className="bottom-stripe"/> */}

      <Navbar className='footer'>
          <Navbar.Brand href="/">
          <img
            alt="DaytaCare Logo"
            src="/DaytaCare2.png"
            width="50"
            height="50"
          />
            {' '}
            &copy;DaytaCare {new Date().getFullYear()}
          </Navbar.Brand>
      </Navbar>
    </>
  )
}

export default Footer;
