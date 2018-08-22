$(document).ready(function () {
    // toutes les 5 secondes la fonction next est lancée
    timer = window.setTimeout(next, 5000);
    // a chaque clic sur la fleche de droite, la fonction next est lancee
    $('.arrow-next').click(function () {
        next();
    });
    // a chaque clic sur la fleche de gauche, la fonction previous est lancee
    $('.arrow-previous').click(function() {
        previous();
    })

    function next() {
        // on cree une variable qui correspond au li qui par defaut a la classe current
        var currentSlide = $('.slide__item.current');

        // on cree une variable qui va chercher le prochain element li par rapport au current
        var nextSlide = currentSlide.next();

        // on enleve la classe current au li qui la possedait deja
        // on applique une methode native de jQuery, fadeOut pour animer le changement
        currentSlide.fadeOut(300).removeClass('current');

        // on applique la classe current au prochain element li
        // on applique une methode native de jQuery, fadeIn pour animer le changement
        nextSlide.fadeIn(200).addClass('current');
        // s'il n'existe pas d'element li suivant, on revient sur le premier element li et on lui applique la classe current
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
