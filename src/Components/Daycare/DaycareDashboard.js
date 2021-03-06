import useFetch from '../Hooks/useFetch';
import useAuth from '../Hooks/useAuth';
import { Card, Col, Button, Modal, Container, Row } from 'react-bootstrap';
import DaycareAdd from '../Daycare/DaycareAdd';
import DaycareEdit from '../Daycare/DaycareEdit';
import { useState } from 'react';
import './DaycareDashboard.css';
import { Redirect } from 'react-router-dom';


const daytaCareApi = 'https://daytacare.azurewebsites.net/api/daycares';

export default function ShowMyDaycares() {

  var { data: daycares, reload, isLoading } = useFetch(daytaCareApi);
  console.log("daycares", daycares)

  const [showAddForm, setShowAddForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentDaycare, setCurrentDaycare] = useState({});
  const { user } = useAuth();

  function handleClose(){
    setShowAddForm(false);
    setIsEditing(false);
    reload();
  }


  function handleShowAddForm(event) {
    event.preventDefault();

    setShowAddForm(true);
  }

  function handleEditClick(daycare) {
    setIsEditing(true);
    setCurrentDaycare({ ...daycare });
  }

  function handleUpdateDaycare() {
    reload();
    setIsEditing(false);
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

  if (!user)
  {
    return <Redirect to="/login" />
  }
  
  if (isLoading) {
    return (<h2>Loading...</h2>)
  }

  return (
    <>
    
      <Modal show={isEditing} onHide={handleClose} backdrop="static">
        <Modal.Body>
        <Modal.Header closeButton />
        <DaycareEdit onSave={handleUpdateDaycare} daycare={currentDaycare} />
        </Modal.Body>
        </Modal>
      <Modal show={showAddForm} onHide={handleClose} backdrop="static">
        <Modal.Body>
        <Modal.Header closeButton />
        <DaycareAdd onSave={handleClose} />
        </Modal.Body>
      </Modal>
      <h3 className="yourDaycares">Your Daycares</h3>
      <Button className="addDaycare" onClick={handleShowAddForm}>Add a Daycare</Button>
      <Container className="myDaycares">
        <Row>
      {daycares ? daycares.map(
        (daycare, index) => (       
          <Col key={index} sm={6} md={4}>
            <Card className="dashboardCard" >
              <Card.Body>
                <Card.Title>{daycare.name}</Card.Title>
                <br />
                <Card.Text>Email: {daycare.email}</Card.Text>
                <Card.Text>{daycare.streetAddress}, {daycare.city}</Card.Text>
                <Card.Text>Monthly price per child: ${daycare.price}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button onClick={() => handleDeleteDaycare(daycare)}>Delete</Button>
                <Button onClick={() => handleEditClick(daycare)}>Edit</Button>
              </Card.Footer>
            </Card>
          </Col>
                
        )
      ) : 'Loading...'}
      </Row>
      </Container>
    </>
  );
}
