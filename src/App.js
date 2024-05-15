import './App.css';
import React, { useState } from 'react';

function App() {
  /* the variables we need */
  const [artName, setArtName] = useState('');
  const [artist, setArtist] = useState('');
  const [artDetail, setArtDetail] = useState('');
  const [artList, setArtList] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  /* submitting new artworks handler */  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newArt = {
      artName: artName,
      artist: artist,
      artDetail: artDetail,
      imageFile: imageFile
    };

    /* updates art list */
    setArtList([...artList, newArt]);

    /* resets the form fields for when submitting new artworks */
    setArtName('');
    setArtist('');
    setArtDetail('');
    setImageFile(null);
  };

  /* handle file input change */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  /* handle image click to show or hide details */
  const handleImageClick = (index) => {
    // If the selected image index is already set to the current index, reset it to null to hide the details
    setSelectedImageIndex(selectedImageIndex === index ? null : index);
  };

  return (
    <div>
      
      <h1>Welcome to the Art Gallery</h1>
      


      
      {/* Display the artworks */}
      <div className="artwork-container">
        {artList.map((art, index) => (
          <div key={index} className="artwork-item">
            {/* Clickable image to show or hide details */}
            <img
              src={URL.createObjectURL(art.imageFile)}
              alt="Artwork"
              onClick={() => handleImageClick(index)}
            />
            {/* Display details only if the current image index matches the selected image index */}
            {selectedImageIndex === index && (
              <div className="artwork-details">
                <h2>Image Details</h2>
                <p>Art Piece: {art.artName}</p>
                <p>Artist: {art.artist}</p>
                <p>Detail: {art.artDetail}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="container">
  
        {/* Form for adding new artwork */}
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
      
      
    </div>
  );
}

export default App;
