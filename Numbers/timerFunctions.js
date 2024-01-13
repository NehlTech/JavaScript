/**********************************
 * TIMER FUNCTIONS
 **********************************/

// SETTIMEOUT FUNCTION

/*let params = ["Software Developer", "London"];

console.log("Please submit your job application");
let timer = setTimeout(
  function (job, location) {
    console.log(
      `Your applicaiton for job ${job} for location ${location} has been submitted successfully!`
    );
  },
  3000,
  ...params
);

console.log("Processing...");

// Clearing the timer
// clearTimeout(timer);*/

/********************** OR *****************/
let food = ["Fufuo", "Banku"];
const foodTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...food
);
if (food.includes("Okoro")) clearTimeout(foodTimer);
// SETINTERVAL FUNCTION
let ti = setInterval(function () {
  let now = new Date();
  console.log(now);
}, 1000);
clearInterval(ti);
