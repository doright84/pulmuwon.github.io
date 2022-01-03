$(document).ready(function() {
    window.onload = function() {
        // swiper 슬라이드 관련
        new Swiper('.slide-main', {

            // 슬라이드 반복
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
                speed: 5000,
            },
            //로그인 슬라이드
        });
        new Swiper('.log-sw', {
            slidesPerView: 4,
            // 슬라이드 반복
           
            autoplay: {
                delay: 4000,
                // disableOnInteraction: false,
            },


        });
        new Swiper('.free-sw-main', {

            // 슬라이드 반복
            loop: true,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
                speed: 8000,
            },
            //로그인 슬라이드
        });
    }

});