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
        speed: 1000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    })
    $('.header__profile').on('click', () => {
        $('.header__profiles').toggleClass('active')
        $('.header__arrow').toggleClass('header__arrow_active')
        if ($('.header__profiles').hasClass('active')) {
            $('.header__profiles').slideDown('fast')
        } else {
            $('.header__profiles').slideUp('fast')
        }
    })
    $('.header__nick_other').each(function () {
        $(this).on('click', () => {
            $('.header__nick_selected').text($(this).text())
        })
    })
    $('.header__burger').on('click', () => {
        $('.header__mobile').toggleClass('active')
        $('.header__burger').toggleClass('header__burger_active')
        $('body').toggleClass('body__scroll')
        $('br').remove()
        if ($('.header__mobile').hasClass('active')) {
            setTimeout(function () {
                $('.header').attr('id', 'active')
            }, 400)
        } else {
            $('.header').removeAttr('id','active')
        }
    })

})

