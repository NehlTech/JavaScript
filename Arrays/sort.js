"use strict";

// const names = ["Florin", "Liam", "Jai", "Ivan"];
// console.log(names.sort());

/**
 * Using the sort() method on numbers converts the
 * the numbers into a string thereby giving out
 * not a desired outcome
 * To get a desired outcome we provide a comparison function
 */
// const numbers = [74, 18, 10, 5, 84, 24, 105];
// console.log(numbers.sort()); // Output: 10, 105, 18, 24, 5, 74, 84
/**
 * Using the comparison function
 * function compareFunction(a, b)
   {
        1. < 0 .... 'a' comes first
        2. = 0 .... nothing will be changed
        3. > 0 .... 'b' comes first
        return a - b
    }
 */

// function to compare two arguments
// const compareSort = function (a, b) {
//   return a - b;
// };
// console.log(numbers.sort(compareSort));

/** Using arrow function  */
// console.log(numbers.sort((a, b) => a - b)); //Output: 5, 10, 18, 24, 74, 84, 105

/**
 * Sorting an array of objects
 *
 */

// const products = [
//   {
//     name: "laptop",
//     price: 1000,
//   },
//   {
//     name: "desktop",
//     price: 1500,
//   },
//   {
//     name: "phone",
//     price: 500,
//   },
// ];

// console.log(products.sort((a, b) => a.price - b.price));

const account1 = {
  owner: "Kwaku Manu",
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5, // %
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7, // %
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1, // %
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

let trans = accounts.sort((a, b) => {
  if (a > b) return 1;
  if (b > a) return -1;
});

console.log(trans);
