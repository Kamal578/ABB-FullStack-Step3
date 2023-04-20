function dishes(recipe, available) {
  let maxDishes = Infinity;
  for (const [ingredient, amount] of Object.entries(recipe)) {
    const availableAmount = available[ingredient] || 0;
    const dishesFromIngredient = Math.floor(availableAmount / amount);
    if (dishesFromIngredient < maxDishes) maxDishes = dishesFromIngredient;
  }
  return maxDishes === Infinity ? 0 : maxDishes;
}

console.log(
  dishes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  dishes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
