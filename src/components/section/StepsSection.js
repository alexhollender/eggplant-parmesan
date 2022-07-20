import StepList from "../list/StepList.js";
import _ from 'lodash';
import parse from 'html-react-parser';
import '../../scss/StepsSection.scss';

function StepsSection({ index, section, filters }) {

  return (
    <section data-step={index} className="instructions-section">
      <span id={index} className="scroll-offset"></span>
      <details open>
        <summary><h2>{section.sectionTitle}</h2></summary>
        <div className="section-contents-wrapper">
          <div className="left">
            { section.summary ?
              <div className="step-summary serif">{parse(section.summary)}</div> :
              null
            }
            {section.steps ?
              <div className="step-list-wrapper">
              {section.steps.map((steps, index) =>
                <StepList
                  steps={steps}
                  filters={filters}
                  key={_.uniqueId('key_')}
                />
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
