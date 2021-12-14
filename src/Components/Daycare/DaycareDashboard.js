import useFetch from '../Hooks/useFetch';
import { Card, Col } from 'react-bootstrap';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/daycares';

export default function ShowMyDaycares() {

  var { data: daycares } = useFetch(daytaCareApi);
  console.log("daycares", daycares)

  return (
    <>
    <h1>Your Daycares</h1>
    {daycares ? daycares.map(
      (daycare) => (
        <Col>
        <Card style={{ width: '300px' }} >
        <Card.Body>
        <Card.Title>{daycare.name}</Card.Title>
        <Card.Text>Type: {daycare.daycareType}</Card.Text>
        </Card.Body>
        </Card>
        </Col>
          )
    ) : 'Loading...'}
    </>
  );
}
