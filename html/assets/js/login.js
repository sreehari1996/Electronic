document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.login-slider');
    if (slider) {
        $('.login-slider').slick({
            dots: true,
            arrows: false,
            autoplay:true,
            speed:500,
            autoplaySpeed:2000
        });
    }
});
