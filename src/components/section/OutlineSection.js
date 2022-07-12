import StickyHeader from "../StickyHeader.js";
import '../../scss/Outline.scss';
import eggplant1 from '../../media/eggplant-1.webp';
import placeholder from '../../media/placeholder.webp';

function OutlineSection({ curStep, stepTitles }) {

  return (
    <section id="outline">
      <span data-step="outline"></span>
      <details open>
        <summary><h2 id="recipe-outline-header">Recipe outline</h2></summary>
        <div>
          <StickyHeader curStep={curStep} stepTitles={stepTitles} />
          <div id="outline-media">
            <div>Finished dish<img src={eggplant1} /></div>
            <div>2<img src={placeholder} /></div>
            <div>3<img src={placeholder} /></div>
            <div>4<img src={placeholder} /></div>
            <div>5<img src={placeholder} /></div>
            <div>6<img src={placeholder} /></div>
          </div>
          <div id="description" className="serif">Eggplant parmesan, is an Italian dish made with fried, sliced eggplant layered with cheese and tomato sauce, then baked. The origin of the dish is claimed by the Southern regions of Calabria, Campania, and Sicily. <u>read more</u></div>
        </div>
      </details>
    </section>
  );
}

export default OutlineSection;
