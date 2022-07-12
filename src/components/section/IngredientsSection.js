import IngredientsList from "../list/IngredientsList.js";
import '../../scss/IngredientsSection.scss';

function IngredientsSection({ sauce, ingredientsLists }) {

  return (
    <section id="ingredients">
      <span data-step="ingredients"></span>
      <details open>
        <summary><h2>Ingredients</h2></summary>
        <div id="ingredients-list-wrapper" className={
          sauce ?
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
  )
}

export default IngredientsSection;
