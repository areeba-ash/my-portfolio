import React from 'react';

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/18GjZgWnsmC2ieqp65ig6-MxwzR0Jes7Q/view?usp=sharing.pdf', '_blank');
  };

  return (
    <button onClick={handleDownload}>Download Resume</button>
  );
};

export default ResumeDownloadButton;
