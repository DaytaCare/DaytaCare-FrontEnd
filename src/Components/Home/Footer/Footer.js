import { Container, Navbar } from 'react-bootstrap';
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
      <Container fluid className='bottom-stripe'>&copy;DaytaCare</Container>
    </>
  )
}

export default Footer;
