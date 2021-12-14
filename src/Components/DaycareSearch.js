import React, { useState } from "react";
import { Spinner, Container, Row, Col, Form } from 'react-bootstrap';
import DaycareCards from './DaycareCards';
import useFetch from '../Components/Hooks/useFetch';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/parents/search';

function DaycareSearch() {
  
  const [params, setParams] = useState({});
  const { daycares } = useFetch(daytaCareApi, params);

  if (!daycares) {
    return (<Spinner animation="grow" variant="danger" />);
  }

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" />
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" />
          
        </Form.Group>
      </Form>
      <Row>
        {daycares.map(daycare => (
          <Col>
            <DaycareCards daycare={daycare} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default DaycareSearch;