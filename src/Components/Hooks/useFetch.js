import { useEffect } from "react";

export default function useFetch(url) {

  const [loading, setLoading] = useState(true);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [tasks, setTasks] = useState(null);
}