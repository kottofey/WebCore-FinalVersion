const modalMenus = document.querySelectorAll('.modal-menu');
const modalBlur = document.querySelector('.modal-blur');
const modalMenuDesktop = document.querySelector('.modal-menu--desktop');
const btnBurger = document.querySelector('.menu__header-item--button-burger');
const btnsCall = document.querySelectorAll('.menu__header-item--button-call');
const btnsFeedback = document.querySelectorAll('.menu__header-item--button-feedback');

function modalMenuOn(modalMenu) {
	modalBlur.classList.add('modal-blur--on');
	if (modalMenu.classList.contains('modal-extra')) {
		modalMenu.classList.add('modal-extra--is-on');
	} else {
		modalMenu.classList.add('modal-menu--is-on');
	}
}

function modalMenuOff(modalMenu) {
	modalBlur.classList.remove('modal-blur--on');
	modalMenu.classList.remove('modal-menu--is-on', 'modal-extra--is-on');
}

const createOpenBtnHandler = function (button, modalMenu) {
	button.addEventListener('click', function () {
		modalMenuOn(modalMenu);
	});
};

const createCloseBtnHandler = function (modalMenu) {
	const closeBtn = modalMenu.querySelector('.menu__header-item--button-close');

	closeBtn.addEventListener('click', function () {
		modalMenuOff(modalMenu);
		console.log('btn close');
	});
	modalBlur.addEventListener('click', function () {
		modalMenuOff(modalMenu);
		console.log('blur off');
	});
	window.addEventListener('keydown', (evt) => {
		if (evt.key === 'Escape') {
			modalMenuOff(modalMenu);
			console.log('esc off');
		}
	});
};

// creating handlers
createOpenBtnHandler(btnBurger, modalMenuDesktop);

modalMenus.forEach((modalMenu) => {
	createCloseBtnHandler(modalMenu);
});

btnsFeedback.forEach((btnFeedback) => {
	const modalFeedback = document.querySelector('.modal-extra--feedback');
	createOpenBtnHandler(btnFeedback, modalFeedback);
});

btnsCall.forEach((btnCall) => {
	const modalCall = document.querySelector('.modal-extra--call');
	createOpenBtnHandler(btnCall, modalCall);
});
