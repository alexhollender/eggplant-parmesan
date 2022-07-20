import MenuHandle from "./MenuHandle.js";
import '../scss/Header.scss';

function Header({ filters, handleFilterChange }) {

  // this function is repeated in the <ItemMenu /> component
  // should create a second <GeneralMenu /> component
  function handleClick(e) {
    if (e.currentTarget.parentElement.hasAttribute('open')) {
      e.stopPropagation();
    }
  }

  return (
    <header>
      <h1>Eggplant parmesan</h1>
      <div className="options-bar">
        <div className="option">
          <input
            type="checkbox"
            id="sauceFilter"
            name="sauceFromScratch"
            checked={filters.sauceFromScratch}
            onChange={handleFilterChange}
          />
          <label htmlFor="sauceFilter">Make sauce from scratch</label>
        </div>
        <div className="option">
          <input
            type="number"
            id="serving-size"
            min="2"
            defaultValue="12"
          />
          Servings
        </div>
        <div className="option">
          <details className="menu">
            <MenuHandle label="More options" handleClick={handleClick} />
            <div className="menu-contents">
              <ul>
                <li>
                  <input
                    type="checkbox"
                    id="lessOilFilter"
                    name="lessOil"
                    checked={filters.lessOil}
                    onChange={handleFilterChange}
                  />
                  <label htmlFor="lessOilFilter">Healthier (use less oil)</label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    id="veganFilter"
                    name="vegan"
                    checked={filters.vegan}
                    onChange={handleFilterChange}
                  />
                  <label htmlFor="veganFilter">Vegan</label>
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
