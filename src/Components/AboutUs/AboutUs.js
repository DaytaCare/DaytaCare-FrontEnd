import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import yvette1 from './Images/Yvette1.jpeg';
import jaren from './Images/Jaren.jpeg';
import ian from './Images/Ian.jpeg';
import misti from './Images/Misti.jpeg';
import email from './Images/email.png';
import github from './Images/github.png';
import linkedin from './Images/linkedin.png';
import './AboutUs.css';

class AboutUs extends React.Component {
  render() {

    return (
      <Container className="AboutUs">
        <Row>
          <Col>
            <Card className="aboutUsCards" style={{ width: '260px' }} >
              <Card.Img variant="top" width="300px" height="180px" src={yvette1} alt="yvette" />
              <Card.Body>
                <Card.Title>Yvette</Card.Title>
                <Card.Text style={{ fontSize: '15px' }} className="scroll" >I have an MBA in Finance, over 15 years of leadership and management experience. I am an expert change leader specializing in identifying efficiencies, improving employee engagement, standardizing processes, communication, analysis, development, and measurement of key performance metrics.
                Besides attending DeltaV, I enjoy volunteering my skills as a data and research analysis utilizing Power BI.
                My goal is to continually improve myself and most recently to reinvent myself into a career in website coding where I can utilize my passions to the benefit of the customer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small>
                <img src={email} className="me-2" height="15px" width="15px" alt="email"/>
                  <a href="mailto:ymclapp@yahoo.com">ymclapp@yahoo.com</a>
                  <br/>
                  <img src={github} className="me-2" height="15px" width="15px" alt="github"/>
                  <a href="https://github.com/ymclapp">ymclapp</a>
                  <br/>
                  <img src={linkedin} className="me-2" height="15px" width="15px" alt="linkedin"/>
                  <a href="https://www.linkedin.com/in/yvetteclapp/">yvetteclapp</a>
                  </small>
                  </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="aboutUsCards" style={{ width: '260px' }} >
              <Card.Img variant="top" width="300px" height="180px" src={ian} alt="ian" />
              <Card.Body>
                <Card.Title>Ian</Card.Title>
                <Card.Text style={{ fontSize: '15px' }} className="scroll" >Ian is an aspiring software developer currently going through the DeltaV Code School program. After graduating from the University of Iowa in 2011 he worked in both the real estate and banking industries prior to starting his software development journey. From his past professional experiences he gained valuable skills in sales, customer service, communication, and teamwork.
                After DeltaV, Ian is looking forward to a new career in the tech industry. He is interested in full stack development as it allows him to tap into both his creative side and his problem-solving/analytical side.
                Ian enjoys spending time with his family, especially his wife, Sarah, and his son, Wesley. He also loves food (BBQ), sports (golf), and traveling.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small>
                <img src={email} className="me-2" height="15px" width="15px" alt="email"/>
                  <a href="mailto:ianwhitmor@gmail.com">ianwhitmor@gmail.com</a>
                  <br/>
                  <img src={github} className="me-2" height="15px" width="15px" alt="github"/>
                  <a href="https://github.com/iwhitmor">iwhitmor</a>
                  <br/>
                  <img src={linkedin} className="me-2" height="15px" width="15px" alt="linkedin"/>
                  <a href="https://www.linkedin.com/in/ianwhitmor/">ianwhitmor</a>
                  </small>
                </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="aboutUsCards" style={{ width: '260px' }} >
              <Card.Img variant="top" width="300px" height="180px" src={misti} alt="misti" />
              <Card.Body>
                <Card.Title>Misti</Card.Title>
                <Card.Text style={{ fontSize: '15px' }} className="scroll" >Misti is an aspiring software developer and digital artist. She is passionate about volunteering and animal rescue. Misti lives with her fiance Dakota, their two dogs, two cats, chinchilla and their various foster dogs.
                She came to DeltaV Code School to gain the skills that will allow her to move into a fulfilling career, with a healthier work/life balance and remote work flexibility.
                She wants to be able to apply her analytical skills and determination in a way that creates a positive impact to her community.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              <small>
                <img src={email} className="me-2" height="15px" width="15px" alt="email"/>
                  <a href="mailto:mistidinzy@gmail.com">mistidinzy@gmail.com</a>
                  <br/>
                  <img src={github} className="me-2" height="15px" width="15px" alt="github"/>
                  <a href="https://github.com/mistidinzy">mistidinzy</a>
                  <br/>
                  <img src={linkedin} className="me-2" height="15px" width="15px" alt="linkedin"/>
                  <a href="https://www.linkedin.com/in/mistidinzy/">mistidinzy</a>
                  </small>
                  </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card className="aboutUsCards" style={{ width: '260px' }} >
              <Card.Img variant="top" width="300px" height="180px" src={jaren} alt="jaren" />
              <Card.Body>
                <Card.Title>Jaren</Card.Title>
                <Card.Text style={{ fontSize: '15px' }} className="scroll" >Hello, my name is Jaren Schnoebelen. I am originally from Newhall, IA and moved to Cedar Rapids about 2 years ago with my now fiancé and our 1 year old daughter. I love music and sports. My favorite band is Pink Floyd, and my favorite sports team is the Chicago Cubs. I have been a student at Delta V Code School for about a year, and loving it so far. I chose to join DeltaV because I enjoy creating/building new things and I love working with computers. My favorite thing about coding and web development is being able to work with a team to accomplish a set goal, and develop a working web page that could be used to solve a certain problem. I feel confident in my abilities, and very passionate about the field, and I believe I would make a great candidate for a web development position.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                  <small>
                    <img src={email} className="me-2" height="15px" width="15px" alt="email"/>
                    <a href="mailto:jarenschnoebelen@yahoo.com">jarenschnoebelen@yahoo.com</a>
                    <br/>
                    <img src={github} className="me-2" height="15px" width="15px" alt="github"/>
                    <a href="https://github.com/JSchnoebe">JSchnoebe</a>
                    <br/>
                    <img src={linkedin} className="me-2" height="15px" width="15px" alt="linkedin"/>
                    <a href="https://www.linkedin.com/in/jarenschnoebelen/">jarenschnoebelen</a>
                  </small>
                </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutUs;
