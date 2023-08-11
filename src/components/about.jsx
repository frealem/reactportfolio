import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import cvnew from '../images/cvintern.pdf';

export const About = ()=>{
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState('');

  const handleDownload = () => {
    setIsDownloading(true);
    fetch({cvnew})
      .then(response => response.blob())
      .then(blob => {
        const link = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = link;
        a.download = 'cv.pdf';
        a.click();
        setIsDownloading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsDownloading(false);
      });
  };

  return (
    <div className='about1'><div className="space"></div>
    <h1>About Me</h1><div className='about-text-range'>
   <div className='not-range'><h2>Frontend and Backend Developer</h2> <p>
   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. 
    Lorem ipsum dolor sit amet, consectetur adipisci elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
   </p></div>
    
      <div className='download'><h2>Download CV</h2>
      {isDownloading && <p>Downloading...</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={handleDownload} className='button'>Download CV</button></div>
    </div>
    </div>
  );
};
