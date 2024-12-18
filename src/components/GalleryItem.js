import React from 'react';
import { Button } from 'react-bootstrap';

const GalleryItem = ({ art, onShowDetails }) => {
  return (
    <div className="d-flex gallery-item-container mb-5">
      {/* Art Frame */}
      <div className="art-frame me-3">
        <img src={art.imageUrl} alt={art.title} loading="lazy"/>
      </div>
      
      {/* Plaque */}
      <div className="art-plaque d-flex flex-column justify-content-center">
        <h5>{art.title}</h5>
        <p><em>{art.artist}</em> ({art.year})</p>
        <Button variant="outline-dark" size="sm" onClick={() => onShowDetails(art)}>View Details</Button>
      </div>
    </div>
  );
};

export default GalleryItem;
