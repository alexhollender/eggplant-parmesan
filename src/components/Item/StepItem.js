import ItemMenu from "./ItemMenu.js";
import Timer from './Timer.js';
import parse from 'html-react-parser';

function StepItem({ step }) {

  const id = step.title.replace(/\s/g, '');

  return (
    <li className="list-item step-item">
      <input type="checkbox" id={id} />
      <div className="item-details">
        <div className="details-primary">
          <label htmlFor={id}>
            {parse(step.title)}
          </label>
          { step.menu ?
            <ItemMenu /> :
            null
          }
        </div>
        {
          step.detail ?
          <div className="details-secondary">
            {
              step.detail.time ?
              <Timer time={step.detail.time} /> :
              null
            }
            <span>{step.detail.instruction}</span>
          </div> :
          null
        }
      </div>
    </li>
  );
}

export default StepItem;
