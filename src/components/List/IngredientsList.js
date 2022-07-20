import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { filterArray } from "../../functions.js";
import IngredientItem from "../item/IngredientItem.js";

function IngredientsList({ section, items, filters }) {
  // store filtered ingredients
  const [ingredientsFiltered, setIngredientsFiltered] = useState([]);

  useEffect(() => {
    // when component loads, or when filters change, filter ingredients
    setIngredientsFiltered(filterArray(items, filters));
  }, [filters]);

  return (
    <ul className={'list ingredient-list '+ section} key={section}>
      <h4 className="list-heading">{section}</h4>
      {
        ingredientsFiltered.map((item, index) =>
          <IngredientItem
            key={_.uniqueId('key_')}
            ingredient={item.ingredient}
            amount={item.amount}
          />
        )
      }
    </ul>
  );
}

export default IngredientsList;
