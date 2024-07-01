import React from 'react';

const TvShowCard = ({ show }) => {

    const truncateText = (text, limit) => {
    const cleanText = text.replace(/(<([^>]+)>)/gi, '');
    return cleanText.length > limit ? `${cleanText.slice(0, limit)}...` : cleanText;
  };

  return (
    <div className="card">
      <img src={show.image?.medium} alt={show.name} />
      <h2>{show.name}</h2>
      <p>{truncateText(show.summary, 100)}</p>
      <a href={`/show/${show.id}`}>More Details</a>
    </div>
  );
};

export default TvShowCard;
