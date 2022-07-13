import React, { useState, useEffect } from 'react';
// components
import Header from "./components/Header.js";
import OutlineSection from "./components/section/OutlineSection.js";
import IngredientsSection from "./components/section/IngredientsSection.js";
import StepsSection from "./components/section/StepsSection.js";
// data
import { getIngredients } from "./data/ingredients.js";
import { getSections } from "./data/sections.js";
// stylesheets
import './scss/App.scss';
import './scss/Menu.scss';

function App() {

  const ingredientsLists = getIngredients();
  const sectionsInitial = getSections();

  const [sections, setSections] = useState(sectionsInitial);

  // track options
  const [options, setOptions] = useState({
    'sauce': true,
    'healthier': false,
    'vegan': false,
  });

  // handle change of sauce toggle

  // update options
  const handleChange = () => {
    setOptions({...options, sauce: !options.sauce});

    // update sections array
    setSections(currState =>
      currState.map(section => {
        if (section.section === 'Start tomato sauce') {
          return {...section, enabled: !currState[0].enabled};
        }
        return section;
      }),
    );
  }

  // track which step is active
  const [currStep, setCurrStep] = useState(null);

  useEffect(() => {
    let options = {
      threshold: 0,
      rootMargin: '0px 0px -80% 0px'
    }

    let observer = new IntersectionObserver(handleIntersect, options);

    function handleIntersect(sections) {
      sections.forEach((section) => {
        if (section.isIntersecting) {
          setCurrStep(section.target.dataset.step);
        }
      });
    }

    document.querySelectorAll('section').forEach(section => observer.observe(section));
  });

  function getSectionTitles() {
    const sectionTitles = [];
    sections.forEach(function(section) {
      if (section.enabled) {
        sectionTitles.push(section.section);
      }
    });
    return sectionTitles;
  }

  return (
    <div id="App">

      {/* Header */}
      <Header
        checked={options.sauce}
        handleChange={handleChange}
      />

      {/* Outline section */}
      <OutlineSection
        curStep={currStep}
        stepTitles={getSectionTitles()}
      />

      {/* Ingredients section */}
      <IngredientsSection
        sauce={options.sauce}
        ingredientsLists={ingredientsLists}
      />

      {/* Steps sections */}
      {sections.map((section, index) =>
        section.enabled ?
          <StepsSection
            index={index}
            section={section}
            key={section.section}
          /> :
          null
      )}

    </div>
  );
}

export default App;
