$(document).ready(function () {
    for (let i = 0; i < 4; i++) {
        $(".player-card-" + [i]).mouseenter(function () {
            $('.player-card-' + [i]).children().slideDown(500);
        });
        $(".player-card-" + [i]).mouseout(function () {
            $('.player-card-' + [i]).children().slideUp(500);
        });
    }

    let anchor = document.querySelectorAll(".dropdown-btn-style");

    if($(window).width() <= 992){
        $(anchor).removeAttr("href").css({"text-align": "center", "color": "white"});
    }
});