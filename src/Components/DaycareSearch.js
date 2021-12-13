import React from "react";
import { Spinner, Container, Row, Col } from 'react-bootstrap';
import DaycareCards from './DaycareCards';
import useFetch from '../Components/Hooks/useFetch';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/parents/search';

function DaycareSearch() {
  const { daycares } = useFetch(daytaCareApi);

  if (!daycares) {
    return (<Spinner animation="grow" variant="danger" />);
  }

  return (
    <Container>
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