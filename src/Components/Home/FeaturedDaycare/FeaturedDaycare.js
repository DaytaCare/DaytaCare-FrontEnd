import './FeaturedDaycare.css'
import {Card, Button, ListGroup, ListGroupItem, CardGroup} from 'react-bootstrap'

function FeaturedDaycare() {

  return(
    <>
    <div className="featuredDaycares">
      <CardGroup>
        <Card>
          <Card.Header className="card-header1"></Card.Header>
            <Card.Body>
              <Card.Text>
                <p>Daycare Description</p>
                <ul className="amenities">
                  <li>Amenity</li>
                  <li>Amenity</li>
                  <li>Amenity</li>
                </ul>
              </Card.Text>
            </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Daycare Type: Center</ListGroupItem>
                <ListGroupItem>Availability: Yes</ListGroupItem>
                <ListGroupItem>555-5555</ListGroupItem>
              </ListGroup>
            <Card.Body>
              <Button href="#">Website</Button>
            </Card.Body>
        </Card>

            <Card>
              <Card.Header className="card-header2">Alice's Rainbow Child Care Center</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>Daycare Description</p>
                    <ul className="amenities">
                      <li>Amenity</li>
                      <li>Amenity</li>
                      <li>Amenity</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Daycare Type: Center</ListGroupItem>
                    <ListGroupItem>Availability: Yes</ListGroupItem>
                    <ListGroupItem>(319)354-1466</ListGroupItem>
                  </ListGroup>
                <Card.Body>
                  <Button href="https://www.arainbowcc.com/">Website</Button>
                </Card.Body>
            </Card>

            <Card>
              <Card.Header className="card-header3">KidsPoint Downtown Learning Center & Preschool</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <p>Daycare Description</p>
                    <ul className="amenities">
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
                  <Button href="#" className="button">Website</Button>
                </Card.Body>
            </Card>
            </CardGroup>
    </div>
    </>
  )
}

export default FeaturedDaycare;