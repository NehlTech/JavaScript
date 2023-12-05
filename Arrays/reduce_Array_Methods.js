/**
 * 5th December, 2023
 * The reduce Method
 * It executes a callback function
 * on every element of an array
 * and it will return one single output value
 *
 */

// const numbers = [1, 2, 33, 3, 4, 5];

// Using general function body

// const total = numbers.reduce(function (acc, value) {
//   return acc + value;
// });

// console.log(total);

// Using arrow function
// const total2 = numbers.reduce((acc, value) => acc + value);
// console.log(total2);

// Finding the max number of an array

// const maxNum = numbers.reduce((accumulator, value) => {
//   if (accumulator > value) {
//     return accumulator;
//   } else {
//     return value;
//   }
// });

// console.log(maxNum);

const store = [
  {
    product: "laptop",
    value: 1000,
    count: 3,
  },
  {
    product: "desktop",
    value: 1500,
    count: 4,
  },
  {
    product: "mobile",
    value: 500,
    count: 10,
  },
];

const totalValueStore = store.reduce(
  (acc, item) => acc + item.value * item.count,
  0
);

console.log(totalValueStore);
