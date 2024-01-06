console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);

// Operations
console.log(10000n + 10000n);
console.log(362863726372637263726372637263726372637263726372n + 10000000n);

const huge = 2983485857343268605854548n;
const num = 23;
console.log(huge + BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == "20");

console.log(huge + "  is REALLY big!!!");

// Divisions
console.log(11n / 3n);
console.log(10 / 3);
