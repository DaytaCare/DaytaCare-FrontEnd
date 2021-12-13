import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

class AboutUs extends React.Component {
  render() {

    return (
      <Container className="AboutUs">
        <Row>
          <Col>
            <Card style={{ width: '300px' }} >
              {/* <Card.Img variant="top" src={yvette} alt="yvette" /> */}
              <Card.Body>
                <Card.Title>Yvette</Card.Title>
                <Card.Text>I have an MBA in Finance, over 15 years of leadership and management experience. I am an expert change leader specializing in identifying efficiencies, improving employee engagement, standardizing processes, communication, analysis, development, and measurement of key performance metrics.
                Besides attending Delta V, I enjoy volunteering my skills as a data and research analysis utilizing Power BI.
                My goal is to continually improve myself and most recently to reinvent myself into a career in website coding where I can utilize my passions to the benefit of the customer.
                </Card.Text>
                <Card.Link href="https://www.yahoo.com/ymclapp">My Email</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '300px' }} >
              {/* <Card.Img variant="top" width="300px" src={jaren} alt="jaren" /> */}
              <Card.Body>
                <Card.Title>Jaren</Card.Title>
                <Card.Text>Hello, my name is Jaren Schnoebelen. I am originally from Newhall, IA and moved to Cedar Rapids about 2 years ago with my now fiancé and our 1 year old daughter. I love music and sports. My favorite band is Pink Floyd, and my favorite sports team is the Chicago Cubs. I have been a student at Delta V Code School for about a year, and loving it so far. I chose to join Delta V because I enjoy creating/building new things and I love working with computers. My favorite thing about coding and web development is being able to work with a team to accomplish a set goal, and develop a working web page that could be used to solve a certain problem. I feel confident in my abilities, and very passionate about the field, and I believe I would make a great candidate for a web development position.
                </Card.Text>
                <Card.Link href="https://www.yahoo.com/ymclapp">My Email</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutUs;
