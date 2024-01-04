/* 
Julia and Kate are still studying dogs, and this time they are studying 
if dogs are eating too much or too little. Eating too much means the 
dog's current food portion is larger than the recommended portion, 
and eating too little is the opposite. Eating an okay amount means the 
dog's current food portion is within a range 10% above and 10% below 
the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, 
calculate the recommended food portion and add it to the object 
as a new property. Do NOT create a new array, simply loop over 
the array. Forumla: recommendedFood = weight ** 0.75 * 28. 
(The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too 
much or too little. HINT: Some dogs have multiple owners, so you 
first need to find Sarah in the owners array, and so this one is 
a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too 
much ('ownersEatTooMuch') and an array with all owners of dogs who 
eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., 
like this: "Matilda and Alice and Bob's dogs eat too much!" 
and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY 
the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY 
amount of food (just true or false)
7. Create an array containing the dogs that are eating an 
OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by 
recommended food portion in an ascending order (keep in mind 
that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, 
you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended 
portion means: current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% 
of the recommended portion.
*/

//TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

/**
 * Solution 1
 */

dogs.forEach((dog) => (dog.recomFood = Math.trunc(dog.weight ** 0.75 * 28)));
// console.log(dogs);

/**
 * Solution 2
 * Dog's Sarah
 */

const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log("******************************************");
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eaten too ${
//     dogSarah.curFood > dogSarah.recomFood ? "much." : "little."
//   }`
// );

/**
 * Solution 3
 * Dogs Eat Too Much
 */

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recomFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recomFood)
  .map((dog) => dog.owners)
  .flat();
console.log(ownersEatTooLittle);

/**
 * Solution 4
 * Creating a string
 * "Matilda, Alice and Bob's dogs eat too much!"
 * "Sarah, John and Micheal's dogs eat too little!"
 */
console.log(`${ownersEatTooMuch.join(" and ")}'s dog eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dog eat too Little!`);

/**
 * Solution 5
 * Exactly the amount of food that is recommended
 * Some method will return true if at least one
 * of the element in the array satisfy the condition
 */

console.log(dogs.some((dog) => dog.curFood === dog.recomFood));

/**
 * Solution 6
 * OKAY amount of fodd that is recommended
 * current > (recomFood * 0.90) &&
 * current < (recomFood * 1.10)
 */

const checkEatingOkay = (dog) =>
  dog.curFood > dog.recomFood * 0.9 && dog.curFood < dog.recomFood * 1.1;
console.log(dogs.some(checkEatingOkay));
// console.log(
//   dogs.some(
//     (dog) =>
//       dog.curFood > dog.recomFood * 0.9 && dog.curFood < dog.recomFood * 1.1
//   )
// );

/**
 * Solution 7
 * Dogs that are eating an OKAY amount of food
 */

console.log(dogs.filter(checkEatingOkay));
/**
 * Solution 8
 * Sort it by recommended food portion in an ascending order
 */

const dogsCopy = dogs.slice().sort((a, b) => a.recomFood - b.recomFood);
console.log(dogsCopy);
