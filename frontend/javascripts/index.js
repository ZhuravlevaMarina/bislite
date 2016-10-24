requirejs.config({
    baseUrl: './public/js'
});

define(["jquery", "domReady", "swiper.min"], function($) {
    "use strict";

    var Page = {
        init: function () {
            this.navigation();
        },
        navigation: function () {
            var navLink = $('.has-children');

            navLink.on('mouseenter', function () {
                $(this).find('.submenu').stop().slideDown('fast');
            });
            navLink.on('mouseleave', function () {
                $(this).find('.submenu').stop().slideUp('fast');
            });
        }
};

        var Homepage = {
            init: function () {
                this.carouselTop();
                this.carouselBottom();
            },
            carouselTop: function () {
                var swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    spaceBetween: 30
                });
            },
            carouselBottom: function () {
                var swiperBottom = new Swiper('.swiper-container-second', {
                    slidesPerView: 4,
                    slidesPerColumn: 1,
                    spaceBetween: 30,
                    nextButton: '.swiper-buttonnext',
                    prevButton: '.swiper-buttonprev'
                });
            }
        };

        Page.init();
        Homepage.init();

    });