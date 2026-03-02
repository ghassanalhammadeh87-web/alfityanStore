// init Isotope
var $products = $('.all-products').isotope({
  // options
  originLeft: false,

});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
  var filterValue = $(this).attr('data-filter');
  $products.isotope({ filter: filterValue });
});



const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 50,
    // },
  },
});





// tel script
// import intlTelInput from "intl-tel-input";
// import ar from "intl-tel-input/i18n/ar"; // arabic

// const input = document.querySelector("#phone");

// intlTelInput(input, {
//   i18n: ar,
//   initialCountry: "eg",
//   loadUtils: () => import("/intl-tel-input/js/utils.js?1758656474598") // for formatting/placeholders etc
// });

