// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. 
This time, they want to convert dog ages to human ages 
and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', 
which accepts an arrays of dog's ages ('ages'), 
and does the following things in order:

1. Calculate the dog age in human years using 
the following formula: if the dog is <= 2 years old, 
humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old 
(which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs 
(you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = function (dogsAges) {
//   const humanAge = dogsAges.map(function (age) {
//     if (age <= 2) {
//       return 2 * age;
//     } else {
//       return 16 + age * 4;
//     }
//   });

//   //adult
//   const adult = humanAge.filter(function (age) {
//     return age >= 18;
//   });
//   //average human age
//   const averageHuman = adult.reduce((acc, age) => acc + age, 0) / adult.length;
//   //   return averageHuman;
//   //   console.log(humanAge);
//   //   console.log(adult);
//   //   console.log(averageHuman);
//   return averageHuman;
// };

/**
 * Rewrite the 'CalcAverageHumanAge' function
 * from the previous challenge, but this
 * time as an arrow function, and
 * using chaining!
 */
const calcAverageHumanAge = function (dogsAges) {
  const humanAge = dogsAges
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return humanAge;
};
const dataSet1 = [5, 2, 4, 1, 15, 8, 3];
const dataSet2 = [16, 6, 10, 5, 6, 1, 4];
const average1 = calcAverageHumanAge(dataSet1);
const average2 = calcAverageHumanAge(dataSet2);
console.log(average1, average2);
