import StepList from "../list/StepList.js";
import parse from 'html-react-parser';
import '../../scss/StepsSection.scss';

function StepsSection({ index, section }) {

  const steps = section.steps;
  const key = section.sectionTitle.replace(/\s/g, '')+index;

  return (
    <section data-step={index} className="instructions-section">
      <span id={index} className="scroll-offset"></span>
      <details open>
        <summary><h2>{section.sectionTitle}</h2></summary>
        <div className="section-contents-wrapper">
          <div className="left">
            <div className="step-summary serif">{parse(section.summary)}</div>
            {section.steps ?
              <div className="step-list-wrapper">
              {section.steps.map((steps, index) =>
                <StepList steps={steps} key={key+index} id={key+index} />
              )}
              </div> :
              null
            }
          </div>
          <div className="right"></div>
        </div>
      </details>
    </section>
  )
}

export default StepsSection;
