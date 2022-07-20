const ingredients = [
  {
    section: 'main',
    items: [
        {
            ingredient: "Italian eggplants",
            amount: "4 medium"
        },
        {
            ingredient: "Panko breadcrumbs",
            amount: "3 cups"
        },
        {
            ingredient: "Dried oregano",
            amount: "1 ½ teaspoons"
        },
        {
            ingredient: "Black pepper (ground)",
            amount: "1 teaspoon"
        },
        {
            ingredient: "Parmesean (grated)",
            amount: "1 ½ cups",
            filterId: { vegan: false }
        },
        {
            ingredient: "Vegan parmesean (grated) (optional)",
            amount: "1 ½ cups",
            filterId: { vegan: true }
        },
        {
            ingredient: "All-purpose flower",
            amount: "1 ½ cups"
        },
        {
            ingredient: "Eggs",
            amount: "4"
        },
        {
            ingredient: "Olive oil",
            amount: "1 ⅓ cups"
        },
        {
            ingredient: "Fresh basil",
            amount: "¼ cup"
        },
        {
            ingredient: "Fresh parsley",
            amount: "¼ cup"
        },
        {
            ingredient: "Mozzarella, low-moisture (grated)",
            amount: "6oz or 1 ⅓ cups",
            filterId: { vegan: false }
        },
        {
            ingredient: "Fresh mozzarella",
            amount: "8 ounces",
            filterId: { vegan: false }
        },
        {
          ingredient: "Vegan mozzarella (grated)",
          amount: "6oz or 1 ⅓ cups",
          filterId: { vegan: true }
        },
        {
          ingredient: "Tomato sauce",
          amount: '2 24oz cans',
          filterId: { sauceFromScratch: false }
        }
    ]
  },
  {
    section: 'sauce',
    items: [
      {
          ingredient: "Olive oil",
          amount: "1 ¼ cups"
      },
      {
          ingredient: "Garlic",
          amount: "1 head"
      },
      {
          ingredient: "Red onion",
          amount: "1 large"
      },
      {
          ingredient: "Anchovy fillets",
          amount: "1, oil-packed) (*optional"
      },
      {
          ingredient: "Red pepper flakes",
          amount: "½ teaspoon"
      },
      {
          ingredient: "Tomato paste",
          amount: "1 tablespoon"
      },
      {
          ingredient: "White wine",
          amount: "¼ cup"
      },
      {
          ingredient: "Whole peeled tomatoes",
          amount: "2 28oz cans"
      },
      {
          ingredient: "Fresh basil",
          amount: "¼ cup"
      },
      {
          ingredient: "Dried oregano",
          amount: "½ teaspoon"
      },
      {
          ingredient: "Kosher salt"
      }
    ],
    filterId: {
      sauceFromScratch: true
    }
  }
];

export function getIngredients() {
  return ingredients;
}
