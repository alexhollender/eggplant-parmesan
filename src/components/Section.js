function Section({ stepNumb, stepName }) {
  const stepsArray = [
    {
      listType: 'steps-list'
    }
  ]

  return (
    <section data-step={stepNumb}>
      <span id={stepNumb}></span>
      <details open>
        <summary><h2>{stepName}</h2></summary>
        <div>
          <div className="step-summary serif">You’re going to be adding things to the pot, stirring often, eventually bringing to a boil, then putting the pot in the oven for the sauce to roast.</div>
          <div className="step-list">

            <ul className="checklist">
              <li className="list-item">
                <input type="checkbox" id="pre305" />
                <div className="item-details">
                  <div className="details-primary">
                    <label htmlFor="pre305">Preheat oven to 350°</label>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="checklist">
              <h4 className="list-heading">Prepare ingredients:</h4>
              <li className="list-item">
                <input type="checkbox" id="crushGar" />
                <div className="item-details">
                  <div className="details-primary">
                    <label htmlFor="crushGar">Crush <b>garlic cloves</b></label>
                  </div>
                </div>
              </li>
              <li className="list-item">
                <input type="checkbox" id="chopOn" />
                <div className="item-details">
                  <div className="details-primary">
                    <label htmlFor="chopOn">Chop <b>red onion</b></label>
                  </div>
                </div>
              </li>
              <li className="list-item">
                <input type="checkbox" id="prepOth" />
                <div className="item-details">
                  <div className="details-primary">
                    <label htmlFor="prepOth">Measure out / ready other ingredients</label>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="checklist">
              <h4 className="list-heading">Add things to pot:</h4>
              <li className="list-item">
                <input type="checkbox" id="addOli" />
                <div className="item-details">
                  <div className="details-primary">
                    <label htmlFor="addOli">Add <b>olive oil</b> to pot</label>
                  </div>
                  <div className="details-secondary">
                    <span>over medium heat</span>
                  </div>
                </div>
              </li>
              <li className="list-item">
                <input type="checkbox" id="addGar" />
                <div className="item-details">
                  <div className="details-primary">
                    <label htmlFor="addGar">Add <b>garlic</b> to pot</label>
                  </div>
                  <div className="details-secondary">
                    <div className="time">4:00</div>
                    <span>stirring often, until golden</span>
                  </div>
                </div>
              </li>
              <li className="list-item">
                <input type="checkbox" id="addOn" />
                <div className="item-details">
                  <div className="details-primary">
                    <label htmlFor="addOn">Add <b>onion, anchovies, & red pepper flakes</b> to pot</label>
                  </div>
                  <div className="details-secondary">
                    <div className="time">5:00</div>
                    <span>stirring often, until onion is translucent</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </details>
    </section>
  )
}

export default Section;
