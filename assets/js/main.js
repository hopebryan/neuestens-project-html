$(document).ready(function(){

    $('.menu-burger').click( function() {
        $('.bar').toggleClass('animate'); // Creates the Hamburger -> X Animation on first click
        $('.overlay').fadeToggle(100, 'linear'); // toggles open the nav overlay // Optionally could change fadeIn & fadeut to both toggleClass
        $('.menu-options-list').delay(100).addClass('slideDownIn'); // Rapidly fades option in upward into place
    });



    $(function () {
        'use strict';

        var activeTabClassName = $('#centered');

        var $swipeTabsContainer = $('.swipe-tabs'),
            $swipeTabs = $('.swipe-tab'),
            $swipeTabsContentContainer = $('.swipe-tabs-container'),
            currentIndex = 0,
            activeTabClassName = 'active-tab';

        $swipeTabsContainer.on('init', function(event, slick) {
            $swipeTabsContentContainer.removeClass('invisible');
            $swipeTabsContainer.removeClass('invisible');

            currentIndex = slick.getCurrent();
            $swipeTabs.removeClass(activeTabClassName);
            $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
        });

        $swipeTabsContainer.slick({
            //slidesToShow: 3.25,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            swipeToSlide: true,
            centerMode: true,
            touchThreshold: 10
        });

        $swipeTabsContentContainer.slick({
            asNavFor: $swipeTabsContainer,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            swipeToSlide: true,
            centerMode: true,
            draggable: false,
            touchThreshold: 10
        });


        $swipeTabs.on('click', function(event) {
            // gets index of clicked tab
            currentIndex = $(this).data('slick-index');
            $swipeTabs.removeClass(activeTabClassName);
            $('.swipe-tab[data-slick-index=' + currentIndex +']').addClass(activeTabClassName);
            $swipeTabsContainer.slick('slickGoTo', currentIndex);
            $swipeTabsContentContainer.slick('slickGoTo', currentIndex);
        });

        //initializes slick navigation tabs swipe handler
        $swipeTabsContentContainer.on('swipe', function(event, slick, direction) {
            currentIndex = $(this).slick('slickCurrentSlide');
            $swipeTabs.removeClass(activeTabClassName);
            $('.swipe-tab[data-slick-index=' + currentIndex + ']').addClass(activeTabClassName);
        });
    });

});