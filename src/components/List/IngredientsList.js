import IngredientItem from "../item/IngredientItem.js";
import '../../scss/IngredientsList.scss';

function IngredientsList({ section, items }) {

  return (
    <ul className={'list ingredient-list '+ section} key={section}>
      <h4 className="list-heading">{section}</h4>
      {
        items.map((item, index) =>
          <IngredientItem
            key={item[0]+index}
            ingredient={item[0]}
            amount={item[1]}
          />
        )
      }
    </ul>
  );
}

export default IngredientsList;
