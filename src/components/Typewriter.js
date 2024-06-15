
import React, { useState, useEffect } from 'react';
import './Typewriter.css';
import ResumeDownloadButton from './ResumeDownloadButton';


const Typewriter = ({ phrases }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typeAndErase = () => {
      setCurrentText((prevText) => {
        const nextIndex = (index + 1) % phrases.length;
        const newText = phrases[nextIndex];

        setIndex(nextIndex);

        return newText;
      });
    };

    const intervalId = setInterval(typeAndErase, 2000); // Change interval as needed

    // Cleanup function to stop the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [index, phrases]);

  return (
    <div className="typewriter">
      <div className="welcome-section">

        <h1 className="welcome-heading"> </h1>
        I am Areeba!
    
        <div className="underline"></div>
       
      </div>
      <div className="description-section">
        <p className="description-text"> {currentText}</p>
        <ResumeDownloadButton />
      </div>
    </div>
  );

};




export default Typewriter;
