import ItemMenu from "./ItemMenu.js";

function IngredientItem({ ingredient, amount }) {

  const itemId = ingredient.replace(/\s/g, '');

  return (
    <li className="list-item ingredient-item">
      <input type="checkbox" id={itemId} />
      <div className="item-details">
        <div className="details-primary">
          <label htmlFor={itemId}>
            <b>{ingredient}</b> {amount ? `(`+amount+`)` : null}
          </label>
          <ItemMenu />
        </div>
      </div>
    </li>
  );
}

export default IngredientItem;
