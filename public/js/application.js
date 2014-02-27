$(document).ready(function(){

  $("#get_color").on("click", function(event){
    event.preventDefault();

    $.post('/color', function(serverResponse){
      data = JSON.parse(serverResponse);
      var box = "#color_me :nth-child(" + data.cell + ")";
      $(box).css("backgroundColor", data.color);
    })
  })

});