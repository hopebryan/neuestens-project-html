// jQuery(function($){
//   'use strict';

// (function () {
//         var $frame = $('#centered');
//         var $wrap  = $frame.parent();

//         // Call Sly on frame
//         $frame.sly({
//             horizontal: 1,
//             itemNav: 'centered',
//             smart: 1,
//             activateOn: 'click',
//             mouseDragging: 1,
//             touchDragging: 1,
//             releaseSwing: 1,
//             startAt: 4,
//             scrollBar: $wrap.find('.scrollbar'),
//             scrollBy: 1,
//             speed: 300,
//             elasticBounds: 1,
//             easing: 'easeOutExpo',
//             dragHandle: 1,
//             dynamicHandle: 1,
//             clickBar: 1,
//             infinite: true;

//             // Buttons
//             prev: $wrap.find('.prev'),
//             next: $wrap.find('.next')
//         });
//     }());

// });


$(function () {
    'use strict';

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
        infinite: false,
        swipeToSlide: true,
        touchThreshold: 10
    });

    $swipeTabsContentContainer.slick({
        asNavFor: $swipeTabsContainer,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        swipeToSlide: true,
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