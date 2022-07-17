import React, { useEffect } from 'react';

function Video({ title, webm, mp4, videoStart, videoPause }) {

  useEffect(() => {
    const allVideos = document.querySelectorAll('video');
    // add event listener...
    for (const video of allVideos) {
      // when video is playing, update state of <ItemMenu /> component
      video.addEventListener('playing', videoStart);
      video.addEventListener('pause', videoPause);
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
