// NOTE: This file could be moved to libs/utils for better reusability across multiple apps in the monorepo.

export const defaultLabels = {
  foo: 'First',
  bar: 'Second',
  baz: 'Third',
};

export type BreadcrumbLabels = { foo: string; bar: string; baz: string };

/**
 * Simulates fetching breadcrumb labels from a server.
 * @returns A promise that resolves to the breadcrumb labels.
 * @throws An error if the labels fail to load (simulated).
 *
 * NOTE: This function could be moved to libs/utils or a shared data-access library
 * for reuse across multiple apps or features in the monorepo.
 */
export async function fetchBreadcrumbLabels(): Promise<BreadcrumbLabels> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  // Simulate random failure 1 in 5 times
  if (Math.random() < 0.2) {
    throw new Error('Failed to load breadcrumb labels (simulated error)');
  }
  // Return simulated data
  return defaultLabels;
}

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
