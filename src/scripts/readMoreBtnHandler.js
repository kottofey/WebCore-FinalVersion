const readMoreBtn = document.querySelector('.article__content--read-next');
const article = document.querySelector('.article__content');

const createMoreBtnHandler = function (button, content) {
	button.addEventListener('click', function () {
		let isExpanded = button.classList.contains('article__content--read-less');

		content.style.height = `${content.scrollHeight}px`;
		button.textContent = 'Свернуть';
		button.classList.toggle('article__content--read-less');

		if (isExpanded) {
			content.style.height = '200px';
			button.textContent = 'Читать далее';
		}
	});
};

createMoreBtnHandler(readMoreBtn, article);
