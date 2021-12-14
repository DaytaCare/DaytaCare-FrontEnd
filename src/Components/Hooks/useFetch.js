import { useEffect, useMemo, useState } from "react";

export default function useFetch(url) {

  const [loading, setLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!shouldFetch) return;

    async function fetchData() {

      try {

        let response = await fetch(url);
        let body = await response.json();

        setData(body);
        setLoading(false);
      }

      catch (e) { console.error(e); }
    };

    setShouldFetch(false);
    fetchData();
  }, [url, shouldFetch])

  return useMemo(() => ({
    data,
   
    isLoading: loading,
    setData,

    reload: () => setShouldFetch(true),
  }), [data, loading]);
}