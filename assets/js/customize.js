$(document).on('ready', function() {
  $(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 9,
    arrows: false,
    centerPadding: '60px',
    centerMode: true,
    responsive: [
        {
          breakpoint: 1355,
          settings: {
            slidesToShow: 7,
            arrows: false,
            centerPadding: '60px',
            centerMode: true,
            infinite: true,
            }
        },
        {
          breakpoint: 1120,
          settings: {
            slidesToShow: 5,
            centerPadding: '60px',
            arrows: false,
            centerMode: true,
            infinite: true,
            }
        },
        {
          breakpoint: 835,
          settings: {
            slidesToShow: 5,
            centerPadding: '60px',
            arrows: false,
            centerMode: true,
            infinite: true,
            }
        },
        {
          breakpoint: 715,
          settings: {
            slidesToShow: 3,
            centerPadding: '60px',
            centerMode: true,
            arrows: false,
            infinite: true,
            }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            centerPadding: '40px',
            arrows: false,
            centerMode: true,
            infinite: true,
            }
        },
        {
          breakpoint: 457,
          settings: {
            slidesToShow: 3,
            centerPadding: '40px',
            arrows: false,
            centerMode: true,
            infinite: true,
            }
        },
    ]
  }); 
});
