$(document).ready(function() {

    $('.arrow-next').click(function() {
        var currentSlide = $('.slide__item.current');
        var nextSlide = currentSlide.next();

        currentSlide.fadeOut(200).removeClass('current');
        nextSlide.fadeIn(200).addClass('current');

        if(nextSlide.length == 0) {
            $('.slide__item').first().fadeIn(200).addClass('current');
        }
    });

    $('.arrow-previous').click(function() {
        var currentSlide = $('.slide__item.current');
        var previousSlide = currentSlide.prev();

        currentSlide.fadeOut(200).removeClass('current');
        previousSlide.fadeIn(200).addClass('current');

        if(previousSlide.length == 0) {
            $('.slide__item').last().fadeIn(200).addClass('current');
        }
    });

    setTimeout(function(){
        var currentSlide = $('.slide__item.current');
        var nextSlide = currentSlide.next();

        currentSlide.fadeOut(200).removeClass('current');
        nextSlide.fadeIn(200).addClass('current');

        if(nextSlide.length == 0) {
            $('.slide__item').first().fadeIn(200).addClass('current');
        };

    }, 5000);
});
