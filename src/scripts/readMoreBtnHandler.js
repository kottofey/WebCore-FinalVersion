const moreBtn = document.querySelector('.article__content--read-next');
const list = document.querySelector('.article__content');

const createMoreBtnHandler = function (button) {
	button.addEventListener('click', function () {
		let isExpanded = moreBtn.classList.contains('article__content--read-less');

		list.style.height = `${list.scrollHeight}px`;
		moreBtn.textContent = 'Свернуть';
		moreBtn.classList.toggle('article__content--read-less');

		if (isExpanded) {
			list.style.height = '200px';
			moreBtn.textContent = 'Читать далее';
		}
		console.log('expanded:' + isExpanded);
	});
};

createMoreBtnHandler(moreBtn);
