import React, { useState, useEffect } from 'react';
import './Typewriter.css';
import ResumeDownloadButton from './ResumeDownloadButton';

const Typewriter = ({ phrases }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typeAndErase = () => {
      setCurrentText(phrases[index]);
      setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    };

    const intervalId = setInterval(typeAndErase, 2000); // Adjust interval as needed

    // Cleanup function to stop the interval on component unmount
    return () => clearInterval(intervalId);
  }, [index, phrases]);

  // Headline text
  const headline = "";

  return (
    <div className="typewriter">
      <div className="welcome-section">
      <div className="welcome-heading">
          <img src="/images/areeba.jpg" alt="Profile" />
          <h1>I am Areeba!</h1>
        </div>
        <div className="underline"></div>
        <p className="headline">{headline}</p> {/* Added headline here */}
      </div>
      <div className="description-section">
        <p className="description-text">{currentText}</p>
        <ResumeDownloadButton />
      </div>
    
    </div>
  );
};

export default Typewriter;
