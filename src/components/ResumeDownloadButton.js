import React from 'react';

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1kgJQ290i0OQBVs0_0N24Xocv6nzBl4x5/view?usp=drive_link', '_blank');
  };

  return (
    <button onClick={handleDownload}>Download Resume</button>
  );
};

export default ResumeDownloadButton;
