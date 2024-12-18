import React from 'react';

function ArtCard({ art, onPlaqueClick }) {
  return (
    <div className="text-center">
      <div className="art-frame">
        {/* Lazy load image with native loading="lazy" attribute */}
        <img src={art.imageUrl} alt={art.title} loading="lazy" />
      </div>
      <div className="art-plaque" onClick={onPlaqueClick}>
        <h5 className="mb-1">{art.title}</h5>
        <p className="mb-0">{art.artist}, {art.year}</p>
      </div>
    </div>
  );
}

export default ArtCard;
