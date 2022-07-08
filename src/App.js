import React, { useState, useEffect } from 'react';
import MenuHandle from "./components/MenuHandle.js";
import Outline from "./components/Outline.js";
import IngredientsList from "./components/IngredientsList.js";
import Section from "./components/Section.js";
import './scss/App.scss';
import './scss/Menu.scss';

function App() {

  const [steps, setSteps] = useState([
    'Start tomato sauce',
    'Slice & dry eggplant',
    'Wait (45mins)',
    'Fry eggplant slices',
    'Assemble sauce, eggplant, & cheese in dish',
    'Cook'
  ]);

  {/* track options */}
  const [options, setOptions] = useState({
    'sauce': true,
    'healthier': false,
    'vegan': false,
  });

  {/* handle change of sauce toggle */}
  const handleChange = (event) => {
    let stepsVar = steps;
    if (options.sauce) {
      stepsVar.splice(0, 1);
      setSteps(stepsVar);
    } else {
      stepsVar.unshift('Start tomato sauce');
      setSteps(stepsVar);
    }
    setOptions({...options, "sauce": !options.sauce });
  }

  {/* track which step is active */}
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

  return (
    <div id="App">

      {/* header */}
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

      {/* outline */}
      <Outline curStep={currStep} stepTitles={steps} />
      <section id="ingredients">
        <span data-step="ingredients"></span>
        <details open>
          <summary><h2>Ingredients</h2></summary>
          <div id="ingredients-list-wrapper" className={
            options.sauce ?
            'i' :
            'no-sauce'
          }>
            <IngredientsList />
          </div>
        </details>
      </section>

      {/* steps */}
      {
        steps.map((step, index) =>
          <Section stepNumb={index} stepName={step} key={step} />
        )
      }
    </div>
  );
}

export default App;
