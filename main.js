const preloaderWindow = Array.from(document.querySelectorAll(".preloader"));
window.onload = function () {
    setTimeout(function () {
        preloaderWindow[0].classList.add('pre');
        setTimeout(function () {
            preloaderWindow[0].classList.add('dn');
        }, 200);
    }, 300);
}

let vibrateLink = Array.from(document.querySelectorAll('a'));
for (let linktup of vibrateLink) {
    linktup.addEventListener('click', function() {
        navigator.vibrate([100, 100]);
    }, true);
}

const colorText = Array.from(document.querySelectorAll(".navbar__item"));
let counter = 1;

for (let arr of colorText) {
    arr.addEventListener("mouseenter", function() {
        switch (counter) {
            case 1:
                arr.style.color = "#fc5f45";
                break;
            case 2:
                arr.style.color = "#38c695";
                break;
            case 3:
                arr.style.color = "#feb960";
                break;
            case 4:
                arr.style.color = "#b27cf5";
                counter = 0;
                break;
        }
        counter++;

    }, "false");
    arr.addEventListener("mouseleave", function() {
        arr.style.color = '#262732d9';
    }, "false");

}



(function () {
    const navbar = document.querySelector('.c-header__navbar')
    const navbarBtn = document.querySelector('.hamburger-menu');
    const bar = document.querySelector('.bar')
    navbarBtn.addEventListener('click', function () {
        navbar.classList.toggle('opened');
        bar.classList.toggle('animate')
    } )
    navbar.addEventListener('click', function () {
        navbar.classList.toggle('opened');
        bar.classList.toggle('animate')
    })
})()

