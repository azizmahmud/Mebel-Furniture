$(document).ready(function () {
  // init Isotope
  var $grid = $(".product-items").isotope({
    // options
  });
  // filter items on button click
  $(".menu-buttons").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
  // add and remove class on button click
  $(".menu-buttons").on("click", "button", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".testimonial-slide").click(function () {
    let image = $(this).attr("src");
    $(".testimonial-thumbnail").attr("src", image);
  });

  $(".review-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    prevArrow: '<button type="button"class="slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button"class="slick-next"><img src="img/arrow-right.svg"></button>',
  });
});
