import React, { useEffect } from 'react';

function Video({ title, webm, mp4, setVideoIsPlaying }) {

  // sets the state of the <ItemMenu /> component so that it knows
  // whether or not it needs to pause videos when a menu closes
  const videoIsPlaying = () => setVideoIsPlaying(true);
  const videoIsPaused = () => setVideoIsPlaying(false);

  useEffect(() => {
    const allVideos = document.querySelectorAll('video');
    // add event listener...
    for (const video of allVideos) {
      // when video is playing (or paused), update state of <ItemMenu /> component
      video.addEventListener('playing', videoIsPlaying);
      video.addEventListener('pause', videoIsPaused);
    }
  }, []);

  return (
    <div className="video-wrapper">
      <p className="video-title">{title}</p>
      <video controls width="100%" autoPlay={false} muted={false} loop={false}>
        <source src={webm} type="video/webm" />
        <source src={mp4} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  );
}

export default Video;
