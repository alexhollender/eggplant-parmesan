import Item from "./Item/Item.js";
import '../scss/IngredientsList.scss';

function IngredientsList({ sauce }) {

  const ingredients = [
    {
      name: 'main',
      items: [
        ['Italian eggplants', '4 medium'],
        ['Panko breadcrumbs', '3 cups'],
        ['Dried oregano', '1 ½ teaspoons'],
        ['Black pepper, ground', '1 teaspoon'],
        ['Parmesean, grated', '1 ½ cups'],
        ['All-purpose flower', '1 ½ cups'],
        ['Eggs', '4'],
        ['Olive oil', '1 ⅓ cups'],
        ['Basil', '½ cup'],
        ['Mozzarella, low-moisture, grated', '6oz or 1 ⅓ cups'],
        ['Fresh mozzarella', '8 ounces']
      ]
    },
    {
      name: 'sauce',
      items: [
        ['Olive oil', '1 ¼ cups'],
        ['Garlic', '1 head'],
        ['Red onion', '1 large'],
        ['Anchovy fillets', '1, oil-packed) (*optional'],
        ['Red pepper flakes', '½ teaspoon'],
        ['Tomato paste', '1 tablespoon'],
        ['White wine', '¼ cup'],
        ['Whole peeled tomatoes', '2 28oz cans'],
        ['Basil leaves', '¼ cup'],
        ['Dried oregano', '½ teaspoon'],
        ['Kosher salt']
      ]
    }
  ];

  return (
    <>
    {
      ingredients.map((item, index) =>
        <ul className={'list ingredient-list '+ item['name']} key={item['name']}>
          <h4 className="list-heading">{item['name']}</h4>
          {
            item['items'].map((item, index) =>
              <Item
                key={item[0]+index}
                itemType={'ingredient-item'}
                itemInfo={item}
                hasMenu={true}
                index={index}
              />
            )
          }
        </ul>
      )
    }
    </>
  );
}

export default IngredientsList;
