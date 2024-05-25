const showMoreBtn = document.querySelector('.brands-repair-list__more-btn');
const list = document.querySelector('.brands-repair-list__wrapper');

const createMoreBtnHandler = function (button, content) {
	button.addEventListener('click', function () {
		let isExpanded = button.classList.contains('brands-repair-list__less-btn');

		content.style.height = `${content.scrollHeight}px`;
		button.textContent = 'Свернуть';
		button.classList.toggle('brands-repair-list__less-btn');

		if (isExpanded) {
			content.style.height = '170px';
			button.textContent = 'Показать все';
		}
	});
};

if (window.innerWidth >= 768) {
	createMoreBtnHandler(showMoreBtn, list);
}
