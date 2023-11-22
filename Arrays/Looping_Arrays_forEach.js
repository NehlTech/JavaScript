/***********************************
 * 22/11/23
 * ForEach Method
 * This method is used to loop
 * over an array
 * It requires a callback function
 * to tell it what to do
 * *********************************
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; // the +ve's are deposits and -ve's are witthdrawals

//Using the for loop
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

//Using forEach method
console.log("*********** FOR EACH METHOD **************");
movements.forEach(function (transaction) {
  if (transaction > 0) {
    console.log(`You deposited ${transaction}`);
  } else {
    console.log(`You withdrew ${Math.abs(transaction)}`);
  }
});
