$(window).on("load" , function () {
    $('form').attr('onsubmit', 'return false;')
    const bannerSwiper = new Swiper('.banner__slider', {
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
    const oftenSwiper = new Swiper('.often__products', {
        loop: true,
        speed: 500,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: '.often__next',
            prevEl: '.often__prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    })
    const recentlySwiper = new Swiper('.recently__products', {
        loop: true,
        speed: 500,
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.recently__next',
            prevEl: '.recently__prev',
        },
        breakpoints: {
            1044: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    })
    const alcoholSwiper = new Swiper('.alcohol__slider', {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        navigation: {
            nextEl: '.alcohol__next',
            prevEl: '.alcohol__prev',
        },
        pagination: {
            el: '.alcohol__pagination',
            clickable: true,
        },
    })
    const noveltySwiper = new Swiper('.novelty__products', {
        loop: true,
        speed: 500,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: '.novelty__next',
            prevEl: '.novelty__prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    })
    const customersSwiper = new Swiper('.customers__slider', {
        loop: true,
        speed: 500,
        slidesPerView: 1,
        navigation: {
            nextEl: '.customers__next',
            prevEl: '.customers__prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    })
    const recommendSwiper = new Swiper('.recommend__products', {
        loop: true,
        speed: 500,
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: '.recommend__next',
            prevEl: '.recommend__prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    })
    const cartRecommendSwiper = new Swiper('.cart-recommend__products', {
        loop: true,
        speed: 500,
        slidesPerView: 2,
        spaceBetween: 10,
        navigation: {
            nextEl: '.cart-recommend__next',
            prevEl: '.cart-recommend__prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    })
    $('.header__selected, .header__profile-links a').on('click', () => {
        $('.header__profile_down').toggleClass('header__profile_active')
    })
    $('.header__search input').on('click', () => {
        $('.header__search').toggleClass('header__search_active')
    })
    $('.old-price').each(function (index) {
        if ($(this).text().length >= 1) {
            $('.new-price').eq(index).addClass('discount')
        }
    })
    $('.header__menu-kind').each(function (index) {
        $(this).on('click', () => {
            $('.header__menu-kind').each(function () {
                $(this).removeClass('header__menu-kind_active')
            })
            $(this).addClass('header__menu-kind_active')
        })
    })
    $('.banner__a_background a').hover(() => {
        $('.banner__slide img').addClass('img_scale')
    })
    $('.banner__a_background a').mouseleave(() => {
        $('.banner__slide img').removeClass('img_scale')
    })
    $('.product__right').each(function (index) {
        $(this).on('click', () => {
            $('.product__right').eq(index).toggleClass('product__right_active')
        })
    })
    $('.alcohol-like').on('click', () => {
        $('.alcohol-like').toggleClass('alcohol-like_active')
    })
    const plus = function (plus, quantity) {
        $(plus).each(function (index) {
            $(this).on('click', () => {
                let count = parseInt(quantity.eq(index).text())
                count += 1
                quantity.eq(index).text(count)
            })
        })
    }
    const minus = function (minus, quantity) {
        $(minus).each(function (index) {
            $(this).on('click', () => {
                if (parseInt(quantity.eq(index).text()) > 1) {
                    let count = parseInt(quantity.eq(index).text())
                    count -= 1
                    quantity.eq(index).text(count)
                }
            })
        })
    }
    minus($('.alcohol__minus'), $('.alcohol__calculator h4'))
    minus($('.cart__minus'), $('.cart__calculator h4'))
    plus($('.alcohol__plus'), $('.alcohol__calculator h4'))
    plus($('.cart__plus'), $('.cart__calculator h4'))
    $('.about__tab').each(function (index) {
        $(this).on('click', () => {
            $('.about__tab').each(function () {
                $(this).removeClass('about__tab-active')
            })
            $('.about__tab').eq(index).addClass('about__tab-active')
            $('.about__content').each(function () {
                $(this).removeClass('about__content_active')
            })
            $('.about__content').eq(index).addClass('about__content_active')
        })
    })
    $('.contact__mark').on('click', () => {
        $('.contact__mark').toggleClass('contact__mark_active')
    })
    $('.text__anchors-all a').each(function (index) {
        $(this).on('click', () => {
            $('.text__anchors-all a').removeClass('text__anchor_active')
            $('.text__anchors-all a').eq(index).addClass('text__anchor_active')
        })
    })
    $('.ordering__pay-way').each(function () {
        $(this).on('click', () => {
            $('.ordering__pay-way').each(function () {
                $(this).removeClass('ordering__pay-way_active')
            })
            $(this).toggleClass('ordering__pay-way_active')
        })
    })
    $('.ordering__delivery-way').each(function (index) {
        $(this).on('click', () => {
            $('.ordering__delivery-way').each(function () {
                $(this).removeClass('ordering__delivery-way_active')
            })
            $('.ordering__delivery-down').each(function () {
                $(this).removeClass('ordering__delivery-down_active')
            })
            $('.ordering__delivery-down').eq(index).addClass('ordering__delivery-down_active')
            $(this).toggleClass('ordering__delivery-way_active')
        })
    })
    $('.header__cart').on('click', () => {
        $('.cart').addClass('cart_active')
    })
    $('.cart__close').on('click', () => {
        $('.cart').removeClass('cart_active')
    })
    $('.cart__background').on('click', () => {
        $('.cart').removeClass('cart_active')
    })
    $('.cart__remove').each(function (index) {
        $(this).on('click', () => {
            $('.cart__product').eq(index).addClass('cart__product_hide')
        })
    })
    $('.alcohol__promo-button').on('click', () => {
        $('.promo').addClass('promo_active')
    })
    $('.promo-background, .promo__close').on('click', () => {
        $('.promo').removeClass('promo_active')
    })
    $('.contact__button').on('click', () => {
        $('.request').addClass('request_active')
    })
    $('.request-background, .request__close').on('click', () => {
        $('.request').removeClass('request_active')
    })
    $('.header__logout').on('click', () => {
        $('.log').addClass('log_active')
    })
    $('.log__exit').on('click', () => {
        $('.log').removeClass('log_active')
    })
    $('.log-enter-email').on('click', () => {
        $('.log__popup').each(function () {
            $(this).removeClass('log__popup_active')
        })
        $('.log__email').addClass('log__popup_active')
    })
    $('.log-enter-tel').on('click', () => {
        $('.log__popup').each(function () {
            $(this).removeClass('log__popup_active')
        })
        $('.log__tel').addClass('log__popup_active')
    })
    $('.log-enter-forget-first').on('click', () => {
        $('.log__popup').each(function () {
            $(this).removeClass('log__popup_active')
        })
        $('.log__forget-first').addClass('log__popup_active')
    })
    $('.log-enter-forget-second').on('click', () => {
        $('.log__popup').each(function () {
            $(this).removeClass('log__popup_active')
        })
        $('.log__forget-second').addClass('log__popup_active')
    })
    $('.log-recall').on('click', () => {
        $('.log__popup').each(function () {
            $(this).removeClass('log__popup_active')
        })
        $('.log__tel').addClass('log__popup_active')
    })
    $('.log-enter-register-second').on('click', () => {
        $('.log__popup').each(function () {
            $(this).removeClass('log__popup_active')
        })
        $('.log__register-second').addClass('log__popup_active')
    })
    $('.enter-log-tel').on('click', () => {
        $('.log__popup').each(function () {
            $(this).removeClass('log__popup_active')
        })
        $('.log__tel').addClass('log__popup_active')
    })
    $('.log-enter-register-first').on('click', () => {
        $('.log__popup').each(function () {
            $(this).removeClass('log__popup_active')
        })
        $('.log__register-first').addClass('log__popup_active')
    })
    $('.log__mark').on('click', () => {
        $('.log__mark').toggleClass('log__mark_passive')
    })
    $('.log-done').on('click', () => {
        $('.log').removeClass('log_active')
    })
    let slide = true
    $('.cabinet-order-arrow').each(function (index) {
        $(this).on('click', () => {
            if (slide === true) {
                $('.cabinet-order-arrow').eq(index).toggleClass('cabinet-order-arrow_active')
                if ($('.cabinet-order-arrow').eq(index).hasClass('cabinet-order-arrow_active')) {
                    $('.cabinet__order-bottom').eq(index).slideDown()
                    $('.cabinet__order-bottom').eq(index).addClass('cabinet__order-bottom_active')
                } else {
                    $('.cabinet__order-bottom').eq(index).slideUp()
                    setTimeout(function () {
                        $('.cabinet__order-bottom').eq(index).removeClass('cabinet__order-bottom_active')
                    }, 400)
                }
                slide = false
                setTimeout(function () {
                    slide = true
                }, 500)
            }
        })
    })
    $('.cabinet-tab').each(function (index) {
        $(this).on('click', () => {
            $('.cabinet__right').each(function () {
                $(this).removeClass('cabinet_active')
            })
            $('.cabinet__right').eq(index).addClass('cabinet_active')
            $('.cabinet-tab').each(function () {
                $(this).removeClass('cabinet-tab_active')
            })
            $(this).addClass('cabinet-tab_active')
        })

    })
    $('.cabinet__enter-name').on('click', () => {
        $('.cabinet__row-bottom').slideDown()
        $('.cabinet__enter-name').hide()
    })
    $('.cabinet__name-cancel').on('click', () => {
        $('.cabinet__row-bottom').slideUp()
        $('.cabinet__enter-name').show()
    })
    $('.enter-change__number-first').on('click', () => {
        $('.number__change').addClass('number__change_active')
        $('.number__change-content').each(function () {
            $(this).removeClass('number__change-content_active')
        })
        $('.content-first').addClass('number__change-content_active')
    })
    $('.enter-number__change-second').on('click', () => {
        $('.number__change-content').each(function () {
            $(this).removeClass('number__change-content_active')
        })
        $('.content-second').addClass('number__change-content_active')
    })
    $('.enter-number__change-third').on('click', () => {
        $('.number__change-content').each(function () {
            $(this).removeClass('number__change-content_active')
        })
        $('.content-third').addClass('number__change-content_active')
    })
    $('.enter-number__change-first').on('click', () => {
        $('.number__change-content').each(function () {
            $(this).removeClass('number__change-content_active')
        })
        $('.content-first').addClass('number__change-content_active')
    })
    $('.number__change-close').on('click', () => {
        $('.number__change').removeClass('number__change_active')
    })

    $('.enter-change__email-first').on('click', () => {
        $('.email__change').addClass('email__change_active')
        $('.email__change-content').each(function () {
            $(this).removeClass('email__change-content_active')
        })
        $('.content-first').addClass('email__change-content_active')
    })
    $('.enter-email__change-second').on('click', () => {
        $('.email__change-content').each(function () {
            $(this).removeClass('email__change-content_active')
        })
        $('.content-second').addClass('email__change-content_active')
    })
    $('.enter-email__change-third').on('click', () => {
        $('.email__change-content').each(function () {
            $(this).removeClass('email__change-content_active')
        })
        $('.content-third').addClass('email__change-content_active')
    })
    $('.enter-email__change-first').on('click', () => {
        $('.email__change-content').each(function () {
            $(this).removeClass('email__change-content_active')
        })
        $('.content-first').addClass('email__change-content_active')
    })
    $('.email__change-close').on('click', () => {
        $('.email__change').removeClass('email__change_active')
    })

    $('.cabinet__remove').on('click', () => {
        $('.account__remove').addClass('account__remove_active')
        $('.account__remove-content').each(function () {
            $(this).removeClass('content_active')
        })
        $('.account__remove-content').eq(0).addClass('content_active')
    })
    $('.account__remove-yes').on('click', () => {
        $('.account__remove-content').each(function () {
            $(this).removeClass('content_active')
        })
        $('.content__second').addClass('content_active')
    })
    $('.account__remove-close, .account__remove-no').on('click', () => {
        $('.account__remove').removeClass('account__remove_active')
    })

    $('.enter-password__change').on('click', () => {
        $('.password__change-content').each(function () {
            $(this).removeClass('password__change-content_active')
        })
        $('.password__change-first').addClass('password__change-content_active')
        $('.password__change').addClass('password__change_active')

    })
    $('.password__change-close').on('click', () => {
        $('.password__change').removeClass('password__change_active')
    })
    $('.enter-password__change-first').on('click', () => {
        $('.password__change-content').each(function () {
            $(this).removeClass('password__change-content_active')
        })
        $('.password__change-first').addClass('password__change-content_active')
    })
    $('.enter-password__change-second').on('click', () => {
        $('.password__change-content').each(function () {
            $(this).removeClass('password__change-content_active')
        })
        $('.password__change-second').addClass('password__change-content_active')
    })
    $('.enter-password__change-third').on('click', () => {
        $('.password__change-content').each(function () {
            $(this).removeClass('password__change-content_active')
        })
        $('.password__change-third').addClass('password__change-content_active')
    })
    $('.enter-password__remove-first').on('click', () => {
        $('.password__change-content').each(function () {
            $(this).removeClass('password__change-content_active')
        })
        $('.password__remove-first').addClass('password__change-content_active')
    })
    $('.enter-password__remove-second').on('click', () => {
        $('.password__change-content').each(function () {
            $(this).removeClass('password__change-content_active')
        })
        $('.password__remove-second').addClass('password__change-content_active')
    })
    $('.enter-password__remove-third').on('click', () => {
        $('.password__change-content').each(function () {
            $(this).removeClass('password__change-content_active')
        })
        $('.password__remove-third').addClass('password__change-content_active')
    })
    $('.search__filter-top').each(function (index) {
        $(this).on('click', () => {
            $(this).toggleClass('active')
            if ($(this).hasClass('active')) {
                $('.search__filter-bottom').eq(index).slideDown()
            } else {
                $('.search__filter-bottom').eq(index).slideUp()
            }
        })
    })
    $('.search__filter-more').each(function (index) {
        $(this).on('click', () => {
            $('.search__filter-checkboxes').eq(index).toggleClass('search-checkboxes_active')
            if($('.search__filter-checkboxes').eq(index).hasClass('search-checkboxes_active')) {
                $('.search__change-text').eq(index).text('Скрыть')
            } else{
                $('.search__change-text').eq(index).text('Смотреть все')
            }
        })
    })
    if ($('#search__filter-range').length) {
        let searchSlider = document.getElementById('search__filter-range')
        noUiSlider.create(searchSlider, {
            start: [200, 1500],
            connect: true,
            range: {
                'min': 200,
                'max': 1500
            }
        });
        searchSlider.noUiSlider.on('slide', () => {
            let max = parseInt($('.noUi-handle-upper').attr('aria-valuenow'))
            $('.price-max').text(max)
        })
        searchSlider.noUiSlider.on('slide', () => {
            let min = parseInt($('.noUi-handle-lower').attr('aria-valuenow'))
            $('.price-min').text(min)
        })
    }

    $('.search__filter-mark').each(function (index) {
        $(this).on('click', () => {
            $('.search__filter-checkbox').eq(index).toggleClass('search-checkbox_active')
        })
    })
    $('.search__direction-item').each(function (index) {
        $(this).on('click', () => {
            $('.search__direction-item').each(function () {
                $(this).removeClass('search__direction_active')
            })
            $(this).addClass('search__direction_active')
        })
    })
    $('.search-enter-down').each(function (index) {
        $(this).on('click', () => {
            $(this).toggleClass('active')
            if ($(this).hasClass('active')) {
                $('.search__select-bottom').eq(index).slideDown()
            } else {
                $('.search__select-bottom').eq(index).slideUp()
            }

        })
    })
    $('.search__select-sort-item').each(function (index) {
        $(this).on('click', () => {
            let text = $(this).text()
            $('.search__sort-selected').text(text)
            $('.search__sort-select-bottom').slideUp()
            $('.search-enter-down').eq(0).removeClass('active')
        })
    })
    $('.search__select-count-item').each(function (index) {
        $(this).on('click', () => {
            let text = $(this).text()
            $('.search__count-selected').text(text)
            $('.search__count-select-bottom').slideUp()
            $('.search-enter-down').eq(1).removeClass('active')
        })
    })
    $('.about-content-close').on('click', () => {
        $('.about__content').removeClass('about__content_active')
    })
    if ($(window).width() <= '1024') {
        $('.about__content').removeClass('about__content_active')
    }
    $('.enter-delivery-about').on('click', () => {
        $('.mobile-none').each(function () {
            $(this).removeClass('mobile-active')
        })
        $('.text__delivery').addClass('mobile-active')
    })
    $('.enter-about-about').on('click', () => {
        $('.mobile-none').each(function () {
            $(this).removeClass('mobile-active')
        })
        $('.text__about').addClass('mobile-active')
    })
    $('.enter-return-about').on('click', () => {
        $('.mobile-none').each(function () {
            $(this).removeClass('mobile-active')
        })
        $('.text__return').addClass('mobile-active')
    })
    if ($('.contact').length) {
        $('.awards').addClass('awards-hide')
    }
    $('.contact-form-close').on('click', () => {
        $('.contact__right').removeClass('contact__right-mobile_active')
    })
    $('.enter-contact-form').on('click', () => {
        $('.contact__right').addClass('contact__right-mobile_active')
    })

    $('.cabinet__order-down-mobile-close').each(function (index) {
        $(this).on('click', () => {
            $('.cabinet__order-bottom').removeClass('cabinet__order-bottom_active')
            $('.cabinet__order-bottom').slideUp(0)
            $('.cabinet-order-arrow').removeClass('cabinet-order-arrow_active')
        })
    })


    if ($(window).width() < 1009 ) {
        $('.cabinet-h1').text('Личные данные')
        $('.cabinet-tab-dates').on('click', () => {
            $('.cabinet-h1').text('Личные данные')
        })
        $('.cabinet-tab-orders').on('click', () => {
            $('.cabinet-h1').text('Мои заказы')
        })
        $('.cabinet-tab-favourite').on('click', () => {
            $('.cabinet-h1').text('Избраное')
        })
    }
    $('.password-visible').each(function (index) {
        $(this).on('click', () => {
            $('.password-wrapper').eq(index).removeClass('password-wrapper_active')
            $('.password').eq(index).attr('type', 'password')

        })

    })
    $('.password-hidden').each(function (index) {
        $(this).on('click', () => {
            $('.password-wrapper').eq(index).addClass('password-wrapper_active')
            $('.password').eq(index).attr('type', 'text')
        })
    })
    if ($('.phone_mask').length) {
        $(".phone_mask").mask("+38(999)999-99-99")
    }


    $('.first-check input').each(function () {
        let count = 0
        $('body').on('keyup', () => {
            if ($('.first-check .log-phone').val().length > 10) {
                console.log('1')
            }
        })
    })
    $('.selected').on('click', () => {
        $('.select-down').toggleClass('select-down_active')
    })
    $('.select-down span').each(function (index) {
        $(this).on('click', () => {
            $('.selected-text').text($(this).text())
            $('.select-down').removeClass('select-down_active')
            $('.ordering__delivery-post-way').each(function () {
                $(this).removeClass('ordering__delivery-post-way_active')
            })
            $('.ordering__delivery-post-way').eq(index).addClass('ordering__delivery-post-way_active')
        })
    })
    $('.ordering__tab').each(function (index) {
        $(this).on('click', () => {
            $('.ordering__tab').each(function () {
                $(this).removeClass('ordering__tab_active')
            })
            $('.ordering__tab').eq(index).addClass('ordering__tab_active')
            $('.ordering__change').each(function () {
                $(this).removeClass('ordering__change_active')
            })
            $('.ordering__change').eq(index).addClass('ordering__change_active')
        })
    })
    $('.enter-ordering__delivery').on('click', () => {
        $('.ordering__tab').eq(1).removeClass('ordering__tab_hide')
    })
    $('.ordering-enter-pay').on('click', () => {
        $('.ordering__tab').eq(2).removeClass('ordering__tab_hide')
    })
    $('.ordering__pay-button').on('click', () => {
        $('.ordering__change').each(function () {
            $(this).removeClass('ordering__change_active')
        })
        $('.ordering__tabs').addClass('ordering__tabs_hide')
        $('.ordering__change_done').addClass('ordering__change_active')
        if ($(window).width() < 1009) {
            $('.ordering__dates').addClass('ordering__change-mobile')
            $('.ordering__pay').addClass('ordering__change-mobile')
            $('.ordering__delivery').addClass('ordering__change-mobile')
            $('.ordering__right').addClass('ordering__right-mobile')

        }
    })
    $('.enter-ordering-dates').on('click', () => {
        $('.ordering__change').each(function () {
            $(this).removeClass('ordering__change_active')
        })
        $('.ordering__tabs').removeClass('ordering__tabs_hide')
        $('.ordering__pay').addClass('ordering__change_active')
        $('.ordering__dates').removeClass('ordering__change-mobile')
        $('.ordering__pay').removeClass('ordering__change-mobile')
        $('.ordering__delivery').removeClass('ordering__change-mobile')
        $('.ordering__right').removeClass('ordering__right-mobile')
    })
    $('.header__mobile-profile-top').on('click', () => {
        $('.header__mobile-profile-log').toggleClass('header__mobile-profile_active')
        if ($('.header__mobile-profile-log').hasClass('header__mobile-profile_active')) {
            $('.header__mobile-profile-bottom').slideDown()
        } else {
            $('.header__mobile-profile-bottom').slideUp()
        }
    })
    $('.header__burger-closed').on('click', () => {
        $('.header-container').addClass('container-mobile_active')
    })
    $('.header__burger-open').on('click', () => {
        $('.header-container').removeClass('container-mobile_active')
    })
    $('.enter-catalog').on('click', () => {
        $('.header__mobile').addClass('header__mobile-catalog-open')
    })
    $('.enter-header-without').on('click', () => {
        $('.header__mobile').removeClass('header__mobile-catalog-open')
    })

    $('.mobile-search-input').on('click', () => {
        $('.mobile-search').addClass('mobile-search_active')
    })
    $('.mobile-search-svg-two').on('click', () => {
        $('.mobile-search').removeClass('mobile-search_active')
        $('.mobile-search__bottom').addClass('mobile-search__bottom-hide')
    })
    $('.mobile-search-svg-one').on('click', () => {
        $('.mobile-search__bottom').removeClass('mobile-search__bottom-hide')
    })

    $('.enter-mobile-filters').on('click', () => {
        $('.search__filters').addClass('search__filters-mobile_active')
    })
    $('.remove-mobile-filters').on('click', () => {
        $('.search__filters').removeClass('search__filters-mobile_active')
    })

    $('.years-button').on('click', () => {
        $('.years').addClass('years-hide')
    })
    $('.cookie-button').on('click', () => {
        $('.cookie').addClass('cookie-hide')
    })
    $('.enter-policy').on('click', () => {
        $('.policy').addClass('popup_active')
    })
    $('.enter-contract').on('click', () => {
        $('.contract').addClass('popup_active')
    })
    $('.popup-close').on('click', () => {
        $('.policy').removeClass('popup_active')
        $('.contract').removeClass('popup_active')
    })
    if (!window.localStorage.getItem('preloaderIsShown')) {
        $('.years').removeClass('years-hide')
        window.localStorage.setItem('preloaderIsShown', true);
    } else {
        $('.years').css('display', 'none')
    }

    if (!window.localStorage.getItem('cookie')) {
        $('.cookie').removeClass('cookie-hide')
        window.localStorage.setItem('cookie', true);
    } else {
        $('.cookie').css('display', 'none')
    }
})















