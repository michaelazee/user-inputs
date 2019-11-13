$(function() {
  //All JS goes within these brackets  
  
  $("#castrecording-submit").click(function(){
    
    //select the box with id of cast recordings
    //get the value from that box
    var castrecordingString = $("#castrecording").val();

    //convert string to number
    var castrecording = parseInt(castrecordingString);

    //check if cast recording is greater than 10
    if ( castrecording >= 10 ) {
      //if cast recording is greater than 10 show the next question
      $("#wicked-form").show();
      $("#castrecording-form").hide();
    } else {
      $("#answer").text("you can't sit with us");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }
    
  });

  $("#wicked-submit").click(function(){
    var wickedString = $("#wicked").val();
    var wickedAlbums = parseInt(wickedString);

    if ( wicked = true ) {
      $("#wicked-form").hide();
      $("#answer").text("You're in!");
      $("#club-img").attr("src", "https://media.giphy.com/media/zyxiqEQb6wTSg/giphy.gif");
      
    } else {
      $("#answer").text("scram. youre too young.");
      $("#club-img").attr("src", "http://energy.gov/sites/prod/files/styles/borealis_default_hero_respondlarge/public/door_5481543.jpg?itok=joaNZ-Zx");
    }
  });

});