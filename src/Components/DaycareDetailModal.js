import React from 'react';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useFetch from './Hooks/useFetch';
import { useHistory } from 'react-router-dom';

function DaycareDetailModal() {

  const { id } = useParams();
  const daytaCareApi = `https://daytacare.azurewebsites.net/api/parents/daycare/${id}`;
  const { data: daycare } = useFetch(daytaCareApi);
  const history = useHistory();

  console.log("daycare:", daycare);

  function closeModal() {
    history.push("/DaycareSearch")
  }

  if (!daycare) {
    return null
  }

  return (
    <Modal show={true} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{daycare.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Address: {daycare.streetAddress}, {daycare.city}, {daycare.state}</p>
        <p>Phone: {daycare.phone}</p>
        <p>Email: {daycare.email}</p>
        <p>Monthly price per child: ${daycare.price}</p>
        <p>Type of Daycare: {daycare.daycareType}</p>
        <p>Amenities:</p>
        <p>
          {daycare.amenities.map(amenity => (
            <ul key={amenity.amenityId}>
              <li>{amenity.name}</li>
            </ul>
          ))}
        </p>
      </Modal.Body>
    </Modal>
  )
}

export default DaycareDetailModal;