import {Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap'

function FeaturedDaycares() {
  return(
    <>
    <div>
      {/* <h1>Featured Daycares</h1> */}

      <div><h5>About the Site</h5>
      </div>
      <Row xs={1} md='auto' className="g-4">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Header>Featured</Card.Header>
              <Card.Img variant="top" src="https://via.placeholder.com/250x250" />
                <Card.Body>
                  <Card.Title>Daycare Name</Card.Title>
                  <Card.Text>
                    <p>Daycare Description</p>
                    <ul>
                      <li>Amenity</li>
                      <li>Amenity</li>
                      <li>Amenity</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Daycare Type</ListGroupItem>
                    <ListGroupItem>$$ (Price Range)</ListGroupItem>
                    <ListGroupItem>Availability?</ListGroupItem>
                  </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Website</Card.Link>
                  <Card.Link href="#">Contact</Card.Link>
                  {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </>
  )
}

export default FeaturedDaycares;