/***********************************
 * 23/11/23
 * Bankist App
 * This first introduction of the
 * bankist App helps to solidify
 * the use of Array methods
 * *********************************
 */

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

//Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance_value");
