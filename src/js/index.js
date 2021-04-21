import "../scss/style.scss";
import moment from "moment";

// import {registerSW} from './pwa.js';
// registerSW();
const date = moment().format('L');
console.log(`HELLO 🚀 Date of today: ${date}`);

const name = "Tomek";
const age = 20;

//console.log(name);
//console.log(age);
// alert('halo halo');

function greet(name, age) {
  console.log(
    `Witam Cię na mojej biedackiej stronie. Jestem ${name}. Mam ${age} lat. I mam nadzieję, że w końcu posiądę tajemną wiedzę z dziedziny frontendu.`
  );
}
greet(name, age);

// FAT arrow function:
const secondGreet = (name, age) => {
  console.log(
    `Witam Cię na mojej biedackiej stronie. Jestem ${name}. Mam ${age} lat. I mam nadzieję, że w końcu posiądę tajemną wiedzę z dziedziny frontendu.`
  );
};
secondGreet("Zbysiu", 34);

const navDate = document.querySelector(".nav-date--js");
navDate.innerHTML = `${date}`;

const realHeading = document.querySelector(".header__real-article--js");
realHeading.innerHTML = `Strona przedstawia niezobowiązujące, pisane w luźnym tonie nowinki o ekipie z Madrytu. </br> PS: ten tekst pisałem JS'em tylko dlatego, że miałem takie zadanie.`;


const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation__open");
});
