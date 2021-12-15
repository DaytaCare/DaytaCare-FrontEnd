import React from 'react';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useFetch from './Hooks/useFetch';

function DaycareDetailModal() {

  const { id } = useParams();
  const daytaCareApi = `https://daytacare.azurewebsites.net/api/parents/daycare/${id}`;

  const { data: daycareId } = useFetch(daytaCareApi);

  console.log("id:", id);
  console.log("daycare:", daycareId);

  return (
    <Modal show={true}>

    </Modal>
  )
}

export default DaycareDetailModal;