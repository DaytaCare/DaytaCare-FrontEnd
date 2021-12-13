import React from 'react';
import { Card } from 'react-bootstrap';

function DaycareCards(props) {
  
  const { daycare } = props;

  return (
    <Card style={{ width: '32rem' }}>
      <Card.Body>
        <Card.Title>{daycare.name}</Card.Title>
        <Card.Text>
          <ul>{daycare.streetAddress}, {daycare.city}, {daycare.state}</ul>
          <ul>{daycare.phone}</ul>
        </Card.Text>
        </Card.Body> 
    </Card>
  )
}

export default DaycareCards;