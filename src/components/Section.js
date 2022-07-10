import StepList from "./List/StepList.js";

function Section({ index, section }) {

  const steps = section.steps;
  const key = section.section.replace(/\s/g, '')+index;

  return (
    <section data-step={index}>
      <span id={index}></span>
      <details open>
        <summary><h2>{section.section}</h2></summary>
        <div>
          <div className="step-summary serif">{section.summary}</div>
          <div className="step-list-wrapper">
            {section.steps.map((steps, index) =>
              <StepList steps={steps} key={key+index} id={key+index} />
            )}
          </div>
        </div>
      </details>
    </section>
  )
}

export default Section;
