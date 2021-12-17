import './FeaturedDaycare.css'
import { Container, Card, Button, CardGroup } from 'react-bootstrap'

function FeaturedDaycare() {
  return (
    <>
      <Container as='div' className="featuredDaycares">
        <CardGroup>
        <Card className="card">
            <Card.Img className='featured' variant='top' src="https://bit.ly/3GOmay3"/>
            <Card.Footer>
              <Button href="#">Visit</Button>
            </Card.Footer>
          </Card>
          <Card className="card">
            <Card.Img className='featured rebel' variant='top' src="https://bit.ly/3dWTbM3" />
            <Card.Footer>
              <Button href="#">Visit</Button>
            </Card.Footer>
          </Card>
          <Card className="card">
            <Card.Img className='featured' variant='top' src="https://bit.ly/3yyFcp4" />
            <Card.Footer>
              <Button href="#">Visit</Button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </>
  )
}

export default FeaturedDaycare;