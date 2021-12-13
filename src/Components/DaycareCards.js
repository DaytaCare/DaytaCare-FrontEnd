import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function DaycareCards(props) {

  const { daycare } = props;


  function showModal() {

  }

  return (
    <Card className='text-center' onClick={showModal} style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>{daycare.name}</Card.Title>
        <Card.Text>{daycare.streetAddress}, {daycare.city}, {daycare.state}</Card.Text>
        <Card.Text>{daycare.phone}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default DaycareCards;