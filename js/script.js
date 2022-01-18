'use strict';
import data from '../data.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
const burger = document.querySelector('.burger-menu');
const navContainer = document.querySelector('.nav__links');

if (burger) {
  burger.addEventListener('click', function () {
    this.classList.toggle('rotate');

    navContainer.classList.toggle('show-menu');
  });
}

///////////////////////////////  All selectors

// homepage-navigation
const navLinks = document.querySelectorAll('.nav__link');

// destination
const destinationNav = document.querySelector('.tab');
const allDestinationTabs = document.querySelectorAll('.tab__item');
const destinationContent = document.querySelector('.tab__content');
const destinationimg = document.querySelector('.destination__img-el');
// crew
const crewNav = document.querySelector('.tab--crew');
const allCrewNavBtns = document.querySelectorAll('.tab__item--circle');
const crewContent = document.querySelector('.tab--crew__content');
const crewImage = document.querySelector('.crew__img-el');
//tech
const techImg = document.querySelector('.tech__img-el');
const techNav = document.querySelector('.tech__tabs');
const allTechBtns = document.querySelectorAll('.tab__item--big-circle');
const techContent = document.querySelector('.fade-in');

////////////////////////////////
//////////////////////CODE:

//getting the destination data from the json
const destinationData = data.destinations;
if (destinationNav) {
  destinationNav.addEventListener('click', function (e) {
    //if its not a destination  tab then return otherwise continue !
    if (!e.target.classList.contains('tab__item')) return;
    //removing active tag ui
    allDestinationTabs.forEach(el => el.classList.remove('tab__item--active'));
    //adding active tag ui to the clicked tab
    e.target.classList.add('tab__item--active');

    const findElName = e.target.textContent.trim();

    const findDestinationData = destinationData.find(
      el => el.name === findElName
    );
    // changing the destination data
    destinationContent.innerHTML = `
    <div class="opacity-animation"> 
    <h3 class="heading--2 destination__name">${findDestinationData[`name`]}</h3>
            <p class="destination__desc">
            ${findDestinationData[`description`]}
            </p>
            <div class="destination__info">
              <div class="destination__dist">
                <p>Avg. distance</p>
                <p>${findDestinationData[`distance`]}</p>
              </div>
              <div class="destination__time">
                <p>Est. travel time</p>
                <p>${findDestinationData[`travel`]}</p>
              </div>
            </div>
            </div> 
    `;

    // creating new img
    //changing the  destination image
    destinationimg.classList.remove('fade-in');
    destinationimg.src = `${findDestinationData[`images`][`png`]}`;
  });
  destinationimg.addEventListener('load', function () {
    destinationimg.classList.add('fade-in');
  });
}
// getting the crew data from json
const crewData = data.crew;

if (crewNav) {
  crewNav.addEventListener('click', function (e) {
    // if clicked rather than button then return
    if (!e.target.classList.contains('tab__item--circle')) return;

    // removing active-tag from all the buttons
    allCrewNavBtns.forEach(el =>
      el.classList.remove('tab__item--circle--active')
    );
    // adding the active-tag on the clicked button
    e.target.classList.add('tab__item--circle--active');

    // now showing the preffered data

    // getting the desired index to fetch data
    const findIndex = +e.target.dataset.tab;

    // getting the data
    const data = crewData.at(findIndex);

    // replacing the data

    const html = `
    <div class="fade-in">
    <h4 class="heading--4 crew__rank">${data.role}</h4>
    <h3 class="heading--3 crew__name">${data.name}</h3>

    <p class="crew__desc">
    ${data.bio}
    </p>
    </div>
    
    `;
    crewContent.innerHTML = '';
    crewContent.insertAdjacentHTML('afterbegin', html);

    crewImage.src = `${data.images.png}`;
  });
}
const techData = data.technology;
const changeTechImg = function () {
  const activeTab = document.querySelector('.tab__item--big-circle-active');
  if (!activeTab) return;
  if (media.matches && techData) {
    techImg.setAttribute(
      'src',
      `${techData[`${activeTab.dataset.tab}`]?.images.landscape}`
    );
  } else {
    techImg.setAttribute(
      'src',
      `${techData[`${activeTab.dataset.tab}`]?.images.portrait}`
    );
  }
};

if (techNav) {
  techNav.addEventListener('click', function (e) {
    const clickedBtn = e.target.closest('.tab__item--big-circle');
    // in case the button was not clicked then it will generate null , so returning
    if (!clickedBtn) return;

    allTechBtns.forEach(btn =>
      btn.classList.remove('tab__item--big-circle-active')
    );

    clickedBtn.classList.add('tab__item--big-circle-active');

    // getting the desired index to fetch data
    const findIndex = +clickedBtn.dataset.tab;
    // getting the data
    const data = techData.at(findIndex);

    const markup = `
   
    <div class="fade-in">
    <h3 class="heading--3 tech__content--term-name">${data.name}</h3>
    <p class="tech__content--term-details">
      ${data.description}
    </p>
    </div>
    `;
    techContent.innerHTML = markup;
    changeTechImg();
  });
}

(function () {
  const pageName = document.body
    .getAttribute('class')
    .slice(0, 4)
    .toLowerCase();
  navLinks.forEach(item => {
    if (pageName === item.childNodes[1].textContent.toLowerCase().slice(0, 4)) {
      item.closest('.nav__items').classList.add('nav__items--active');
    }
  });
})();

const media = window.matchMedia('(max-width:768px)');
changeTechImg();

media.addEventListener('change', changeTechImg);
