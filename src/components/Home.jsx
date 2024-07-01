import React, { useEffect, useState } from 'react';
import TvShowCard from './TvShowCard';
import './Home.css';

const Home = () => {
  const [shows, setShows] = useState([]);
  const [visibleShows, setVisibleShows] = useState([]);
  const [page, setPage] = useState(0); 

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(response => response.json())
      .then(data => {
        setShows(data); 
        setVisibleShows(data.slice(0, 12)); 
      });
  }, []);

   const loadMoreShows = () => {
    const nextPage = page + 1;
    const newVisibleShows = shows.slice(0, (nextPage + 1) * 10);
    setVisibleShows(newVisibleShows);
    setPage(nextPage);
  };

  return (
    <div>
      <div className="show-cards">
        {visibleShows.map(show => (
          <TvShowCard key={show.id} show={show} />
        ))}
      </div>
      {visibleShows.length < shows.length && (
        <button onClick={loadMoreShows} className="load-more">
          Show More
        </button>
      )}
    </div>
  );
};

export default Home;
