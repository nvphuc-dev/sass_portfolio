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