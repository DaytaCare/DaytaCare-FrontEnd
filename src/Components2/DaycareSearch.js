import React from "react";
import { Spinner } from 'react-bootstrap';
import useFetch from './Hooks/useFetch';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/parents/search';

function DaycareSearch() {
  const { daycares } = useFetch(daytaCareApi);

  if (!daycares) {
    return (<Spinner animation="grow" variant="danger" />);
  }

return (
  <>
    {daycares.map(daycare => (
      <li key={daycare.id}>{daycare.name}</li>
    ))}
  </>
)
}

export default DaycareSearch;