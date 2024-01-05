/**
 * Using the math method
 */

// Square root
console.log(Math.sqrt(25)); // Output: 5
console.log(25 ** (1 / 2)); // Output: 5

// Cubic root
console.log(8 ** (1 / 3)); // Output: 2

// Maximum value
console.log(Math.max(5, 18, 23, 11, 2)); // Output: 23
console.log(Math.max(5, 18, "23", 11, 2)); // Output: 23
console.log(Math.max(5, 18, "23px", 11, 2)); // Output: NaN

// Minimum value
console.log(Math.min(5, 18, 23, 11, 2)); // Output: 2

// Using some constants
// Calculating the area of a circle with radius 10 pixels
// Area of a circle: 2 * pi * r^2
console.log(Math.PI * Number.parseFloat("10px") ** 2); // Output: 314.1592653589793

// Using the random method

console.log("******************************************");
console.log("******************************************");
console.log(Math.trunc(Math.random() * 6) + 1);

console.log("*********  GENERAL FORMULA FOR RANDOM NUMBER ****************");

// Writing a general formula for random number
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20));
