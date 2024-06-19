'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   // console.log('thisi is');
//   request.addEventListener('load', () => {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);

//     const html = `
//   <article class="country">
//   <img class="country__img" src="${data.flags['png']}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name['common']}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       Number(data.population) / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${
//       Object.values(data.languages)[0]
//     }</p>
//     <p class="country__row"><span>💰</span>${
//       Object.values(data.currencies)[0].name
//     }</p>
//   </div>
// </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

const renderCountry = function (data, className = '') {
  const name = data.name.common;
  const flag = data.flags.svg;
  const region = data.region;
  const language = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;

  const html = `
    <article class="country ${className}">
    <img class="country__img" src="${flag}" />
    <div class="country__data">
      <h3 class="country__name">${name}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${(
        Number(data.population) / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>  
    `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // Ajax call 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', () => {
//     const [data] = JSON.parse(request.responseText);
//     // console.log(data);

//     // Render Country
//     renderCountry(data);

//     // Get neighbour contry
//     const [neighbour] = data.borders;
//     console.log(neighbour);
//     if (!neighbour) return;
//     // Ajax call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     console.log(request2);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       // console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryAndNeighbour('USA');

// const request = fetch('https://restcountries.com/v3.1/name/ghana');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// Using ARROW FUNCTION

/**
 * Gets a country by url
 *
 * @param {*} country - The url of the country (string)
 * @returns {string} - The name of the country
 */

const getJSON = function (url, errMessage = 'Something went wrong') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) {
      throw new Error(`${errMessage} (${response.status})`);
    }
    return response.json();
  });
};
// Country 1
// const getCountryData = country =>
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'asddfefdf';
//       if (!neighbour) return;

//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Country not found ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥 💥 💥 💥`);
//       renderError(`Something went wrong 💥 💥  ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
const getCountryData = country =>
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'asddfefdf';
      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥 💥 💥 💥`);
      renderError(`Something went wrong 💥 💥  ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
// getCountryData('australia');
