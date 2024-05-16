const moreBtn = document.querySelector('.brands-repair-list__more-btn');
const list = document.querySelector('.brands-repair-list__wrapper');

const createMoreBtnHandler = function (button) {
	button.addEventListener('click', function () {
		let isExpanded = moreBtn.classList.contains('brands-repair-list__less-btn');

		list.style.height = `${list.scrollHeight}px`;
		moreBtn.textContent = 'Свернуть';
		moreBtn.classList.toggle('brands-repair-list__less-btn');

		if (isExpanded) {
			list.style.height = '170px';
			moreBtn.textContent = 'Показать все';
		}
	});
};

if (window.innerWidth >= 768) {
	createMoreBtnHandler(moreBtn);
}
