import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (url === null) return;
    (async function () {
      try {
        setLoading(true);
        const res = await axios.get(url);
        console.log(res);
        setData(res.data);
      } catch (error) {
        console.log('Error occured', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return { loading, data, error };
}

export default useFetch;