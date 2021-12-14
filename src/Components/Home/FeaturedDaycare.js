import './css/FeaturedDaycare.css'
import {Row, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap'

function FeaturedDaycare() {

  return(
    <>
    <div className="featuredDaycares">
      <Row xs='auto' md='auto' className="g-4">
          <Col>
            <Card style={{ width: '260px' }}>
              <Card.Header className="card-header" style={{ textAlign: 'center' }} >Teddy Bear Child Care Center Inc.</Card.Header>
              <Card.Img variant="top" src="https://via.placeholder.com/250x250" />
                <Card.Body>
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
                </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '260px' }}>
              <Card.Header className="card-header">Alice's Rainbow Child Care Center</Card.Header>
              <Card.Img variant="top" src="https://via.placeholder.com/250x250" />
                <Card.Body>
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
                </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '260px' }}>
              <Card.Header className="card-header">KidsPoint Downtown Learning Center & Preschool</Card.Header>
              <Card.Img variant="top" src="https://via.placeholder.com/250x250" />
                <Card.Body>
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
                </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
    </>
  )
}

export default FeaturedDaycare;