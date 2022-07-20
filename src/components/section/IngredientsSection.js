import IngredientsList from "../list/IngredientsList.js";
import _ from 'lodash';
import '../../scss/IngredientsSection.scss';

function IngredientsSection({ ingredientsLists, filters }) {

  return (
    <section id="ingredients">
      <span data-step="ingredients"></span>
      <details open>
        <summary><h2>Ingredients</h2></summary>
        <div id="ingredients-list-wrapper">
        {/* Ingredients lists */}
        {ingredientsLists.map((list, index) =>
          <IngredientsList
            section={list.section}
            items={list.items}
            key={_.uniqueId('key_')}
            filters={filters}
          />
        )}
        </div>
      </details>
    </section>
  )
}

export default IngredientsSection;
