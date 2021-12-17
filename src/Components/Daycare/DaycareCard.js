import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './DaycareCard.css'

function DaycareCard(props) {

  const { daycare } = props;
  const history = useHistory();

  function showModal() {
    history.push(`/DaycareSearch/${daycare.daycareId}`)
  }

  return (
    <Col>
    <Card className='text-center' onClick={showModal} style={{ width: '25rem' }}>
      <Card.Body>
        <Card.Title>{daycare.name}</Card.Title>
        <br />
        <Card.Text>Address: {daycare.streetAddress}, {daycare.city}, {daycare.state}</Card.Text>
        <Card.Text>Monthly price per child: ${daycare.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button onClick={showModal}>View</Button>
      </Card.Footer>
    </Card>
    </Col>
  )
}

export default DaycareCard;