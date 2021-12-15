import React from 'react';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useFetch from './Hooks/useFetch';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';

function DaycareDetailModal() {

  const { id } = useParams();
  const daytaCareApi = `https://daytacare.azurewebsites.net/api/parents/daycare/${id}`;
  const { data: daycare } = useFetch(daytaCareApi);
  const [show, setShow] = useState(false);
  const history = useHistory();

  console.log("id:", id);
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
      <Modal.Body></Modal.Body>
    </Modal>
  )
}

export default DaycareDetailModal;