import React from "react";
import { Spinner } from 'react-bootstrap';
import useFetch from '../Components/Hooks/useFetch';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/parents/search';

function DaycareSearch() {
  const { tasks, reload, setTasks } = useFetch(daytaCareApi);

  if (!daytaCareApi) {
    return (<Spinner animation="grow" variant="danger" />);
  }
  

  return (
    <div>
      {daytaCareApi.map(daycare => (
        <ul>
          <li></li>
        </ul>
      ))}
    </div>
  )
}