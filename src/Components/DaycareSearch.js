import React, { useState } from 'react';
import { Spinner, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import DaycareDetailModal from './DaycareDetailModal';
import DaycareCard from './DaycareCard';
import useFetch from '../Components/Hooks/useFetch';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/parents/search';
const daytaCareApiAmenities = 'https://daytacare.azurewebsites.net/api/amenity';

function DaycareSearch() {

  const [params, setParams] = useState({});
  const { data: daycares, reload: reloadDaycares } = useFetch(daytaCareApi, params, true);
  const { data: amenities } = useFetch(daytaCareApiAmenities);

  // if (!daycares) {

  //   return (<Spinner animation="grow" variant="danger" />);
  // }

  if (!amenities) {
    return (<Spinner animation="grow" variant="primary" />);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const { city, state, availability, amenityId } = form.elements;
    const formData = {
      city: city.value,
      state: state.value,
    }

    if (availability.checked)
      formData.availability = true;

    let amenityIdValue = 0 | amenityId.value;
    if (amenityIdValue)
      formData.amenityId = amenityIdValue;

    setParams(formData);
    reloadDaycares();

    console.log(formData);

    city.focus();
  }

  return (
    <>
      <Card className="mt-4" style={{ width: '40rem' }}>
        <Card.Body>
          <Card.Title className="mb-4">Search Daycares</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalCity">
              <Form.Label column sm={2}>City</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="City" name="city" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalState">
              <Form.Label column sm={2}>State</Form.Label>
              <Col sm={10}>
                <Form.Control type="text" placeholder="State" name="state" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>Has Availability</Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="checkbox"
                  name="availability"
                  value="true" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>Amenities</Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="All"
                  name="amenityId"
                  value="" />
                {amenities.map(amenity => (
                  <Form.Check key={amenity.id}
                    type="radio"
                    label={amenity.name}
                    name="amenityId"
                    value={amenity.id} />
                ))}
              </Col>
            </Form.Group>
            <Button variant="secondary" type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>

      <Route path="/DaycareSearch/:id">
          <DaycareDetailModal />
      </Route>

      <Row>
        {daycares && daycares.map(daycare => (
          <Col key={daycare.daycareId}>
            <DaycareCard daycare={daycare} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default DaycareSearch;