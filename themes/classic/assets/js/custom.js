/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
$(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        slidesPerView: 4,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
    });
});

$(function () {
    $(".product-description").hover(function () {
        $(this).toggle(function () {
            $(this).width('70%');
        });
    });
});
