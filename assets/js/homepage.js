    const SCROLLHEADINGTABLE = document.getElementById('hpHeadingScrollAppear1');
    const SCROLLTABLE = document.getElementById('hpScrollAppear1');

    window.addEventListener("scroll", headingAppearByScroll);

    function headingAppearByScroll() {
        if (window.scrollY >= 300) {
            SCROLLHEADINGTABLE.style.opacity = '1';
            SCROLLHEADINGTABLE.style.transform = 'translateY(0px)';
            SCROLLHEADINGTABLE.style.transition = '1s ease-in-out';
        }

        else {
            SCROLLHEADINGTABLE.style.opacity = '0';
            SCROLLHEADINGTABLE.style.transform = 'translateY(70px)';
        }
    }

    window.addEventListener("scroll", gameDetailsAppearByScroll);

    function gameDetailsAppearByScroll() {
         if (window.scrollY >= 300) {
            SCROLLTABLE.style.opacity = '1';
            SCROLLTABLE.style.transform = 'translateY(0px)';
            SCROLLTABLE.style.transition = '1s ease-in-out 0.5s';
        }

        else {
            SCROLLTABLE.style.opacity = '0';
            SCROLLTABLE.style.transform = 'translateY(70px)';
        }
    }
    gameDetailsAppearByScroll();


const SCROLLHEADINGTEAMS = document.getElementById('hpHeadingScrollAppear2');
const SCROLLTEAMS = document.getElementById('hpScrollAppear2');

window.addEventListener("scroll", headingAppearByScroll2);

    function headingAppearByScroll2() {
        if (window.scrollY >= 900) {
            SCROLLHEADINGTEAMS.style.opacity = '1';
            SCROLLHEADINGTEAMS.style.transform = 'translateY(0px)';
            SCROLLHEADINGTEAMS.style.transition = '1s ease-in-out';
        }

        else {
            SCROLLHEADINGTEAMS.style.opacity = '0';
            SCROLLHEADINGTEAMS.style.transform = 'translateY(70px)';
        }
    }

headingAppearByScroll2();

window.addEventListener("scroll", appearByScroll2);

    function appearByScroll2() {
        if (window.scrollY >= 900) {
            SCROLLTEAMS.style.opacity = '1';
            SCROLLTEAMS.style.transform = 'translateY(0px)';
            SCROLLTEAMS.style.transition = '1s ease-in-out 0.5s';
        }

        else {
            SCROLLTEAMS.style.opacity = '0';
            SCROLLTEAMS.style.transform = 'translateY(70px)';
        }
    }
    console.log(window.scrollY);
appearByScroll2();