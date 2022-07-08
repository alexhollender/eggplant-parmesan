import MenuHandle from "../MenuHandle.js";
import more from '../../media/more.svg';

function ItemMenu() {

  return (
    <details className="menu">
      <MenuHandle type={"icon"} label={more} />
      <div className="menu-contents">
        <ul>
          <li>View picture</li>
          <li>Substitute</li>
          <li>More information</li>
        </ul>
      </div>
    </details>
  );
}

export default ItemMenu;
