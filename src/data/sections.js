const sections = [
  {
    section: 'Start tomato sauce',
    summary: 'You’re going to be adding things to the pot, stirring often, eventually bringing to a boil, then putting the pot in the oven for the sauce to roast.',
    enabled: true,
    steps: [
      [
        { title: 'Preheat oven to 350°' }
      ],
      [
        {
          title: 'Crush <b>garlic cloves</b>',
          menu: ['item']
        },
        {
          title: 'Chop <b>red onion</b>',
          menu: ['item']
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
    section: 'Slice & dry eggplant',
    summary: 'The eggplant juices are bitter, plus it will fry and roast better if it is dryer. You’re going to peel, slice, salt, then setup the eggplant slices to dry.',
    enabled: true,
    steps: [
      [
        { title: 'Peel <b>eggplant</b>'},
        {
          title: 'Slice <b>eggplant</b>',
          menu: ['item'],
          detail: {
            instruction: 'lengthwise, ½–¾ inch thick'
          }
        }
      ],
      [
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
    section: 'Wait (45mins)',
    summary: '...',
    enabled: true,
    steps: []
  },
  {
    section: 'Fry eggplant slices',
    summary: '...',
    enabled: true,
    steps: []
  },
  {
    section: 'Assemble sauce, eggplant, & cheese in dish',
    summary: '...',
    enabled: true,
    steps: []
  },
  {
    section: 'Cook',
    summary: '...',
    enabled: true,
    steps: []
  }
];

export function getSections() {
  return sections;
}
