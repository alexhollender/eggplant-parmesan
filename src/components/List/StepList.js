import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { filterArray } from "../../functions.js";
import StepItem from "../item/StepItem.js";

function StepList({ steps, filters, index }) {
  // store filtered steps
  const [stepsFiltered, setStepsFiltered] = useState([]);

  useEffect(() => {
    // when component loads, or when filters change, filter ingredients
    setStepsFiltered(filterArray(steps, filters));
  }, [filters]);

  return (
    <ul className="list step-list">
    {
      stepsFiltered.map((step, index) =>
        <StepItem
          key={_.uniqueId('key_')}
          step={step}
        />
      )
    }
    </ul>
  )
}

export default StepList;
