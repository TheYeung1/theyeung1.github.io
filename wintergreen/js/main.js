
var colors = ['red', 'blue', 'green', 'yellow', 'white'];

$(document).ready(function(){
  var yeah = new Audio('res/audio/yeah.mp3');



  window.setInterval(function(){
    var currentTime = Date.now();
    var timeDiff = new Date(2014, 11, 30, 0, 0, 0, 0) - currentTime;
    var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
    var diffHours = Math.floor(timeDiff / (1000 * 3600))  % 24;
    var diffMinutes = Math.floor(timeDiff / (1000 * 60)) % 60;
    var diffSeconds = Math.floor(timeDiff / 1000) % 60;

    $("#countdown-days").text(diffDays);
    $("#countdown-hours").text(diffHours);
    $("#countdown-minutes").text(diffMinutes);
    $("#countdown-seconds").text(diffSeconds);
  }, 1000);

  $("#turnt-yes").hover(function(){
    $(this).css("font-size", 80);
    yeah.play();
  }, function(){
    $(this).css("font-size", 25);
  });

  $("#turnt-no").hover(function(){
    $(this).css("font-size", 80);
  }, function(){
    $(this).css("font-size", 25);
  });

  $("#turnt-yes").click(function(){
    $("#liljon").append("<iframe id=\"liljonvid\" width=\"1280\" height=\"720\" src=\"http:\/\/www.youtube.com\/embed\/CsyAagzMuUo?rel=0&autoplay=1&cc_load_policy=1\" frameborder=\"0\" allowfullscreen><\/iframe>");
    $("#liljon").css("width", "100%");
    $("#liljon").css("height", "100%");
    $("#liljonvid").css("width", "100%");
    $("#liljonvid").css("height", "100%");
    window.setInterval(function(){
      $("#countdown-days")
      .css('color', colors[Math.floor(Math.random()*colors.length)])
      .animate({
        fontSize: (Math.floor(Math.random()*colors.length) * 40) + 10
      }, 500);
      $("#countdown-hours").css('color', colors[Math.floor(Math.random()*colors.length)])
      .animate({
        fontSize: (Math.floor(Math.random()*colors.length) * 40) + 10
      }, 500);
      $("#countdown-minutes").css('color', colors[Math.floor(Math.random()*colors.length)])
      .animate({
        fontSize: (Math.floor(Math.random()*colors.length) * 40) + 10
      }, 500);
      $("#countdown-seconds").css('color', colors[Math.floor(Math.random()*colors.length)]);
      $(".count-time-label").css('color', colors[Math.floor(Math.random()*colors.length)]);
      $("#crew-label").css('color', colors[Math.floor(Math.random()*colors.length)]);
      $("#turnt-question").css('color', colors[Math.floor(Math.random()*colors.length)]).animate({
        fontSize: (Math.floor(Math.random()*colors.length) * 20) + 10
      }, 500);
      $("#turnt-yes").css('color', colors[Math.floor(Math.random()*colors.length)]);
      $("#turnt-no").css('color', colors[Math.floor(Math.random()*colors.length)]);
    }, 100);
  });


});
