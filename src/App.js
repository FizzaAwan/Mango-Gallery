import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import ParallaxHeader from './components/ParallaxHeader';
import GalleryItem from './components/GalleryItem';
import ArtModal from './components/ArtModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

function App() {
  const [artData, setArtData] = useState([]);
  const [selectedArt, setSelectedArt] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch from mock API (local JSON)
    fetch('/artData.json')
      .then((res) => res.json())
      .then((data) => setArtData(data))
      .catch((err) => console.error('Error fetching art data:', err));
  }, []);

  const handleShowDetails = (art) => {
    setSelectedArt(art);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedArt(null);
  };

  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ParallaxHeader />

              <div className="container py-5" id="gallery">
                <h2 className="mb-4">Gallery</h2>
                {artData.map((art) => (
                  <GalleryItem key={art.id} art={art} onShowDetails={handleShowDetails} />
                ))}
              </div>

              <div className="container pb-5" id="contact">
                <h2>Contact Us</h2>
                <p>For inquiries, please email us at info@reformationartgallery.com.</p>
              </div>

              <ArtModal show={showModal} handleClose={handleCloseModal} art={selectedArt} />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
