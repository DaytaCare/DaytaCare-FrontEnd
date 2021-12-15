import useFetch from '../Hooks/useFetch';
import useAuth from '../Hooks/useAuth';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import DaycareAdd from '../Daycare/DaycareAdd';
import { useState } from 'react';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/daycares';

export default function ShowMyDaycares() {

  var { data: daycares } = useFetch(daytaCareApi);
  console.log("daycares", daycares)

  const [showAddForm, setShowAddForm] = useState(false);
  const { reload, isLoading } = useFetch(daytaCareApi);
  const { user } = useAuth();


  const handleClose = () => setShowAddForm(false);


  function handleShowAddForm(event) {
    event.preventDefault();

    setShowAddForm(true);
  }

  async function handleDeleteDaycare(daycare) {
    if (!user) {
      console.warn("Anonymous should not be allowed to delete!");
      return;
    }

    await fetch(`${daytaCareApi}/${daycare.daycareId}`, {
      method: 'delete',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })
    reload();
  }
  if (isLoading) {
    return (<h2>Loading...</h2>)
  }


  return (
    <>
      <Modal show={showAddForm} onHide={handleClose}>
        <Modal.Header closeButton />
        <DaycareAdd onSave={handleClose} />
      </Modal>
      <h1>Your Daycares</h1>
      <Button onClick={handleShowAddForm}>Add a Daycare</Button>
      {daycares ? daycares.map(
        (daycare) => (
          <Col>
            <Card style={{ width: '300px' }} >
              <Card.Body>
                <Card.Title>{daycare.name}</Card.Title>
                <Card.Text>Type: {daycare.daycareType}</Card.Text>
                <Card.Text>{daycare.streetAddress}, {daycare.city}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => handleDeleteDaycare(daycare)}>Delete</Button>
              </Card.Footer>
            </Card>
          </Col>
        )
      ) : 'Loading...'}
    </>
  );
}
