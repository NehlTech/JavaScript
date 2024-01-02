/*************    Data    **************** */

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

/**
 * ARRAY METHODS PRACTICE
 *
 * Example 1
 *
 * Adding all the transactions in an array into a single array
 */

// const bankDepositSum = accounts
//   .map((acc) => acc.transactions) // loop through all the account transactions
//   .flat() // put all the transactions in one array
//   .filter((trans) => trans > 0) // filter out the positive transactions (deposit)
//   .reduce((accu, current) => accu + current, 0); // add all the positive transactions (accu => accumulater, current => current index)
// console.log(bankDepositSum); // Output : 25180

// // Is the same as the above
// const bankDepositSum2 = accounts
//   .flatMap((acc) => acc.transactions)
//   .filter((trans) => trans > 0)
//   .reduce((accum, index) => accum + index, 0);
// console.log(bankDepositSum2);

/**
 * Example 2
 *
 * Count how many deposits there have been
 * in the bank with at least one thousand dollars
 */

const numDeposit1000 = accounts
  .flatMap((acc) => acc.transactions)
  .filter((trans) => trans >= 1000).length;
// console.log(numDeposit1000); // Output : 6

// Another way of getting the same results
const numDeposit1000_2 = accounts
  .flatMap((acc) => acc.transactions)
  .reduce((accum, currValue) => (currValue >= 1000 ? accum + 1 : accum), 0);
console.log(numDeposit1000_2);
