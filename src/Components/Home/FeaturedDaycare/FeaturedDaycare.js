import './FeaturedDaycare.css'
import { Container, Card, CardGroup, Button } from 'react-bootstrap'

function FeaturedDaycare() {
  return (
    <>
      <Container as='div' className="featuredDaycares">
        <CardGroup>
        <Card className="card">
          <Card.Header>
          Good Shepherd Center
          </Card.Header>
            <Card.Img className='featured' variant='top' src="https://bit.ly/3GOmay3"/>
            <Card.Body>
              <Card.Text>
                Iowa City, IA<br/>Monthly Price: $975
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button href="http://www.gsckids.com/">Visit</Button>
            </Card.Footer>
          </Card>
          <Card className="card">
          <Card.Header>
          Apple Kids
          </Card.Header>
            <Card.Img className='featured' variant='top' src="https://bit.ly/3dWTbM3" />
            <Card.Body>
              <Card.Text>
                Marion, IA<br/>Monthly Price: $950
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button href="http://www.applekidsmarion.com/">Visit</Button>
            </Card.Footer>
          </Card>
          <Card className="card">
          <Card.Header>
          KidsPoint C Street
          </Card.Header>
            <Card.Img className='featured' variant='top' src="https://bit.ly/3yyFcp4" />
            <Card.Body>
              <Card.Text>
              Cedar Rapids, IA<br/>Monthly Price: $940
              </Card.Text>     
            </Card.Body>
            <Card.Footer>
              <Button href="https://www.kidspointchildcare.org/">Visit</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </>
  )
}

export default FeaturedDaycare;