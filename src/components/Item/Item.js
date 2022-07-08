import IngredientItemTitle from "./IngredientItemTitle.js";
import ItemMenu from "./ItemMenu.js";

function Item({ itemType, itemInfo, hasMenu, index }) {

  function ItemDetail(time, detail) {
    return (
      <div className="details-secondary">
        <div className="time">{time}</div>
        <span>{detail}</span>
      </div>
    )
  }

  return (
    <li className={"list-item "+itemType}>
      <input type="checkbox" id={itemInfo[0]+index} />
      <div className="item-details">
        <div className="details-primary">
          <label htmlFor={itemInfo[0]+index}>
            { itemType === 'step' }
            <IngredientItemTitle ingredient={itemInfo[0]} amount={itemInfo[1]} />
          </label>
          {/* add menu for ingredient items */}
          {hasMenu ?
            <ItemMenu /> :
            null
          }
        </div>
        { itemType === 'step' ?
          <ItemDetail time={itemInfo[0]} detail={itemInfo[0]} /> :
          null
        }
      </div>
    </li>
  );
}

export default Item;
