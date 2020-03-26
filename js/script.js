$(document).ready(function(){    

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

	// MASK FOR NUMBER PHONE
	$('input[name=phone]').mask("+7 (999) 999-99-99");

	
	// scroll 
	$(window).scroll(function(){
		if ($(this).scrollTop()>1600){
			$('.link_double-up').fadeIn();
			$('.link_up').fadeIn();
		} else {
			$('.link_double-up').fadeOut();
			$('.link_up').fadeOut();
		}
	});

	$("a[href^='#']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});	

})