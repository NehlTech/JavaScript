/**
 * Working on Dates and Times
 */

// Creating date

/*const now = new Date();
console.log(now);
console.log(new Date("2024 01 06 18:05:41"));
console.log(new Date("January 06, 2024"));

console.log(new Date(0));
*/

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142256980000));

// console.log(Date.now());

// console.log(new Date(1704531511519));

// future.setFullYear(2040);
// console.log(Number(future));

const calcDaysPassed = (date1, date2) =>
  Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

const days1 = calcDaysPassed(new Date(2037, 3, 24), new Date(2037, 3, 14));
console.log(days1);
