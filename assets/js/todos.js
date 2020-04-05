$("ul").on("click", "li", function () {
  $(this).toggleClass("complete");
});

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    var text = $(this).val();
    $("input").val("");
    $("ul").append(
      "<li><span><i class='fas fa-window-close'></i></span>" + text + "</li>"
    );
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
