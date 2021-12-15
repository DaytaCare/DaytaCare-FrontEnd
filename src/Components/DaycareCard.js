import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function DaycareCard(props) {

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

export default DaycareCard;