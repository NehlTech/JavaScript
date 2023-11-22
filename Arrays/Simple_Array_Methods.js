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

const arr3 = [23, 11, 64];
console.log(arr3.at(0));
// Outcome: 23

// Getting the last element using the At method
console.log(arr3.at(-1));
//Outcome: 64
