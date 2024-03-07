import { useState } from 'react';

export default function useFetching(callback) {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = async () => {
    try {
      setLoading(true);
      await callback();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return [fetch, isLoading, error];
}
