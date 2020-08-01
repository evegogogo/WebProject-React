const foods = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "banana",
    calories: 300,
    status: "dinner",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "apple",
    calories: 250,
    status: "breakfast",
    liked:true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "pork belly",
    calories: 800,
    status: "lunch"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "steak",
    calories: 700,
    status: "lunch"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "lobster",
    calories: 470,
    status: "dinner"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "fish",
    calories: 430,
    status: "lunch"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "burger",
    calories: 590,
    status: "breakfast"
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "muffin",
    calories: 400,
    status: "breakfast"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "roast duck",
    calories: 900,
    status: "dinner"
  }
];

export function getFoods() {
  return foods;
}

export function getFood(id) {
  return foods.find(f => f._id === id);
}

export function saveFood(food) {
  let foodInDb = foods.find(f => f._id === food._id) || {};
  foodInDb.name = food.name;
  foodInDb.calories = food.calories;
  foodInDb.status = food.status;

  if (!foodInDb._id) {
    foodInDb._id = Date.now();
    foods.push(foodInDb);
  }

  return foodInDb;
}

export function deleteFood(id) {
  let foodInDb = foods.find(f => f._id === id);
  foods.splice(foods.indexOf(foodInDb), 1);
  return foodInDb;
}
