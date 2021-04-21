import "../scss/style.scss";
import moment from "moment";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

// import {registerSW} from './pwa.js';
// registerSW();
const date = moment().format('L');
console.log(`HELLO 🚀 Date of today: ${date}`);

const navDate = document.querySelector(".nav-date--js");
navDate.innerHTML = `${date}`;

const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation__open");
});


const studyHeading = document.querySelector(".header__study-article--js");
studyHeading.innerHTML = `Najpierw mówi, że to co się da robić za pomocą HTML'a robimy HTML'em, a teraz każe pisać <strong> ten </strong> tekst za pomocą JS'a..`;


fetch('https://api.github.com/users/kos-tomasz/repos?sort=created&direction=asc')
.then(resp => resp.json())
.then(resp =>{
  for(let repo of resp){
    const {name, html_url} = repo;
    const reposList = document.querySelector('.article__list');
    const listItem = `
      <li>
        ${name} <a href="${html_url}" title="link do repozytorium ${name} na githubie">link</a>
      </li>`;
      reposList.innerHTML += listItem;
  }
})
.catch(error => {
  console.log('fetch error');
})