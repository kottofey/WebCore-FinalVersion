// html swiper init procedure:
// swiper global wrapper must have class '.swiper'
// swiper wrapper must have class '.swiper__wrapper'
// swiper card must have class '.swiper__card'

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Initialize swipers only for screens below 768px wide
if (window.innerWidth < 768) {
	let swipers = document.querySelectorAll('.swiper');
	let wrappers = document.querySelectorAll('.swiper__wrapper');
	let swiperPaginations = document.querySelectorAll('.swiper-pagination');

	wrappers.forEach((wrapper) => {
		wrapper.className = 'swiper-wrapper';
	});

	swiperPaginations.forEach((pag) => {
		pag.hidden = false;
	});

	// init each found wrapper separately for calculating card width
	// and proper scroll distance calculation
	swipers.forEach((swiper) => {
		let cardWidth = swiper.querySelector('.swiper__card').scrollWidth;

		new Swiper(swiper, {
			modules: [Pagination],
			direction: 'horizontal',
			slidesOffsetBefore: 16,
			slidesOffsetAfter: 16,
			slideClass: 'swiper__card',
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
