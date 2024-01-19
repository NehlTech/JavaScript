'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/********* LECTURES ***********************/

// Getting all the element of the document

console.log('********* All Document Element *********');
console.log(document.documentElement);
console.log(document.head); // Getting the head element
console.log(document.body);

// Using querySelector
console.log('******** Using Query Selector *******');
const header = document.querySelector('.header'); // Selecting a class header
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// Using getElement
console.log(document.getElementById('section--1')); // Getting by id section--1
const allButtons = document.getElementsByTagName('button'); // Getting element by tag specific
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

// Creating and Inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  "We use cookies for improved functionality and analytics. <button class= 'btn btn-close-cookie'>Got it!</button> ";
// header.prepend(message); // prepend inserts or append the element as the first child
header.append(message); // append inserts or append the element as the last child

// Deleting elements
document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

/******** STYLES, ATTRIBUTES AND CLASSES */

//  Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// You can use the getComputedStyle to get the actual
// thing that the browser is displaying

console.log(getComputedStyle(message).color); //Output: rgb(187, 187, 187)
console.log(getComputedStyle(message).height); //Output: 48.2344px -- a string value

// Converting the string to a number
const height = parseFloat(getComputedStyle(message).height, 10);
console.log(height); //Output: 48.2344 -- a number

const height2 = parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(height2);

const height3 =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(height3);

message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Using javasScript and setProperty to change the style
// Changing the style of a property
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);

// Not standard attributes
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('Company', 'Bankist');
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('a');
logo.classList.remove('b');
logo.classList.toggle('c');
logo.classList.contains('d');

// Scrolling from the button to one section
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//finding the coordinates of a page or section
btnScrollTo.addEventListener('click', function (e) {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());

  // console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  /*window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );*/

  // Making it better and smooth transitioning

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  //Using modern way to scroll
  section1.scrollIntoView({ behavior: 'smooth' });
});

/********** Events **************/

// Mouse enter
// const h1 = document.querySelector('h1');
// const alertH1 = function () {
//   alert('AddEventListener: Great! You are reading the heading tag');
// };
// h1.addEventListener('mouseenter', alertH1);

// Removing an envent listener
// h1.removeEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// Old way of doing the same thing

// h1.onmouseenter = function () {
//   alert('onmouseenter: Great! You are reading the heading tag');
// };

// Event Propagation

//rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
});

///////////////////////////////////////////////////////
// Page Navigation using the old way
// document.querySelectorAll('.nav__link').forEach(function (item) {
//   item.addEventListener('click', function (e) {
//     e.preventDefault(); //to prevent the default behavior of the '#' selector
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Page navigation using bubbling
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});
