(function ($) {

    $('a#play').on('click', function (event) {
        alert('hra zacina, priprav se')
        // $('html,body').animate({ scrollTop: $(this.hash).offset().top });
    })

    $('#play').on('click', function (event) {
        console.log('kliknul na play');
    });

})(jQuery);