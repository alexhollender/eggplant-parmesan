import StepItem from "../item/StepItem.js";

function StepList({ steps, id, index }) {

  return (
    <ul className="list step-list">
    {
      steps.map((step, index) =>
        <StepItem
          key={id+index}
          step={step}
        />
      )
    }
    </ul>
  )
}

export default StepList;
