import { useEffect, useMemo, useState } from "react";

export default function useFetch(url) {

  const [loading, setLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [daycares, setDaycares] = useState(null);
  const [amenities, setAmenities] = useState(null);

  useEffect(() => {
    if (!shouldFetch) return;

    async function fetchData() {

      try {

        let response = await fetch(url);
        let body = await response.json();

        setDaycares(body);
        setAmenities(body);
        setLoading(false);
      }

      catch (e) { console.error(e); }
    };

    setShouldFetch(false);
    fetchData();
  }, [url, shouldFetch])

  return useMemo(() => ({
    daycares,
    amenities,
    isLoading: loading,
    setDaycares,
    setAmenities,
    reload: () => setShouldFetch(true),
  }), [daycares, loading, amenities]);
}