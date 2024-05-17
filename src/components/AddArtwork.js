// AddArtwork.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddArtwork() {
  // Form to add new artworks
  const [artName, setArtName] = useState('');
  const [artist, setArtist] = useState('');
  const [artDetail, setArtDetail] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission to add new artwork
    // After adding artwork, redirect to home page
    navigate('/');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  return (
    <div>
      <h2>Add Artwork Page</h2>
      {/* Add artwork form */}
      <form className="form-container" onSubmit={handleSubmit}>
        {/* Input fields for artwork details */}
        <label>
          Art Name:
          <input type="text" value={artName} onChange={(e) => setArtName(e.target.value)} />
        </label>
        <br />
        <label>
          Artist:
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </label>
        <br />
        <label>
          Art Detail:
          <input type="text" value={artDetail} onChange={(e) => setArtDetail(e.target.value)} />
        </label>
        <br />
        {/* Input field for image upload */}
        <label>
          Upload Image:
          <input type="file" onChange={handleFileChange} />
        </label>
        <br />
        <button type="submit">Add Artwork</button>
      </form>
    </div>
  );
}

export default AddArtwork;
