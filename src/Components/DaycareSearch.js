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
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCity">
          <Form.Label column sm={2}>City</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="City" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalState">
          <Form.Label column sm={2}>State</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="State" />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>Availability Y/N</Form.Label>
            <Col sm={10}>
              <Form.Check
                type="checkbox"
                name="formHorizontalCheckBox"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label as="legend" column sm={2}>Amenities</Form.Label>
            <Col sm={10}>
              <Form.Check
                type="checkbox"
                label="Parking"
                name="formHorizontalCheckBox"
              />
              <Form.Check
                type="checkbox"
                label="Indoor Playground"
                name="formHorizontalCheckBox"
              />
              <Form.Check
                type="checkbox"
                label="Pay Scaling"
                name="formHorizontalCheckBox"
              />
              <Form.Check
                type="checkbox"
                label="Shuttle Transportation"
                name="formHorizontalCheckBox"
              />
              <Form.Check
                type="checkbox"
                label="Security"
                name="formHorizontalCheckBox"
              />
              <Form.Check
                type="checkbox"
                label="Wheelchair Accessible"
                name="formHorizontalCheckBox"
              />
              <Form.Check
                type="checkbox"
                label="Education"
                name="formHorizontalCheckBox"
              />
              <Form.Check
                type="checkbox"
                label="Meal Plan"
                name="formHorizontalCheckBox"
              />
            </Col>
          </Form.Group>
        </fieldset>
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