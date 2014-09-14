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
    $("#liljon").append("<iframe id=\"liljonvid\" width=\"1280\" height=\"720\" src=\"http:\/\/www.youtube.com\/embed\/CsyAagzMuUo?rel=0\" frameborder=\"0\" allowfullscreen><\/iframe>");
    $("#liljon").css("width", "100%");
    $("#liljon").css("height", "100%");
    $("#liljonvid").css("width", "100%");
    $("#liljonvid").css("height", "100%");
  });


});
