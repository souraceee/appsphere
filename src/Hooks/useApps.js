import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("/AppData.json")
    .then((response) => setApps(response.data))
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  }, [])

  // * Below code is used to load data with delay
//   useEffect(() => {
//   setLoading(true);
//   setTimeout(() => {  // <-- add delay
//     axios("/AppData.json")
//       .then((response) => setApps(response.data))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, 1000); // 2 seconds delay
// }, []);


  return { apps, loading, error };
};

export default useApps;