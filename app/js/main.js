$(window).on("load" , function () {
    const swiper = new Swiper('.banner__slider', {
        navigation: {
            nextEl: '.banner__next',
            prevEl: '.banner__prev',
        },
        loop: true,
        autoplay: {
            delay: 5000,
        },
        speed: 500,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
    $('.header__profile').on('click', () => {
        $('.header__profiles').toggleClass('active')
        if ($('.header__profiles').hasClass('active')) {
            $('.header__profiles').slideDown('fast')
        } else {
            $('.header__profiles').slideUp('fast')
        }
    })
    $('.header__nick_other').each(function () {
        $(this).on('click', () => {
            const text = $(this).text()
            $('.header__nick_selected').text(text)
        })
    })
    $('.header__burger').on('click', () => {
        $('.header__mobile').toggleClass('active')
        $('.header__burger').toggleClass('header__burger_active')
        $('body').toggleClass('body__scroll')
        $('br').remove()
        if ($('.header__mobile').hasClass('active')) {
            setTimeout(function () {
                $('.header__numbers').addClass('header__numbers_active')
                $('.header__menu').addClass('header__menu_active')
                $('.header__contact').addClass('header__contact_active')
                $('.header__profile').addClass('header__profile_active')
            }, 400)
        } else {
            $('.header__numbers').removeClass('header__numbers_active')
            $('.header__menu').removeClass('header__menu_active')
            $('.header__contact').removeClass('header__contact_active')
            $('.header__profile').removeClass('header__profile_active')
        }
    })

})
$('.header').removeClass('header_hidden')
$('.banner').removeClass('banner_hidden')
$('.popular').removeClass('popular_hidden')


