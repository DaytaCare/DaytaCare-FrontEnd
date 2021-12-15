import React from 'react';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DaycareSearch from './DaycareSearch';
import useFetch from './Hooks/useFetch';
import { useState } from 'react';

function DaycareDetailModal() {

  const [show, setShow] = useState(false);
  
  function handleClose() {
    setShow(false)
  };

  const { id } = useParams();
  const daytaCareApi = `https://daytacare.azurewebsites.net/api/parents/daycare/${id}`;

  const { data: daycareId } = useFetch(daytaCareApi);

  console.log("id:", id);
  console.log("daycare:", daycareId);

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Hi</Modal.Title>
      </Modal.Header>

    </Modal>
  )
}

export default DaycareDetailModal;