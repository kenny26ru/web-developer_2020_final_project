$(document).ready(function(){
	$('.carousel__inner').slick({
			dots: false,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			prevArrow: '<button type="button" class="slick-prev"><span class="icon-angle-left-solid"></span></button>',
			nextArrow: '<button type="button" class="slick-next"><span class="icon-angle-right-solid"></span></button>',
			responsive: [
				{
					breakpoint: 991,
					settings: {
					  dots: false,
					  arrows: false
					},
				}
			]
		});

		

	})