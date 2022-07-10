import React, { useState, useEffect } from 'react';
// components
import MenuHandle from "./components/MenuHandle.js";
import Outline from "./components/Outline.js";
import IngredientsList from "./components/List/IngredientsList.js";
import Section from "./components/Section.js";
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
  const handleChange = (event) => {
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

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
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
      <header>
        <h1>Eggplant parmesan</h1>
        <div className="options-bar">
          <div className="option">
            <input type="checkbox" id="option1" name="option1" value="sauce" checked={options.sauce} onChange={handleChange} />
            <label htmlFor="option1">Make sauce from scratch</label>
          </div>
          <div className="option">
            <input type="number" id="serving-size" min="2" defaultValue="12" />
            Servings
          </div>
          <div className="option">
            <details className="menu">
              <MenuHandle label="More options" />
              <div className="menu-contents">
                <ul>
                  <li>
                    <input type="checkbox" id="option2" name="option2" value="healthy" defaultChecked={false} />
                    <label htmlFor="option2">Healthier (use less oil)</label>
                  </li>
                  <li>
                    <input type="checkbox" id="option3" name="option3" value="vegan" defaultChecked={false} />
                    <label htmlFor="option3">Vegan</label>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* Outline section */}
      <Outline curStep={currStep} stepTitles={getSectionTitles()} />

      {/* Ingredients section */}
      <section id="ingredients">
        <span data-step="ingredients"></span>
        <details open>
          <summary><h2>Ingredients</h2></summary>
          <div id="ingredients-list-wrapper" className={
            options.sauce ?
            'i' :
            'no-sauce'
          }>
          {/* Ingredients lists */}
          {ingredientsLists.map((list, index) =>
            <IngredientsList
              section={list.section}
              items={list.items}
              key={list.section}
            />
          )}
          </div>
        </details>
      </section>

      {/* Steps sections */}
      {sections.map((section, index) =>
        section.enabled ?
          <Section
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
