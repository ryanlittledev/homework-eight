$(document).ready(function() {
    $(".link").click(function(event) {
      event.preventDefault(); 

      var target = $(this).data("target");
      
      $(".content").hide();
      $("#" + target).show();
    });
  });