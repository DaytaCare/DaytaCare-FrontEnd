import React from "react";
import { Spinner } from 'react-bootstrap';
import useFetch from '../Components/Hooks/useFetch';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/parents/search';

function DaycareSearch() {
  const { daycares, setDaycares } = useFetch(daytaCareApi);

  if (!daytaCareApi) {
    return (<Spinner animation="grow" variant="danger" />);
  }

  const allDaycares = [
    ...daycares,
  ];

  setDaycares(daycares);

  fetch(`${daytaCareApi}`, {
    method: 'get'
  })
}

return (
  <div>
    {daytaCareApi.map(daycare => (
      <li key={daycare.id}>{daycare.name}</li>
    ))}
  </div>
)
}

export default DaycareSearch;