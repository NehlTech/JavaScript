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
  owner: "Jonas Schmedtmann",
  transactions: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2024-01-04T17:01:17.194Z",
    "2023-12-25T23:36:17.929Z",
    "2024-01-09T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5, // %
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2023-11-10T14:43:26.374Z",
    "2023-12-25T18:49:59.371Z",
    "2024-01-09T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
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

// Global variables
let currentAccount, timer;

/**************** FUNCTIONS ****************/

const formatTransactionDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) {
    return "Today";
  } else if (daysPassed === 1) {
    return "Yesterday";
  } else if (daysPassed <= 7) {
    return `${daysPassed} days ago`;
  } else {
    /**const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`; */
    return Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayTransactions = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  const trans = sort
    ? acc.transactions.slice().sort((a, b) => a - b)
    : acc.transactions;

  trans.forEach(function (transfer, i) {
    const type = transfer > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatTransactionDate(date, acc.locale);

    const formattedTrans = formatCurrency(transfer, acc.locale, acc.currency);

    // new Intl.NumberFormat(acc.locale, {
    //   style: "currency",
    //   currency: acc.currency,
    // }).format(transfer);
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">
        ${i + 1}
        ${type}
      </div>
      <div className="movements__date">${displayDate}</div>
      <div class="movements__value">
       ${formattedTrans}
      </div>

    </div>
    `;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// displayTransactions(account1.transactions);

const calDisplayBalance = function (acc) {
  // const balance = acc.transactions.reduce((acc, trans) => acc + trans, 0);
  acc.balance = acc.transactions.reduce((acc, trans) => acc + trans, 0);
  // acc.balance = balance

  labelBalance.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );

  // labelBalance.textContent = `${acc.balance.toFixed(2)} €`;
};
// calDisplayBalance(account1.transactions);

const calcDisplaySummary = function (acc) {
  //income
  const incomes = acc.transactions
    .filter((trans) => trans > 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  // `${incomes.toFixed(2)}€`;

  //withdrawals
  const out = acc.transactions
    .filter((trans) => trans < 0)
    .reduce((acc, trans) => acc + trans, 0);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  // `${Math.abs(out).toFixed(2)}€`;

  //interest
  const interest = acc.transactions
    .filter((trans) => trans > 0)
    .map((depo) => depo * acc.interestRate)
    .filter((interest) => interest >= 1) //excluding interest less than 1
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );

  // `${interest.toFixed(2)}€`;
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

// Update Ui
const updateUI = function (acc) {
  // Display transactions
  displayTransactions(acc);
  // Display balance
  calDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Start LogOut function

const startLogOutTimer = function () {
  let time = 300; // 300 seconds
  const tickTimer = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, "0");
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }
    time--;
  };

  tickTimer();
  timer = setInterval(tickTimer, 1000);
  return timer;
};

/*********** Event handlers  ***********/

/*************    LOG IN    *****************/
// let currentAccount;

// Experimenting the internalization API

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display welcome message
    labelWelcome.textContent = `Welcome back, 
    ${currentAccount.owner.split(" ")[0]}`; //This will take first name of the owner

    containerApp.style.opacity = 100;

    // Create current date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    const now = new Date();
    const options = {
      day: "numeric",
      month: "long", // short, long
      year: "numeric", // 2-digit
      hour: "numeric",
      minute: "numeric",
      weekday: "short", // it has long, short and narrow
    };

    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    // To make the fields lose its focus
    inputLoginPin.blur();

    // Start the timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // updateUI
    updateUI(currentAccount);
  }
});

/*************    TRANSFER MONEY   **************** */
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const transferTo = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );
  // console.log(amount, transferTo);

  inputTransferAmount.value = inputTransferTo.value = "";
  // inputTransferAmount.blur();

  if (
    amount > 0 &&
    transferTo &&
    currentAccount.balance >= amount &&
    transferTo?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.transactions.push(-amount);
    transferTo.transactions.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    transferTo.movementsDates.push(new Date().toISOString());

    // updateUI
    updateUI(currentAccount);
    // Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

/*********** REQUEST A LOAN  ************/
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.transactions.some((trans) => trans >= amount * 0.1)
  ) {
    setTimeout(function () {
      // Add transactions
      currentAccount.transactions.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }
  inputLoanAmount.value = " ";
  // Reset timer
  clearInterval(timer);
  timer = startLogOutTimer();
});

/*********** CLOSE ACCOUNT  ************/
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    //The findIndex returns the index of an element in the array
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // console.log("Account Deleted");
    console.log(index);
    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
    labelWelcome.textContent = `Log in to get started`;
  }

  inputCloseUsername.value = inputClosePin.value = " ";
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

/**
 * Implementing Sort functionality
 */
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayTransactions(currentAccount.transactions, !sorted);
  sorted = !sorted;
});
