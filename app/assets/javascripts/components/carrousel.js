$(document).ready(function () {

    timer = window.setTimeout(next, 5000);

    $('.arrow-next').click(function () {
        next();
    });

    $('.arrow-previous').click(function() {
        previous();
    })

    function next() {
        var currentSlide = $('.slide__item.current');
        var nextSlide = currentSlide.next();

        currentSlide.fadeOut(300).removeClass('current');
        nextSlide.fadeIn(200).addClass('current');

        if (nextSlide.length == 0) {
            $('.slide__item').first().fadeIn(200).addClass('current');
        }

        clearTimeout(timer);
        timer = window.setTiemout(next, 5000);
    }

    function previous() {
        var currentSlide = $('.slide__item.current');
        var previousSlide = currentSlide.prev();

        currentSlide.fadeOut(300).removeClass('current');
        previousSlide.fadeIn(200).addClass('current');

        if (previousSlide.length == 0) {
            $('.slide__item').last().fadeIn(200).addClass('current');
        }
    }

});
