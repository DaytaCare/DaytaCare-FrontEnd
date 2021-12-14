import useFetch from '../Hooks/useFetch';

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/daycares';

export default function ShowMyDaycares() {

  var {daycares} = useFetch(daytaCareApi);
  console.log("daycares", daycares)

return ({daycares})
}