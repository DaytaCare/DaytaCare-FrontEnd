import { useEffect, useMemo, useState } from "react";
import useAuth from "./useAuth";

export default function useFetch(url, params, skipInitialFetch) {

  const [loading, setLoading] = useState(true);

  const [shouldFetch, setShouldFetch] = useState(!skipInitialFetch);
  const [data, setData] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!shouldFetch) return;

    async function fetchData() {

      try {
        let fullUrl = new URL(url)
        fullUrl.search = new URLSearchParams(params)

        let response = await fetch(fullUrl, {
          headers: {
            'Authorization': user ? `Bearer ${user.token}` : null
          }
        });

        let body = await response.json();

        setData(body);
        setLoading(false);
      }

      catch (e) { console.error(e); }
    };

    setShouldFetch(false);
    fetchData();

  }, [url, user, shouldFetch, params])

  return useMemo(() => ({
    data,

    isLoading: loading,
    setData,

    reload: () => setShouldFetch(true),
  }), [data, loading]);
}