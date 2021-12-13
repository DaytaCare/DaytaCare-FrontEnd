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
                <Card.Text>Hi, I’m Yvette Clapp.
                  I have an MBA in Finance, over 15 years of leadership and management experience. I am an expert change leader specializing in identifying efficiencies, improving employee engagement, standardizing processes, communication, analysis, development, and measurement of key performance metrics.

                  Besides attending Delta V, I am currently volunteering my skills to United Way as a data and research analysis utilizing      Power BI.

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
                <Card.Text>Hello, my name is Jaren Schnoebelen. I have been a student of DeltaV for about a year, and loving it so far. I chose to join DeltaV because I enjoy creating/building new things and I like working with computers. My favorite thing about coding and web development would have to be HTML and CSS. I feel pretty confident in making the web page look nice. I still need to work on my JavaScript skills, because I have the least amount of knowledge in that, but it will come with time. I also love music and sports. My favorite band is Pink Floyd, and my favorite sports team is the Chicago Cubs.
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
