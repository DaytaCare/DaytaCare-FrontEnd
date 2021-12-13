import { useEffect, useMemo, useState } from "react";

export default function useFetch(url) {

  const [loading, setLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [dayCares, setDaycares] = useState(null);

  useEffect(() => {
    if (!shouldFetch) return;



    async function fetchData() {
     
      try{ 
      
      let response = await fetch(url);
      let body = await response.json();

      setDaycares(body);
      setLoading(false);
      }

      catch(e) { console.error(e); }
    };

    setShouldFetch(false);
    fetchData();
  }, [url, shouldFetch])

  return useMemo(() => ({
    dayCares,
    isLoading: loading,
    setDaycares,
    reload: () => setShouldFetch(true),
  }), [dayCares, loading]);
}