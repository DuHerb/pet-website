$(function(){
  $("#darkButton").click(function(){
    $("body").addClass("darkTheme");
  });
  $("#lightButton").click(function(){
    $("body").removeClass("darkTheme");
  });

  $('p').click(function(){
    $(this).toggleClass("highlite");
  });
});
