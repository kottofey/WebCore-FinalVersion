const submitForms = document.querySelectorAll('.modal-extra__form');

submitForms.forEach((submitForm) => {
	submitForm.addEventListener('submit', function () {
		alert('Form was sent!');
	});
});
