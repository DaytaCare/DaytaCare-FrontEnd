import React from 'react';
import { Card, Container } from 'react-bootstrap';

function DaycareCards(props) {

  const { daycare } = props;

  return (
    <Container>
    <Card className='text-center' style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>{daycare.name}</Card.Title>
        <Card.Text>{daycare.streetAddress}, {daycare.city}, {daycare.state}</Card.Text>
        <Card.Text>{daycare.phone}</Card.Text>
      </Card.Body>
    </Card>
    </Container>
  )
}

export default DaycareCards;