import React, { useState, useEffect } from 'react';
// components
import Header from "./components/Header.js";
import OutlineSection from "./components/section/OutlineSection.js";
import IngredientsSection from "./components/section/IngredientsSection.js";
import StepsSection from "./components/section/StepsSection.js";
// functions
import { filterArray, getSectionTitles } from "./functions.js";
// data
import { getIngredients } from "./data/ingredients.js";
import { getSections } from "./data/sections.js";
// stylesheets
import './scss/App.scss';
import './scss/Menu.scss';

function App() {
  // filtered copies of ingredients and sections
  const [ingredientsFiltered, setIngredientsFiltered] = useState([]);
  const [sectionsFiltered, setSectionsFiltered] = useState([]);

  // filters
  const [filters, setFilters] = useState({
    'sauceFromScratch': true,
    'lessOil': false,
    'vegan': false,
  });

  useEffect(() => {
    // whenever the filters change
    // filter the ingredients and the sections copies
    const ingredientsInitial = getIngredients();
    setIngredientsFiltered(filterArray(ingredientsInitial, filters));

    const sectionsInitial = getSections();
    setSectionsFiltered(filterArray(sectionsInitial, filters));
  }, [filters]);

  // update filters
  const handleFilterChange = (e) => {
    const filterKey = e.target.name;
    console.log(e.target.name);
    setFilters({...filters, [filterKey]: !filters[filterKey]});
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

  return (
    <div id="App">

      {/* Header */}
      <Header
        filters={filters}
        handleFilterChange={handleFilterChange}
      />

      {/* Outline section */}
      <OutlineSection
        curStep={currStep}
        stepTitles={getSectionTitles(sectionsFiltered)}
      />

      {/* Ingredients section */}
      <IngredientsSection
        ingredientsLists={ingredientsFiltered}
        filters={filters}
      />

      {/* Steps sections */}
      {sectionsFiltered.map((section, index) =>
        <StepsSection
          index={index}
          section={section}
          key={section.sectionTitle}
        />
      )}

    </div>
  );
}

export default App;
