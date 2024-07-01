import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  if (!show) return <div>Loading...</div>;

  return (
    <div className="show-details">
      <h1>{show.name}</h1>
      <img src={show.image?.original} alt={show.name} />
      <p>{show.summary}</p>
      <p><strong>Genre:</strong> {show.genres.join(', ')}</p>
      <p><strong>Language:</strong> {show.language}</p>
      <p><strong>Premiered:</strong> {show.premiered}</p>
      <p><strong>Rating:</strong> {show.rating.average}</p>
    </div>
  );
};

export default ShowDetails;
