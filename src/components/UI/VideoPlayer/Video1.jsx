import React from 'react';
import YouTube from 'react-youtube';

function Video1() {
  const videoId = 'LH0CeDbmhbI';
  const defaultOpts = {
    height: '529',
    width: '890',
    playerVars: {
      autoplay: 0,
      origin: window.location.origin,
    },
  };
  
  const smallScreenOpts = {
    width: "307",
    height: "207",
    playerVars: {
      autoplay: 0,
      origin: window.location.origin,
    },
  };
  const isSmallScreen = window.innerWidth < 1000;

  return (
    <div className="video-player">
      <YouTube videoId={videoId} opts={isSmallScreen ? smallScreenOpts : defaultOpts} />
    </div>
  );
}

export default Video1;
