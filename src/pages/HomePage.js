// src/pages/Home.js
import React from 'react';
import Typewriter from '../components/Typewriter';


const HomePage = () => {
  const phrases = ["A web developer", "A designer", "passionate about coding"];

  return (
    <div className="home-container" style= {{ backgroundImage: 'url("https://img.freepik.com/free-photo/solid-painted-concrete-wall-textured-backdrop_53876-110679.jpg")' }}>
   
  
     
      <Typewriter phrases={phrases} />

      
    </div>
  );
};

export default HomePage;

