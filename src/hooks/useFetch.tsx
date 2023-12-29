import { useState, useEffect, useRef, useCallback } from "react";

interface IuseFetch<T> {
  data: T | null;
  loading: boolean;
  error: null | string;
}

export default function useFetch<T>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): IuseFetch<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const options = useRef(init);
  options.current = init;

  const fetchDataFromApi = useCallback(async () => {
    console.debug("Recriou");
    try {
      const response = await fetch(input, { ...options.current });

      if (response.status !== 200) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const responseJson = (await response.json()) as T;
      setData(responseJson);
    } catch (error) {
      if (error instanceof Error) {
        console.debug("Error: ", error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, [input]);

  useEffect(() => {
    fetchDataFromApi();
  }, [fetchDataFromApi]);

  return { data, loading, error };
}
