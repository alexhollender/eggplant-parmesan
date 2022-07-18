import diceOnionWebM from '../media/steps/dice-onion.webm';
import diceOnionMp4 from '../media/steps/dice-onion.mp4';
import crushGarlicWebM from '../media/steps/crush-garlic.webm';
import crushGarlicMp4 from '../media/steps/crush-garlic.mp4';

const sections = [
  {
    sectionTitle: 'Start tomato sauce',
    summary: 'You’re going to be adding things to the pot, stirring often, eventually bringing to a boil, then putting the pot in the oven for the sauce to roast.',
    enabled: true,
    filterId: {
      sauceFromScratch: true
    },
    steps: [
      [
        { title: 'Preheat oven to 350°' }
      ],
      [
        {
          title: 'Crush <b>garlic cloves</b>',
          menu: {
            video: {
              title: 'How to crush garlic',
              webM: crushGarlicWebM,
              mp4: crushGarlicMp4
            }
          }
        },
        {
          title: 'Chop <b>red onion</b>',
          menu: {
            video: {
              title: 'How to dice an onion',
              webM: diceOnionWebM,
              mp4: diceOnionMp4
            }
          }
        },
        { title: 'Measure out / ready other ingredients'}
      ],
      [
        {
          title: 'Add <b>olive oil</b> to pot',
          detail: {
            instruction: 'over medium heat'
          }
        },
        {
          title: 'Add <b>garlic</b> to pot',
          detail: {
            time: 4*60,
            instruction: 'stirring often, until golden'
          }
        },
        {
          title: 'Add <b>onion, anchovies, & red pepper flakes</b> to pot',
          detail: {
            time: 5*60,
            instruction: 'stirring often, until onion is translucent'
          }
        },
        {
          title: 'Add <b>tomato paste</b> to pot',
          detail: {
            time: 2*60,
            instruction: 'stirring often, until slightly darkened'
          }
        },
        {
          title: 'Add <b>wine</b> to pot',
          detail: {
            time: 1*60,
            instruction: 'bring to a boil, and cook until almost completely evaporated'
          }
        },
        {
          title: 'Add <b>tomatoes</b> (breaking up with your hands), & their juices to pot',
          detail: {
            instruction: 'turn heat back down to medium, stir to combine'
          }
        },
        {
          title: 'Add <b>baisil</b> & <b>oregano</b>, & their juices to pot',
          detail: {
            instruction: 'stir to combine'
          }
        },
        {
          title: 'Swirl <b>1 ½ cups of water</b> in one empty tomato can, then transfer to the other and swirl. Add to pot.'
        },
        {
          title: 'Add <b>salt</b> to pot (to taste)'
        },
        {
          title: 'Transfer pot to oven. Cover pot.',
          detail: {
            time: 2.5*3600,
            instruction: 'until thick and tomatoes are browned on top and around edges of pot (*stir halfway through)'
          }
        }
      ]
    ]
  },
  {
    sectionTitle: 'Slice & dry eggplant',
    summary: 'You’re going to peel, slice, salt, then setup the eggplant slices to dry. (Why bother drying the eggplant? For one the eggplant juices are bitter. Also  the eggplant will fry and bake better if it is dryer.)',
    enabled: true,
    steps: [
      [
        { title: 'Peel <b>eggplant</b>'},
        {
          title: 'Slice <b>eggplant</b>',
          menu: {
            video: {
              webM: 'video link',
              mp4: 'video link'
            }
          },
          detail: {
            instruction: 'lengthwise, ½–¾ inch thick'
          }
        },
        { title: 'Lightly season <b>eggplant slices</b> with <b>salt</b>' },
        { title: 'Put two layers of paper towels on the bottom of a baking sheet, add a layer of <b>eggplant slices</b>, top with more paper towels, and repeat as needed.' },
        {
          title: 'Top with a final layer of paper towels. Then to add weight, to help get more moisture out: top with another baking sheet and put a heavy pot on top.',
          detail: {
            time: 1*3600,
            instruction: 'let eggplant sit until it has released excess liquid'
          }
        }
      ]
    ]
  },
  {
    sectionTitle: 'Wait (45mins)',
    summary: 'The eggplant slices take about an hour to dry out (you can dry them for longer if you would like). Wait about 45 minutes, then start the next section, and then the eggplant slices should be ready by the time you need them. In the meantime you can read the Wikipedia article about <a href="https://en.wikipedia.org/wiki/Parmigiana" target="_blank">Eggplant Parmesan</a>.',
    enabled: true
  },
  {
    sectionTitle: 'Fry eggplant slices',
    summary: 'Make the breading mixture, then coat and fry the eggplant slices.',
    enabled: true,
    steps: [
      [
        { title: 'Put <b>panko</b>, <b>oregano</b>, <b>pepper</b>, and <b>¾ cup Parmesan</b> in a food processor, and process until very finely ground. This is your breading mixture.' },
        { title: 'Setup three shallow bowls: 1 with <b>flower</b>, 1 with <b>eggs (4 large, beaten)</b>, and 1 with <b>breading mixture</b>. Setup <b>eggplant slices</b> next to bowls, and a wire rack or baking sheet to put them on once coated.'},
        { title: 'Working one at a time: dredge <b>eggplant slices</b> in <b>flour</b>, dip in <b>egg</b> (allowing excess to drip off), then coat in <b>breading mixture</b> (packing all around, then shaking off excess). Place on wire rack or baking sheet.'}
      ],
      [
        { title: 'Heat <b>oil</b> (⅔ cup) in a large skillet (preferably cast iron) over medium-high.'},
        { title: 'Setup a baking sheet lined with paper towels where you will place the eggplant slices once you have fried them.'},
        {
          title: 'Fry <b>eggplant slices</b> in batches — about 5 minutes, turning once, until deep golden.',
          detail: {
            instruction: 'as soon as each slice is finished transfer to baking sheet lined with paper towels, and press with more paper towel to absorb oil'
          }
        }
      ]
    ]
  },
  {
    sectionTitle: 'Assemble sauce, eggplant, & cheese in baking dish',
    summary: 'Assemble layers of sauce, cheese, and eggplant slices in a baking dish.',
    enabled: true,
    steps: [
      [
        { title: 'Preheat oven to 350°'},
        { title: 'Chop <b>fresh basil</b> and <b>fresh parsley</b>' },
        { title: 'Grate <b>mozzarella (low-moisture)</b>' },
        { title: 'In a bowl: combine <b>basil</b>, <b>parsley</b>, <b>mozzarella</b>, and <b>parmesan</b> (¾ cup). This will be your <b>cheese mixture</b>.'},
        {
          title: 'In a baking dish: spread a layer of <b>sauce</b> (about 1 cup), then on top a layer of <b>cheese mixture</b>, then on top a layer of <b>eggplant slices</b>.',
          detail: {
            instruction: 'Repeat until finished with all eggplant slices (about 3-4 layers)'
          }
        }
      ]
    ]
  },
  {
    sectionTitle: 'Bake',
    summary: '',
    enabled: true,
    steps: [
      [
        {
          title: 'Cover baking dish with foil and bake for 1 hour (350°)',
          detail: {
            time: 1*3600,
            instruction: 'eggplant should be custardy'
          }
        },
        { title: 'Remove from oven, and remove foil. Add a layer of <b>fresh mozzarella</b> to top of dish.' },
        {
          title: 'Increase oven temperature to 425°, and bake (without foil) for an additional 15–20 minutes',
          detail: {
            time: 20*60,
            instruction: 'until cheese is bubbling and browned in spots'
          }
        },
        { title: 'Let rest 30 minutes. Top with basil leaves just before slicing. '}
      ],

    ]
  }
];

export function getSections() {
  return sections;
}
