
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
    $(this).css("position", "relative");
    $(this).css("display", "block");
    $(this).animate({
      top: (Math.floor(Math.random() * 100)) + "%",
      left: (Math.floor(Math.random() * 100)) + "%"
    }, 500);
  }, function(){
    $(this).css("font-size", 25);
  });

  $("#turnt-yes").click(function(){
    $("#liljon").append("<iframe id=\"wintergreenvid\" width=\"1280\" height=\"720\" src=\"http:\/\/www.youtube.com\/embed\/HAL-D9BwpXY?rel=0&autoplay=1&cc_load_policy=1&t=25s&enablejsapi=1\" frameborder=\"0\" allowfullscreen><\/iframe>");
    $("#liljon").append("<iframe id=\"liljonvid\" width=\"1280\" height=\"720\" style=\"visibility: hidden\" src=\"http:\/\/www.youtube.com\/embed\/CsyAagzMuUo?rel=0&autoplay=1&cc_load_policy=1&t=17s\" frameborder=\"0\" allowfullscreen><\/iframe>");
    //var wintergreenvid = document.getElementById("wintergreenvid");
    //wintergreenvid.mute();
    $("#liljon").css("width", "100%");
    $("#liljon").css("height", "100%");
    $("#wintergreenvid").css("width", "100%");
    $("#wintergreenvid").css("height", "100%");
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
