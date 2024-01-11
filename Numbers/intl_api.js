/*****************************************************
 * FORMATTING DATES WITH INTL API
 * ***************************************************/

let nowDate = new Date(); // new Date() is the date constructor
console.log(nowDate);

// The date constructor has optional object

const options = {
  day: "numeric",
  month: "numeric", // short, long
  year: "numeric", // 2-digit
  hour: "numeric",
  minute: "numeric",
  weekday: "short", // it has long, short and narrow
};
const nowDateFormattedUS = Intl.DateTimeFormat("en-US", options).format(
  nowDate
);
console.log("**************** US FORMATTED ************");
console.log(nowDateFormattedUS);

console.log("**************** UK FORMATTED ************");
const nowDateFormattedUK = Intl.DateTimeFormat("en-UK", options).format(
  nowDate
);
console.log(nowDateFormattedUK);

console.log("**************** SYRIA FORMATTED ************");
const nowDateFormattedSY = Intl.DateTimeFormat("ar-SY", options).format(
  nowDate
);
console.log(nowDateFormattedSY);

console.log("**************** SOUTH AFRICA FORMATTED ************");
const nowDateFormattedZA = Intl.DateTimeFormat("af-ZA", options).format(
  nowDate
);
console.log(nowDateFormattedZA);

/**
 * Getting the language from the user's
 * browser instead of hardcoding it
 * using the navigator.language
 *
 */

const locale = navigator.language;
console.log("*************** Using inbuilt language browser ************");

console.log(locale);

const nowDateFormattedUSLocale = Intl.DateTimeFormat(locale, options).format(
  nowDate
);
console.log("**************** US FORMATTED LOCALE ************");
console.log(nowDateFormattedUSLocale);
