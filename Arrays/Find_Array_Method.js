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

// console.log(accounts);

/**
 * 14/12/23
 * The Find Method
 * This is used to find exactly one element
 * when a certain condition is met
 */

//Getting only one account

const account = accounts.find((acc) => acc.owner === "Sarah Smith");
console.log(account);
