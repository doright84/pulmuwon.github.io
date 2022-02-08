$(document).ready(function () {
    // 안내창 닫기
    $('.modal').click(function () {
        $('.modal').fadeOut();
    });
    // gotop---------
    $(".gotop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) { // 400이 넘어가면 고 탑이 슬라이드 다운으로 보이고 아니면 다시 fade out으로 사라짐.
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });
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
        slidesPerGroup: 4,
        autoplay: {
            delay: 4000,
            // disableOnInteraction: false,
        },
        pagination: {
            el: '.log-pg',
            clickable: true,
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

    // 베스트제품 오렌지박스
    let box = $('.orange-box');
    var menu = $('.best-list li');
    var menu_txt = $('.best-list>li>a>p');
    $.each(menu, function (index, item) {
        $(this).click(function () {
            box.css({
                top: index * 55
            });
        });

    });
    menu.click(function () {
        $(this).find(menu_txt).addClass('text-on')
        $(this).siblings().find(menu_txt).removeClass('text-on');
    });

});