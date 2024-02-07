// src/pages/Home.js
import React from 'react';
import Typewriter from '../components/Typewriter';

const HomePage = () => {
  const phrases = ["A web developer", "A designer", "passionate about coding"];

  return (
    <div className="home-container" style= {{ backgroundImage: 'url("https://e0.pxfuel.com/wallpapers/846/344/desktop-wallpaper-portfolio.jpg")' }}>
   
  
     
      <Typewriter phrases={phrases} />
    </div>
  );
};

export default HomePage;

