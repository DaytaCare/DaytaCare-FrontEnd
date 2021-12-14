import { useEffect, useMemo, useState } from "react";

export default function useFetch(url, params, skipInitialFetch) {

  const [loading, setLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(!skipInitialFetch);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!shouldFetch) return;

    async function fetchData() {

      try {
        let fullUrl = new URL(url)
        fullUrl.search = new URLSearchParams(params)

        let response = await fetch(fullUrl);
        let body = await response.json();

        setData(body);
        setLoading(false);
      }

      catch (e) { console.error(e); }
    };

    setShouldFetch(false);
    fetchData();
  }, [url, shouldFetch, params])

  return useMemo(() => ({
    data,
   
    isLoading: loading,
    setData,

    reload: () => setShouldFetch(true),
  }), [data, loading]);
}