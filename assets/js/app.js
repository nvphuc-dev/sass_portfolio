const toggle = document.querySelector('.nav__toggle');
const ul = document.querySelector('.nav__list');
const body = document.querySelector('body');

// add click event on toggle
toggle.addEventListener('click', () => {
	body.classList.toggle('is-opened')
	toggle.classList.toggle('is-opened')
	ul.classList.toggle('is-opened');
});

// Name typewrite effect
const nameElement = document.querySelector('.header__title');
const nameText = nameElement.getAttribute('data-title');
let start = 0;

const typeWrite = () => {
	if(start < nameText.length){
		nameElement.innerHTML += nameText.charAt(start);
		start++;
		setTimeout(typeWrite, 100);
	}
}
typeWrite();

// Open/close modal
const modalBtn = document.querySelector('.js-modal-trigger');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
modalBtn.addEventListener('click', () => {
	modal.style.display = 'flex';
});
modalClose.addEventListener('click', () => {
	modal.style.display = 'none';
});

// get current year
const currentYear = new Date().getFullYear();
const year = document.querySelector('.js-current-year');
year.innerHTML = currentYear;

// Number of years of experience
const yearBasic = document.querySelector('.js-year-basic');
yearBasic.innerHTML = currentYear - 2017;
const yearNodejs = document.querySelector('.js-year-nodejs');
yearNodejs.innerHTML = currentYear - 2021;
const yearLaravel = document.querySelector('.js-year-laravel');
yearLaravel.innerHTML = currentYear - 2020;
const yearExperience = document.querySelector('.js-year-typescript');
yearExperience.innerHTML = currentYear - 2021;
const yearGit = document.querySelector('.js-year-git');
yearGit.innerHTML = currentYear - 2019;