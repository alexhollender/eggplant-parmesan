import React, { useState, useEffect } from 'react';
import '../scss/StickyHeader.scss';
import arrowRight from '../media/icons/arrow-right.svg';

function StickyHeader({ curStep, stepTitles }) {

  // track sticky header position
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    let target = document.querySelector('#recipe-outline-header');
    let options = { threshold: 0 }
    function handleIntersect(entry) {
      if (entry[0].isIntersecting) {
        setFixed(false);
      } else {
        setFixed(true);
      }
    }

    let observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(target);
  });

  function toTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      {fixed ?
        <div id="sticky-header-placeholder"></div> :
        null
      }

      <header id="sticky-header" className={fixed ? 'fixed' : 'i'}>
          <nav>
            {fixed ?
              <a href="#top" id="top-link">[Top]</a> :
              null
            }
            {stepTitles.map((title, index) =>
              <div key={'nav-item'+index}>
              <a
                href={`#`+index}
                className={curStep == index ? 'active' : 'i'}
                >
                {title}
              </a>

              {/* add an arrow after each item */}
              {/* except for the last one */}
              {
                index < stepTitles.length-1 ?
                <img src={arrowRight} className="arrow-right" /> :
                null
              }
            </div>
            )}
        </nav>
      </header>
    </>
  );
}

export default StickyHeader;
