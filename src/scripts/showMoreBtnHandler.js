const showMoreBtnBrands = document.querySelector('#brands');
const brandsList = document.querySelector('#brandsWrapper');

const showMoreBtnDevices = document.querySelector('#devices');
const devicesList = document.querySelector('#devicesWrapper');

const createMoreBtnHandler = function (button, content, initHeight) {
	button.addEventListener('click', function () {
		let isExpanded = button.classList.contains('repair-list__less-btn');

		content.style.height = `${content.scrollHeight}px`;
		button.textContent = 'Свернуть';
		button.classList.toggle('repair-list__less-btn');

		if (isExpanded) {
			content.style.height = initHeight;
			button.textContent = 'Показать все';
		}
	});
};

if (window.innerWidth >= 768) {
	createMoreBtnHandler(showMoreBtnBrands, brandsList, '170px');
	createMoreBtnHandler(showMoreBtnDevices, devicesList, '170px');
}
