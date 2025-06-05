import { useState, useEffect } from 'react';

const useFetchSkips = () => {
  const [skipData, setSkipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
        if (!response.ok) throw new Error('Failed to fetch skips');
        const data = await response.json();
        setSkipData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return { skipData, loading, error };
};

export default useFetchSkips;