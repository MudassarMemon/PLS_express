(function ($) {
    // USE STRICT
    "use strict";


    //-------------------------------------------------------
    // Config Pagepiling
    //-------------------------------------------------------

    try {

        var pagePillingWrap = $('.js-pagepilling');
        var pageInfo = $('#js-pageinfo');
        var pageTitle = pageInfo.find('.page-info__title');
        var header = $('.header-page-pilling');
        var wW = $(window).width();
        const navBar = document.querySelector('.navbar');

        // EFFECT VARIABLE
        var jsLine = $('.js-line');
          
        if(wW > 1500) {

            pagePillingWrap.each(function () {

                var that = $(this);

                that.pagepiling({
                    menu: null,
                    direction: 'vertical',
                    verticalCentered: true,
                    sectionsColor: [],
                    anchors: [],
                    scrollingSpeed: 550,
                    easing: 'ease-in-out',
                    loopBottom: false,
                    loopTop: false,
                    css3: true,
                    navigation: {
                        'position': 'right'
                    },
                    normalScrollElements: null,
                    normalScrollElementTouchThreshold: 5,
                    touchSensitivity: 5,
                    keyboardScrolling: true,
                    sectionSelector: '.section-pp',
                    animateAnchor: false,
                    onLeave: function(index, nextIndex, direction){

                        /* CHANGE PAGE INFO */
                        var nextSection = $('.page-pagepiling-wrap .section-pp').eq(nextIndex-1);
                        var color = nextSection.data('background');
                        var title = nextSection.data('title');
                        pageInfo.removeClass('light dark').addClass(color);
                        $('#pp-nav').removeClass('light dark').addClass(color);
                        pageTitle.text(title);
                        header.removeClass('light dark').addClass(color);
                        if (color === 'light') header.find('.logo img').attr('src', 'images/icon/logo-black.png');
                        else header.find('.logo img').attr('src', 'images/icon/logo-white.png');


                        /* EFFECTS */
                        if (nextIndex == 3 || (nextIndex == 2 && title == "iaq_nav_toggle")){
                            jsLine.addClass('active');
                            navBar.style.backgroundColor = 'black';
                        } else {
                            navBar.style.backgroundColor = ''; // Original color
                        }
                        
                    }

                });

            });

            $('.js-mouse-wheel').on('click', function (e) {
                $.fn.pagepiling.moveSectionDown();
                e.preventDefault();
            });

        }


    }
    catch (err) {
        console.log(err);
    }
})(jQuery);




document.addEventListener('DOMContentLoaded', function() {
    let section = document.querySelector("#pp-scrollable-services");
    let width = window.innerWidth;

    if (width < 1500) {
        section.classList.remove("pp-scrollable");
    }
}
)