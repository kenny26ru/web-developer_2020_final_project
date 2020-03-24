$(document).ready(function(){   

	// $('#consultation form').validate({
	// 	rules: {
	// 		name: {
	// 			required: true,
	// 			maxlength: 15,
	// 			minlength: 2,
	// 		},
	// 		phone: "required",
	// 		email: {
	// 			required: true,
	// 			email: true,
				
	// 		}
	// 	},
	// 	messages: {
	// 		name: {
	// 			required: "Пожалуйста, введите свое имя",
	// 			maxlength: jQuery.validator.format("Введите не более 15 символов"),
	// 			minlength: jQuery.validator.format("Введите более 2 символов")
	// 		},
	// 		phone: "Пожалуйста, введите свой номер телефона",
	// 		email: {
	// 			required: "Пожалуйста, введите свой E-mail",
	// 			email: "Неверный формат. Наример: name@domain.com"
	// 		}
	// 	}
	// });


	let orderCallForm = '#consultation form';
	let consultationForm = '#consult-form';
	let orderForm = '#order form';

	function validateForm (validClass){
		$(validClass).validate({
			rules: {
				name: {
					required: true,
					maxlength: 15,
					minlength: 2,
				},
				phone: "required",
				email: {
					required: true,
					email: true,
					
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите свое имя",
					maxlength: jQuery.validator.format("Введите не более 15 символов"),
					minlength: jQuery.validator.format("Введите более 2 символов")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
					required: "Пожалуйста, введите свой E-mail",
					email: "Неверный формат. Наример: name@domain.com"
				}
			}
		});
	};

	validateForm(orderCallForm);
	validateForm(consultationForm)
	validateForm(orderForm)

})