const sections = [
  {
    section: 'Start tomato sauce',
    summary: 'You’re going to be adding things to the pot, stirring often, eventually bringing to a boil, then putting the pot in the oven for the sauce to roast',
    enabled: true,
    steps: [
      [{ title: 'Preheat oven to 350°' }],
      [{
        title: 'Crush <b>garlic cloves</b>',
        menu: ['item']
      },
      {
        title: 'Chop <b>red onion</b>',
        menu: ['item']
      },
      { title: 'Measure out / ready other ingredients'}],
      [{
        title: 'Add <b>olive oil</b> to pot',
        detail: {
          instruction: 'over medium heat'
        }
      },
      {
        title: 'Add <b>garlic</b> to pot',
        detail: {
          time: (4*60),
          instruction: 'stirring often, until golden'
        }
      },
      {
        title: 'Add <b>onion, anchovies, & red pepper flakes</b> to pot',
        detail: {
          time: (5*60),
          instruction: 'stirring often, until onion is translucent'
        }
      }]
    ]
  },
  {
    section: 'Slice & dry eggplant',
    summary: '...',
    enabled: true,
    steps: []
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
