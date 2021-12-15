import './FeaturedDaycare.css'
import { Container, Card, Button, ListGroup, ListGroupItem, CardGroup } from 'react-bootstrap'

function FeaturedDaycare() {
  return (
    <>
      <Container as='div' className="featuredDaycares">
        <CardGroup>
          <Card className="card">
            <Card.Header className="card-header">Featured Daycare</Card.Header>
            <Card.Body>
              <Card.Text>Description</Card.Text>
              <Card.Text>Location</Card.Text>
              <Card.Text>Contact Info</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Daycare Type: Center</ListGroupItem>
              <ListGroupItem>Indoor Playground</ListGroupItem>
              <ListGroupItem>Availability: Yes</ListGroupItem>
            </ListGroup>
            <Card.Footer>
              <Button href="#">Website</Button>
            </Card.Footer>
          </Card>
          <Card className="card">
            <Card.Header className="card-header">Alice's Rainbow Child Care Center</Card.Header>
            <Card.Body>
              <Card.Text>Description</Card.Text>
              <Card.Text>Location</Card.Text>
              <Card.Text>Contact Info</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Daycare Type: Center</ListGroupItem>
              <ListGroupItem>Indoor Playground</ListGroupItem>
              <ListGroupItem>Availability: Yes</ListGroupItem>
            </ListGroup>
            <Card.Footer>
              <Button href="https://www.arainbowcc.com/">Website</Button>
            </Card.Footer>
          </Card>

          <Card className="card">
            <Card.Header className="card-header">Featured Daycare</Card.Header>
            <Card.Body>
              <Card.Text>Description</Card.Text>
              <Card.Text>Location</Card.Text>
              <Card.Text>Contact Info</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Daycare Type: Center</ListGroupItem>
              <ListGroupItem>Indoor Playground</ListGroupItem>
              <ListGroupItem>Availability: Yes</ListGroupItem>
            </ListGroup>
            <Card.Footer>
              <Button href="#" className="button">Website</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </>
  )
}

export default FeaturedDaycare;