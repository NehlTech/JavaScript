/***********************************
 * 22/11/23
 * ForEach Method With Maps
 * This method is used to loop
 * over an array
 * It requires a callback function
 * to tell it what to do
 * ForEach method loops through the
 * entire array
 * *********************************
 */

//Uisng map
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Using sets. Sets give you the unique value
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
