import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

if (window.innerWidth <= 767) {
	let wrapper = document.querySelector('.brands-repair-list__wrapper');
	wrapper.classList.add('swiper-wrapper');
	wrapper.classList.remove('brands-repair-list__wrapper');

	document.querySelector('.swiper-pagination').hidden = false;

	const swiper = new Swiper('.brands-repair-list', {
		modules: [Pagination],
		direction: 'horizontal',
		slidesOffsetBefore: 16,
		slidesOffsetAfter: 16,
		slideClass: 'brands-repair-list__card',
		pagination: {
			el: '.swiper-pagination',
		},
		spaceBetween: 16,

		// this calculates the distance a slide should move
		// depending on screen width on document load
		// slidesPerView = (screen width + spaceBetween) / scroll distance
		slidesPerView: (window.innerWidth + 16) / (224 + 16),
	});
}
