import MenuHandle from "./MenuHandle.js";
import '../scss/Header.scss';

function Header({ checked, handleChange }) {

  // this function is repeated in the <ItemMenu /> component
  // should create a second <GeneralMenu /> component
  function handleClick(e) {
    if (e.currentTarget.parentElement.hasAttribute('open')) {
      e.stopPropagation();
      console.log('pause video clicked menu handle');
    }
  }

  return (
    <header>
      <h1>Eggplant parmesan</h1>
      <div className="options-bar">
        <div className="option">
          <input type="checkbox" id="option1" name="option1" value="sauce" checked={checked} onChange={handleChange} />
          <label htmlFor="option1">Make sauce from scratch</label>
        </div>
        <div className="option">
          <input type="number" id="serving-size" min="2" defaultValue="12" />
          Servings
        </div>
        <div className="option">
          <details className="menu">
            <MenuHandle label="More options" onClick={handleClick} />
            <div className="menu-contents">
              <ul>
                <li>
                  <input type="checkbox" id="option2" name="option2" value="healthy" defaultChecked={false} />
                  <label htmlFor="option2">Healthier (use less oil)</label>
                </li>
                <li>
                  <input type="checkbox" id="option3" name="option3" value="vegan" defaultChecked={false} />
                  <label htmlFor="option3">Vegan</label>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

export default Header;
