$(document).ready(function () {
  $("div").animate(
    {
      width: "500px",
    },
    5000,
    function () {
      $("span").fadeIn(1000);
    }
  );
});
