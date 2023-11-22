/***********************************
 * 22/11/23
 * ForEach Method
 * This method is used to loop
 * over an array
 * It requires a callback function
 * to tell it what to do
 * ForEach method loops through the
 * entire array
 * *********************************
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; // the +ve's are deposits and -ve's are witthdrawals

//Using the for-of loop
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited ${movement}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(movement)}`);
//   }
// }

//Using forEach method
console.log("*********** FOR EACH METHOD **************");
// movements.forEach(function (transaction) {
//   if (transaction > 0) {
//     console.log(`You deposited ${transaction}`);
//   } else {
//     console.log(`You withdrew ${Math.abs(transaction)}`);
//   }
// });

//Getting the currrent index for forEach
movements.forEach(function (trans, currIndex, arr) {
  if (trans > 0) {
    console.log(`Transaction ${currIndex + 1}: You deposited ${trans}`);
  } else {
    console.log(
      `Transaction ${currIndex + 1}: You withdrew ${Math.abs(trans)}`
    );
  }
});
