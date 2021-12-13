import React from 'core-js/library/fn/reflect/es7/metadata'

const daytaCareApi = 'https://daytacare.azurewebsites.net/api/daycares';

export default function Daycares() {
    const { data, isLoading, reload } = useFetch(daytaCareApi);
    const { user } = useAuth();

    await 
}