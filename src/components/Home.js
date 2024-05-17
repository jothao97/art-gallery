import React from 'react';


function Home({ artList, handleImageClick }) {
  return (
    <div>
      <h2>Home Page</h2>
      {/* Display your featured artworks here */}
      <div className="artwork-container">
        {artList.map((art, index) => (
          <div key={index} className="artwork-item">
            {/* Clickable image to show or hide details */}
            <img
              src={URL.createObjectURL(art.imageFile)}
              alt="Artwork"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
