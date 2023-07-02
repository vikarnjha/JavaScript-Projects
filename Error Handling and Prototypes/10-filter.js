function filterByCategory(products) {
  return function (category) {
    return products.filter((product) => product.category === category);
  };
}

const products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "Sunglasses", category: "Accessories" },
];

const filterProducts = filterByCategory(products);

const clothingProducts = filterProducts("Clothing");
console.log(clothingProducts);
// Output:-
// [ { name: 'Shirt', category: 'Clothing' },
//   { name: 'Pants', category: 'Clothing' } ]

const accessoriesProducts = filterProducts("Accessories");
console.log(accessoriesProducts);
// Output:-
// [ { name: 'Hat', category: 'Accessories' },
//   { name: 'Sunglasses', category: 'Accessories' } ]
