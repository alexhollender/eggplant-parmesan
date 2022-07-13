import React, { useState, useRef, useEffect } from 'react';
import MenuHandle from "../MenuHandle.js";
import Video from "../Video.js";
import '../../scss/ItemMenu.scss';
import more from '../../media/icons/more.svg';

function ItemMenu({ menuInfo, menuType }) {

  const [videoIsPlaying, setVideoIsPlaying] = useState(false);
  // create a ref so that the state can be accessed
  // within useEffect (because the component doesn't)
  const videoIsPlayingRef = useRef();
  videoIsPlayingRef.current = videoIsPlaying;

  let allVideos = [];

  // function called by <Video /> component
  // when a video starts playing
  function ifVideoStarts() {
    setVideoIsPlaying(true);
    console.log('video started');
  }

  function pauseVideos() {
    if (videoIsPlayingRef) {
      allVideos.forEach(video => video.pause());
      console.log('pauseVideos ran');
    }
  }

  useEffect(() => {
    console.log('videos are ' + videoIsPlaying);
    // get all videos (for the purpose of pausing them)
    allVideos = document.querySelectorAll('video');

    // when clicking the body...
    document.addEventListener('click', function(e) {
      const openMenus = document.querySelectorAll('.menu[open]');
      // if there are open menus, close them
      if (openMenus.length) {
        openMenus.forEach(menu => menu.removeAttribute("open"));
        // pause all videos
        // ⚠️ I don't understand why this doesn't work
        // without the ref
        pauseVideos();
      }
    });

    // except if clicking within a menu
    const allMenus = document.querySelectorAll('.menu-contents');
    function stopProp(e) { e.stopPropagation(); }
    for (const menu of allMenus) {
      menu.addEventListener('click', stopProp);
    }
  });

  // without this function the menus don't close
  // if you click on their handle a second time
  function handleClick(e) {
    if (e.currentTarget.parentElement.hasAttribute('open')) {
      e.stopPropagation();
      // pause all videos
      pauseVideos();
    }
  }

  return (
    <details className="menu">
      <MenuHandle type={"icon"} label={more} handleClick={handleClick} />
      <div className={"menu-contents " + menuType}>
        { menuType === 'ingredients-menu' ?
          <ul>
            <li>View picture</li>
            <li>Substitute</li>
            <li>More information</li>
          </ul> :
          <Video title={menuInfo.video.title} webm={menuInfo.video.webM} mp4={menuInfo.video.mp4} videoStart={ifVideoStarts} />
        }
      </div>
    </details>
  );
}

export default ItemMenu;
