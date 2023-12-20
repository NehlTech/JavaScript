"use strict";
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

// //Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayTransactions = function (transactions) {
  containerMovements.innerHTML = "";

  transactions.forEach(function (transfer, i) {
    const type = transfer > 0 ? "deposit" : "withdrawal";
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1}
        ${type}
      </div>
      <div class="movements__value">
       ${transfer + "€"}
      </div>

    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displayTransactions(account1.transactions);

const calDisplayBalance = function (transactions) {
  const balance = transactions.reduce((acc, trans) => acc + trans, 0);
  labelBalance.textContent = `${balance} €`;
};
// calDisplayBalance(account1.transactions);

const calcDisplaySummary = function (acc) {
  //income
  const incomes = acc.transactions
    .filter((trans) => trans > 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumIn.textContent = `${incomes}€`;

  //withdrawals
  const out = acc.transactions
    .filter((trans) => trans < 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  //interest
  const interest = acc.transactions
    .filter((trans) => trans > 0)
    .map((depo) => depo * acc.interestRate)
    .filter((interest) => interest >= 1) //excluding interest less than 1
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// calcDisplaySummary(account1.transactions);

/**Computing Username */

// const user = "Steven Thomas Williams"; // stw
// const userName = user
//   .toLowerCase()
//   .split(" ")
//   .map((name) => name[0])
//   .join("");

// console.log(userName);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Creating functions to receive any argument

// A function named createUsernames is declared, which takes
// an array of accounts (accs) as a parameter. Inside the function:

// The forEach method is used to iterate over each account in the accs array.
// For each account, a new property username is added to the account object.
// The username is created by taking the owner property, converting
//  it to lowercase, splitting it into an array of words, mapping
// each word to its first character, and finally joining these characters into a single string.

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((word) => word[0])
      .join("");
  });
};

createUsernames(accounts);

/*************    LOG IN    **************** */
// Event handler

let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display welcome message
    labelWelcome.textContent = `Welcome back, 
    ${currentAccount.owner.split(" ")[0]}`; //This will take first name of the owner

    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    // To make the fields lose its focus
    inputLoginPin.blur();

    // Display transactions
    displayTransactions(currentAccount.transactions);
    // Display balance
    calDisplayBalance(currentAccount.transactions);
    // Display summary
    calcDisplaySummary(currentAccount);
  }
});
// console.log(accounts);

// const withdrawals = transactions.filter((mov) => mov < 0);
// console.log(withdrawals);

/**
 * Taking all the transactions and convert
 * them into euros from dollars
 * using Chaining methods
 *
 * Date: 12th December, 2023
 * Time: 00:19
 */

const eurToUsd = 1.1;

const totalDepositUSD = transactions
  .filter((depo) => depo > 0)
  .map((deposit) => deposit * eurToUsd)
  .reduce((acc, deposit) => acc + deposit, 0);
// console.log(totalDepositUSD);
