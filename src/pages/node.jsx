// src/pages/Theme.js
import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/fetchData';
import { axiosData } from '../api/axiosData';

function Theme() {
  const [fetchResults, setFetchResults] = useState([]);
  const [axiosResults, setAxiosResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const fetchResponse = await fetchData();
        setFetchResults(fetchResponse);

        const axiosResponse = await axiosData();
        setAxiosResults(axiosResponse);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Theme Data</h2>
      <h3>Fetch Results:</h3>
      <ul>
  {fetchResults && fetchResults.map((item) => (
    <li key={item.API}><img src={item.url} alt="image from api" height={100} width={100}/></li>
  ))}
</ul>
      <h3>Axios Results:</h3>
      <ul>
        {axiosResults.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Theme;
