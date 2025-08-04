import React, { useEffect } from 'react';

const VideoIntro = () => {
  useEffect(() => {
    // Function to change video source based on screen size
    const changeVideoSource = () => {
      const video = document.getElementById('intro-video');
      const videoSource = document.getElementById('video-source');
      
      if (video && videoSource) {
        if (window.innerWidth > 500) {
          videoSource.src = 'video-laptop.mp4';
        } else {
          videoSource.src = 'video-phone.mp4';
        }
        video.load();
      }
    };

    // Set initial video source
    changeVideoSource();

    // Add resize listener
    window.addEventListener('resize', changeVideoSource);

    return () => {
      window.removeEventListener('resize', changeVideoSource);
    };
  }, []);

  const handlePlayClick = () => {
    const video = document.getElementById('intro-video');
    const button = document.getElementById('play-button');
    
    if (video && button) {
      video.play();
      video.muted = false;
      button.style.display = 'none';
    }
  };

  return (
    <>
      <div className="video">
        <video id="intro-video" muted>
          <source id="video-source" src="video-phone.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button id="play-button" onClick={handlePlayClick}>
          <img src="icon.svg" alt="Play Icon" className="play-icon" />
        </button>
      </div>    
      
      <p style={{margin: 'auto', width: '90%', position: 'relative', bottom: '20px'}}>
        The video above represents two couples that share how they met, this captures the evolving nature of love and its place 
        in changing societal norms, offering a compelling contrast to the depictions in <b>Romeo and Juliet, Chava,</b> and <b>Lust, caution</b>.
        The video highlights how love has transitioned from being shaped by external pressures to becoming a deeply personal, authentic connection,
        reflecting both individual freedom and evolving values. 
        In a world where love adapts, are we closer to true freedom in relationships, or have new norms simply replaced the old ones?
      </p>
    </>
  );
};

export default VideoIntro;
