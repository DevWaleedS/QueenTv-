// Initialize AOS:
AOS.init();
/** ------------------------------------------------------------------ */

// Initialize Email.js
emailjs.init('I_JcNXLdcJw8Q4j6j');
/** ------------------------------------------------------------------ */

// create a new email
let emailInput = document.querySelector('input[type="email"]');
let phoneInput = document.querySelector('input[type="tel"]');
let downloadBtn = document.querySelector('.download-btn');
let submitBtn = document.querySelector('button[type="submit"]');
let form = document.querySelector('form');

/** ------------------------------------------------------------------ */

form.addEventListener('submit', (event) => {
	event.preventDefault();
	submitBtn.value = 'جاري الارسال...';
	let params = {
		email: emailInput.value,
		phone: phoneInput.value,
	};

	const serviceID = 'default_service';
	const templateID = 'template_f117alt';

	emailjs.send(serviceID, templateID, params).then(
		() => {
			emailInput.value = '';
			phoneInput.value = '';

			alert('تم ارسال رابط التحميل علي البريد الالكتروني');
			
		},
		(err) => {
			submitBtn.value = 'الحصول علي الرابط';
			alert(JSON.stringify(err));
		}
	);
});

/**----------------------------------------------------------------------------------------*/
