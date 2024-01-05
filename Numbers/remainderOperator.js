/**
 * The Remainder Operator returns
 * the remainder of a division (%)
 */

// console.log(5 % 2); //Output: 1
// console.log(5 / 2); //Output: 2.5

isEven = (n) => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

[...document.querySelectorAll(".movements__row")].forEach(function (row, i) {
  if (i % 2 === 0) {
    row.style.backgroundColor = "orangered";
  }
});
