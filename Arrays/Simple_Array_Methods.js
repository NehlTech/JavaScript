/************************************
 * SLICE Method
 * *********************************
 */

let arr = ["a", "b", "c", "d", "e", "f"];
// console.log(arr.slice(3));
// Outcome: ['d', 'e', 'f']

/********* Finding the last element of the array */

// console.log(arr.slice(-2));
// Outcome: ['e', 'f']

/***********************************
 * SPLICE Method
 * This method removes elements
 * from the original array
 * *********************************
 */

// console.log(arr.splice(2));
// Outcome: ['c', 'd', 'e', 'f']
// console.log(arr);
// Outcome: ['a', 'b']  The original array has been altered

/***********************************
 * REVERSE Method
 * This method reverses an elements
 * in the array and also mutate the
 * original array
 * *********************************
 */

let arr2 = ["j", "i", "h", "g", "f"];
// console.log(arr2.reverse());
// Outcome: ['f', 'g', 'h', 'i', 'j']

/***********************************
 * CONCAT Method
 * This method is used to concatenate
 * two arrays
 * meaning it is used to add two arrays
 * *********************************
 */
arr = ["a", "b", "c", "d", "e"];
const letters = arr.concat(arr2);
// console.log(letters);
// Outcome: ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j']

/***********************************
 * JOIN Method
 * This method is used to join
 * two arrays
 * *********************************
 */

// console.log(letters.join("-"));
//Outcome: a-b-c-d-e-f-g-h-i-j

// console.log(letters.join(","));

/***********************************
 * AT Method
 * This method gets a value from
 * the exact position of the  array
 * *********************************
 */

// const arr3 = [23, 11, 64];
// console.log(arr3.at(0));
// Outcome: 23

// Getting the last element using the At method
// console.log(arr3.at(-1));
//Outcome: 64

/***********************************
 * MAP Method
 * It executes a given function
 * on every element from an array
 * and returns the new array
 * *********************************
 */

// const numbers = [1, 2, 3, 4, 5];

// doublenumbers = numbers.map(function (value, i, arr) {
//   return value * i;
// });

// console.log(doublenumbers);

// const doubleNumbers = numbers.map(doublenumbers);

// function doublenumbers(value, index, arr) {
//   return value * index;
// }

// console.log(doubleNumbers);

// const products = [
//   {
//     name: "laptop",
//     price: 1000,
//     count: 5,
//   },
//   {
//     name: "desktop",
//     price: 1500,
//     count: 2,
//   },
//   {
//     name: "phone",
//     price: 500,
//     count: 10,
//   },
// ];

// const totalProductsValue = products.map((value) => value.price * value.count);
// const totalProductsValue = products.map((product) => ({
//   name: product.name,
//   totalValue: product.price * product.count,
// }));

// const totalProductsValue = products.map(function (value, index, arr) {
//   return { name: value.name, totalValue: value.price * value.count };
// });

// console.log(totalProductsValue);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

/** Using Arrow function */
// usd = movements.map((mov) => mov * eurToUsd);
// console.log(movements);
// console.log(usd);

// usd = movements.map(function (value) {
//   return value * eurToUsd;
// });
// console.log(usd);

// usd = movements.map((transaction, i, arr) => {
//   if (transaction > 0) {
//     return `Transaction ${i + 1}: You deposited ${Math.abs(transaction)}`;
//   } else {
//     return `Transaction ${i + 1}: You withdrew ${Math.abs(transaction)}`;
//   }
// });
// console.log(usd);

const usd = movements.map(
  (transaction, i) =>
    `Transaction ${i + 1}: You ${
      transaction > 0 ? "deposited" : "Withdrew"
    } ${Math.abs(transaction)}`
);
console.log(usd);
