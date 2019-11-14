 $(document).ready(function() {

    $("#castrecording-submit").click(function(){
    var castRecordingString = $("#cast-recording").val();
    var castRecording = parseInt(castRecordingString);

    if ( castRecording > 10 ) {
      $("#castrecording-form").hide();
      $("#answer").text("Broadway, Here I Come!");
      $("#broadway-img").attr("src", "https://media.giphy.com/media/QNUT5FSrWPtf7GqD5J/giphy.gif");
      
    } else {
      $("#answer").text("You can't sit with us :/");
     var x = document.getElementById("myImg");
    }
  });

});
