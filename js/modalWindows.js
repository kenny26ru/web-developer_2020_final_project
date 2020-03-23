$(document).ready(function(){      
        
        $('[data-modal=consultation]').on('click', function(){
                $('.overlay, #consultation').fadeIn();
        });

        $('.modal__close').on('click', function() {
                $('.overlay, #consultation, #order, #message').fadeOut();
        });


        $('[data-modal=order]').on('click', function() {
                $('.overlay, #order').fadeIn();
        });

        $('.button_mini').each(function(i) {
                $(this).on('click', function() {
                        $('#order .modal__subtitle').text($('.catalog-item__subtitle').eq(i).text());
                        $('.overlay, #order').fadeIn();
                });
        });
});