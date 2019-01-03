$(document).ready(function () {
  $("#tv-animation").click(function () {
    let ctx = document.getElementById("tv-animation").getContext("2d");
    ctx.moveTo(10, 10);
    ctx.font = "30px arial white";
    ctx.strokeText('Hello World', 10, 50);

  })
})