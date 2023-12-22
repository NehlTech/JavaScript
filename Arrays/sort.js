"use strict";

// const names = ["Florin", "Liam", "Jai", "Ivan"];
// console.log(names.sort());

/**
 * Using the sort() method on numbers converts the
 * the numbers into a string thereby giving out
 * not a desired outcome
 * To get a desired outcome we provide a comparison function
 */
const numbers = [74, 18, 10, 5, 84, 24, 105];
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
console.log(numbers.sort((a, b) => a - b)); //Output: 5, 10, 18, 24, 74, 84, 105
