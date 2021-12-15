import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

function DaycareCard(props) {

  const { daycare } = props;
  const history = useHistory();

  function showModal() {
    history.push(`/DaycareSearch/${daycare.daycareId}`)
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