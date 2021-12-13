import React from "react";
import { Spinner } from 'react-bootstrap';
import useFetch from '../Components/Hooks/useFetch';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/parents/search';

function DaycareSearch() {
  const { daycares } = useFetch(daytaCareApi);

  if (!daycares) {
    return (<Spinner animation="grow" variant="danger" />);
  }

return (
  <>
    {daycares.map(daycare => (
      <DaycareCard />
    ))}
  </>
)
}

export default DaycareSearch;