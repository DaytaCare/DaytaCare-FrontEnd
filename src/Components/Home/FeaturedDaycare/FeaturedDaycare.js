import './FeaturedDaycare.css'
import {Row, Col, Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap'

function FeaturedDaycare() {

  return(
    <>
    <div className="featuredDaycares">
      <Row xs='auto' md='auto' lg='auto' className="g-4">
          <Col>
            <Card style={{ width: '260px' }}>
              <Card.Header className="card-header">Teddy Bear Child Care Center, Inc.</Card.Header>
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
                    <ListGroupItem>Daycare Type: Center</ListGroupItem>
                    <ListGroupItem>Availability: Yes</ListGroupItem>
                    <ListGroupItem>(319)365-6534</ListGroupItem>
                  </ListGroup>
                <Card.Body>
                  <Button href="#">Website</Button>
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
                    <ListGroupItem>Daycare Type: Center</ListGroupItem>
                    <ListGroupItem>Availability: Yes</ListGroupItem>
                    <ListGroupItem>(319)555-5555</ListGroupItem>
                  </ListGroup>
                <Card.Body>
                  <Button href="#">Website</Button>
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
                    <ListGroupItem>Daycare Type: Center</ListGroupItem>
                    <ListGroupItem>Availability: Yes</ListGroupItem>
                    <ListGroupItem>(319)555-5555</ListGroupItem>
                  </ListGroup>
                <Card.Body>
                  <Button href="#">Website</Button>
                </Card.Body>
            </Card>
          </Col>
      </Row>
    </div>
    </>
  )
}

export default FeaturedDaycare;