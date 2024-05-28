// html swiper init:
// swiper global wrapper must have class '.repair-list'
// swiper wrapper must have class '.repair-list__wrapper'
// swiper card must have class '.repair-list__card'

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Initialize swipers only for screens below 768px wide
if (window.innerWidth < 768) {
	let swipers = document.querySelectorAll('.repair-list');
	let wrappers = document.querySelectorAll('.repair-list__wrapper');
	let swiperPaginations = document.querySelectorAll('.swiper-pagination');

	wrappers.forEach((wrapper) => {
		wrapper.classList.add('swiper-wrapper');
		wrapper.classList.remove('repair-list__wrapper');
	});

	swiperPaginations.forEach((pag) => {
		pag.hidden = false;
	});

	// init each found wrapper separately for calculating card width
	// and proper scroll distance calculation
	swipers.forEach((swiper) => {
		let cardWidth = swiper.querySelector('.repair-list__card').scrollWidth;

		new Swiper(swiper, {
			modules: [Pagination],
			direction: 'horizontal',
			slidesOffsetBefore: 16,
			slidesOffsetAfter: 16,
			slideClass: 'repair-list__card',
			pagination: {
				el: '.swiper-pagination',
			},
			spaceBetween: 16,

			// this calculates the distance a slide should move
			// depending on screen width on document load
			// slidesPerView = (screen width + spaceBetween) / scroll distance
			// 2 in the end is width of left-right borders of 1px each
			slidesPerView: (window.innerWidth + 16) / (cardWidth + 16 + 2),
		});
	});
}
