// $(function(){
//     $('.slider').slick({
//         dots: true,
//         arrows: false,
//     })
// })

// $('.slider').slick({
//  dots: true,
//  prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow"></button>',
//  nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow"></button>',
//  infinite: true,
//  slidesToShow: 2,
//  slidesToScroll: 1
// });

// $('.slider').slick({
//  centerMode: true,
//  centerPadding: '60px',
//  slidesToShow: 2,
//  responsive: [
//   {
//    breakpoint: 768,
//    settings: {
//     arrows: false,
//     centerMode: true,
//     centerPadding: '40px',
//     slidesToShow: 2
//    }
//   },
//   {
//    breakpoint: 480,
//    settings: {
//     arrows: false,
//     centerMode: true,
//     centerPadding: '40px',
//     slidesToShow: 1
//    }
//   }
//  ]
// });


// $('.slider').slick({
//  dots: false,
//  infinite: false,
//  speed: 300,
//  slidesToShow: 2,
//  slidesToScroll: 1,
//  responsive: [
//   {
//    breakpoint: 1024,
//    settings: {
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     infinite: true,
//     dots: true
//    }
//   },
//   {
//    breakpoint: 600,
//    settings: {
//     slidesToShow: 2,
//     slidesToScroll: 1
//    }
//   },
//   {
//    breakpoint: 480,
//    settings: {
//     slidesToShow: 1,
//     slidesToScroll: 1
//    }
//   }

//  ]
// });


$('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow"></button>',
    responsive: [
        {
            breakpoint: 769,
            settings: {
                arrows: false
            }
        },
    ]
});