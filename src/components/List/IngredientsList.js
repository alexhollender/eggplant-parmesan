import React, { useState, useEffect } from 'react';
import { filterArray } from "../../functions.js";
import IngredientItem from "../item/IngredientItem.js";

function IngredientsList({ section, items, filters }) {
  const [ingredientsItemsFiltered, setIngredientsItemsFiltered] = useState([]);

  useEffect(() => {
    setIngredientsItemsFiltered(filterArray(items, filters));
  }, [filters]);

  return (
    <ul className={'list ingredient-list '+ section} key={section}>
      <h4 className="list-heading">{section}</h4>
      {
        ingredientsItemsFiltered.map((item, index) =>
          <IngredientItem
            key={item.ingredient+index}
            ingredient={item.ingredient}
            amount={item.amount}
          />
        )
      }
    </ul>
  );
}

export default IngredientsList;
