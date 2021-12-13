import React from "react";
import { Spinner } from 'react-bootstrap';
import DaycareCards from './DaycareCards';
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
        <DaycareCards daycare={daycare} />
      ))}
    </>
  )
}

export default DaycareSearch;