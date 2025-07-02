export const defaultLabels = {
  foo: 'First',
  bar: 'Second',
  baz: 'Third',
};

export function getRandomLabel() {
  const options = [
    'Tomato',
    'Basil',
    'Garlic',
    'Onion',
    'Olive Oil',
    'Parmesan',
    'Chicken',
    'Mushroom',
    'Pepper',
    'Spinach',
    'Carrot',
    'Potato',
    'Rosemary',
    'Thyme',
    'Lemon',
    'Butter',
  ];

  return options[Math.floor(Math.random() * options.length)];
}
