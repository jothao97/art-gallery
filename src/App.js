import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

/* Main Gallery page: displays all art pieces with each artwork's name and artist shown underneath to provide quick insight to collection*/

/* Individual artwork pages: each artwork can be accessed through own dedicated page, providing more detail info about piece, allowing viewers to engage deeply with each artwork*/


function App() {

  const [artName, setArtName] = useState('');
  const [artist, setArtist] = useState('');
  const [artDetail, setArtDetail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const newArt = {
      artName: artName,
      artist: artist,
      artDetail: artDetail
    };
  }


  return (
    <div >
     
    
    </div>
  );
}

export default App;
