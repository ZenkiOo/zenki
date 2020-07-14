app.text = {
  init: function () {
    $(".text-page h1").blast({ delimiter: "character", tag: "span" });
    a = 0;
    $(".text-page h1 .blast").each(function () {
      var el = $(this);
      setTimeout(function () {
        el.addClass("animated bounceIn");
      }, a);
      a = a + 50;
    });
    setTimeout(function () {
      $(".text-page .blast").removeClass("animated bounceIn");
      $(".text-page .blast").css("opacity", 1);
      $(".text-page .blast").mouseenter(function () {
        var el = $(this);
        $(this).addClass("animated rubberBand");
        $(this).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            el.removeClass("animated rubberBand");
          }
        );
      });
    }, 1000);
  },
};
