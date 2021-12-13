import React from "react";
import { Spinner } from 'react-bootstrap';
import useFetch from '../Components/Hooks/useFetch';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/parents/search';

function DaycareSearch() {
  const { dayCares } = useFetch(daytaCareApi);

  if (!dayCares) {
    return (<Spinner animation="grow" variant="danger" />);
  }

return (
  <div>
    {dayCares.map(dayCare => (
      <li key={dayCare.id}>{dayCare.name}</li>
    ))}
  </div>
)
}

export default DaycareSearch;