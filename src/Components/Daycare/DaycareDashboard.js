import useFetch from '../Hooks/useFetch';
import { Card, Col, Button, Modal} from 'react-bootstrap';
import DaycareAdd from '../Daycare/DaycareAdd';
import { useState } from 'react';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/daycares';

export default function ShowMyDaycares() {

  var { data: daycares } = useFetch(daytaCareApi);
  console.log("daycares", daycares)

  const [showAddForm, setShowAddForm] = useState(false);


  const handleClose = () => setShowAddForm(false);
  

  function handleShowAddForm(event){
    event.preventDefault();

    setShowAddForm(true);
  }


  return (
    <>
    <Button onClick={handleShowAddForm}>Add a Daycare</Button>
    <Modal show={showAddForm} onHide={handleClose}>
    <Modal.Header closeButton />
      <DaycareAdd />
      </Modal>
    <h1>Your Daycares</h1>
    {daycares ? daycares.map(
      (daycare) => (
        <Col>
        <Card style={{ width: '300px' }} >
        <Card.Body>
        <Card.Title>{daycare.name}</Card.Title>
        <Card.Text>Type: {daycare.daycareType}</Card.Text>
        <Card.Text>{daycare.streetAddress}, {daycare.city}</Card.Text>
        </Card.Body>
        </Card>
        </Col>
          )
    ) : 'Loading...'}
    </>
  );
}
