const modalMenus = document.querySelectorAll('.modal-menu');
const modalBlur = document.querySelector('.modal-blur');
const modalMenuDesktop = document.querySelector('.modal-menu--desktop');
const btnBurger = document.querySelector('.menu__header-item--button-burger');
const btnsCall = document.querySelectorAll('.menu__header-item--button-call');
const btnsFeedback = document.querySelectorAll('.menu__header-item--button-feedback');
const body = document.querySelector('.body');

function modalMenuOn(modalMenu) {
	modalBlur.classList.add('modal-blur--on');

	if (modalMenu.classList.contains('modal-extra')) {
		modalMenu.classList.add('modal-extra--is-on');
		body.classList.add('body--no-scroll');

		// здесь я не придумал, как в css перекрывать основное меню
		// без инлайновых стилей...
		modalMenuDesktop.classList.add('modal-menu--z40');
	} else {
		modalMenu.classList.add('modal-menu--is-on');
	}
}

function modalMenuOff(modalMenu, blurOff) {
	if (blurOff) {
		modalBlur.classList.remove('modal-blur--on');
	}
	modalMenu.classList.remove('modal-menu--is-on', 'modal-extra--is-on');
	modalMenuDesktop.classList.remove('modal-menu--z40');
	body.classList.remove('body--no-scroll');
}

const createOpenBtnHandler = function (button, modalMenu) {
	button.addEventListener('click', function () {
		modalMenuOn(modalMenu);
	});
};

const createCloseBtnHandler = function (modalMenu) {
	const closeBtn = modalMenu.querySelector('.menu__header-item--button-close');

	closeBtn.addEventListener('click', function () {
		const isDesktop = modalMenu.classList.contains('modal-menu--desktop');
		const isDesktopOn = modalMenuDesktop.classList.contains('modal-menu--is-on');
		const isExtra = modalMenu.classList.contains('modal-extra');
		const isExtraOn = modalMenu.classList.contains('modal-extra--is-on');

		const blurOff = (isExtra && !isDesktopOn) || (isDesktop && !isExtraOn);

		modalMenuOff(modalMenu, blurOff);
		console.log('AFTER\nisDesktop: ' + isDesktop + '\nisDesktopOn: ' + isDesktopOn + '\nisExtra: ' + isExtra + '\nisExtraOn: ' + isExtraOn);
	});

	modalBlur.addEventListener('click', function () {
		modalMenuOff(modalMenu, true);
	});

	window.addEventListener('keydown', (evt) => {
		if (evt.key === 'Escape') {
			modalMenuOff(modalMenu, true);
		}
	});
};

// creating handlers
createOpenBtnHandler(btnBurger, modalMenuDesktop);

btnsFeedback.forEach((btnFeedback) => {
	const modalFeedback = document.querySelector('.modal-extra--feedback');

	createOpenBtnHandler(btnFeedback, modalFeedback);
});

btnsCall.forEach((btnCall) => {
	const modalCall = document.querySelector('.modal-extra--call');

	createOpenBtnHandler(btnCall, modalCall);
});

modalMenus.forEach((modalMenu) => {
	createCloseBtnHandler(modalMenu);
});
