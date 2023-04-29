(function ($) {
  "use strict";

  var $window = $(window);

  /* Preloader Effect */
  $window.on("load", function () {
    $(".preloader").fadeOut(600);
  });

  //   /* Top Menu */
  //   var navheight = $("#main-nav").outerHeight();
  //   $(document).on(
  //     "click",
  //     "#navigation ul li a, #responsive-menu ul li a",
  //     function () {
  //       var id = $(this).attr("href");
  //       var h = Math.ceil($(id).offset().top);
  //       $("body,html")
  //         .stop()
  //         .animate(
  //           {
  //             scrollTop: h - 81,
  //           },
  //           800
  //         );
  //       $(".navbar-collapse").collapse("hide");

  //       return false;
  //     }
  //   );

  //   /* Sticky header */
  //   $window.scroll(function () {
  //     if ($window.scrollTop() > 61) {
  //       $(".navbar").addClass("sticky-header");
  //     } else {
  //       $(".navbar").removeClass("sticky-header");
  //     }
  //   });

  //   /* slick nav */

  //   $("#main-menu").slicknav({
  //     label: "",
  //     duration: 1000,
  //     easingOpen: "easeOutBounce", //available with jQuery UI
  //     prependTo: "#responsive-menu",
  //   });

  //   // $("#main-menu").slicknav({
  //   //   prependTo: "#responsive-menu",
  //   //   label: "",
  //   //   closeOnClick: true,
  //   // });
})(jQuery);
