/*************************************
 * FORMATTING NUMBERS WITH INTL API
 * ***********************************/

console.log("********* Normal Number Display ************");
let num = 123252778.564;
console.log(num);

// Adding Options as a second parameter
let options = {
  style: "currency", //percent, currency, unit
  unit: "mile-per-hour",
  currency: "EUR", // EUR, USD
  useGrouping: true,
};

console.log("********* US Number Display ************");

let numUS = Intl.NumberFormat("en-US", options).format(num);
console.log(numUS);

console.log("********* Germany Number Display ************");

let numGE = Intl.NumberFormat("de-DE", options).format(num);
console.log(numGE);

console.log("********* Syria Number Display ************");
let numSY = Intl.NumberFormat("ar-SY", options).format(num);
console.log(numSY);
