$(document).ready(() => {
  // Adds class sticky to menu on page scroll
  var navScrollTop = $('nav').offset().top;

  function navScroll() {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > navScrollTop) {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }
  navScroll();

  $(window).scroll(function() {
    navScroll();
  });

  // Media query displays menu items for mobile view
  $('.handle').on('click', function() {
    $('nav ul').toggleClass('showing');
  });
});
