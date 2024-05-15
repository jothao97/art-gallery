import './App.css';
import React, { useState } from 'react';

/* Main Gallery page: displays all art pieces with each artwork's name and artist shown underneath to provide quick insight to collection*/

/* Individual artwork pages: each artwork can be accessed through own dedicated page, providing more detail info about piece, allowing viewers to engage deeply with each artwork*/


function App() {

  /* the variables we need */
  const [artName, setArtName] = useState('');
  const [artist, setArtist] = useState('');
  const [artDetail, setArtDetail] = useState('')
  const [artList, setArtList] = useState('')

  /* submitting new artworks handler */  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newArt = {
      artName: artName,
      artist: artist,
      artDetail: artDetail
    };

    /* updates art list */
    setArtList([...artList, newArt]);

    /* resets the form field for when submitting new artworks */

    setArtName('');
    setArtist('');
    setArtDetail('');
  }


  return (
    <div >
      <h1> Featured Artworks</h1>

      {/* display the artworks */}
      {artList.map((artList, index) =>(
        <div key={index}>
          <p> Art Piece: {artList.artName}</p>
          <p> Artist: {artList.artist}</p>

      ))};
     
    
    </div>
  );
}

export default App;
