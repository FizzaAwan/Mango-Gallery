import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ArtModal = ({ show, handleClose, art }) => {
  if (!art) return null;

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{art.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={art.imageUrl} alt={art.title} className="img-fluid mb-3" />
        <p><strong>Artist:</strong> {art.artist}</p>
        <p><strong>Year:</strong> {art.year}</p>
        <p>{art.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ArtModal;
