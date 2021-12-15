import React from 'react';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function DaycareDetailModal() {
  
    let { id } = useParams(); 
    
  
  return (
    <Modal show={true}>
      Test
    </Modal>
  )
}

export default DaycareDetailModal;